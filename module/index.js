//add by owen 修复 path 无法引用http://页面的问题 begin
String.prototype.startWith = function(str) {
    if (str == null || str == "" || this.length == 0 || str.length > this.length)
        return false;
    if (this.substr(0, str.length) == str)
        return true;
    else
        return false;
    return true;
}

//add by owen 修复 path 无法引用http://页面的问题 end
layui.define(['config', 'admin', 'layer', 'laytpl', 'element', 'form'], function(exports) {
    var $ = layui.$;
    var config = layui.config;
    var admin = layui.admin;
    var layer = layui.layer;
    var laytpl = layui.laytpl;
    var element = layui.element;
    var form = layui.form;

    var index = {
        //initLeftNav: function() {
        // // 判断权限
        // for (var i = config.menus.length - 1; i >= 0; i--) {
        //     var tempMenu = config.menus[i];
        //     if (tempMenu.auth && !admin.hasPerm(tempMenu.auth)) {
        //         config.menus.splice(i, 1);
        //         continue;
        //     }
        //     if (!tempMenu.subMenus) {
        //         continue;
        //     }
        //     for (var j = tempMenu.subMenus.length - 1; j >= 0; j--) {
        //         var jMenus = tempMenu.subMenus[j];
        //         if (jMenus.auth && !admin.hasPerm(jMenus.auth)) {
        //             tempMenu.subMenus.splice(j, 1);
        //             continue;
        //         }
        //         if (!jMenus.subMenus) {
        //             continue;
        //         }
        //         for (var k = jMenus.subMenus.length - 1; k >= 0; k--) {
        //             if (jMenus.subMenus[k].auth && !admin.hasPerm(jMenus.subMenus[k].auth)) {
        //                 jMenus.subMenus.splice(k, 1);
        //                 continue;
        //             }
        //         }
        //     }
        // }
        // // 去除空的目录
        // for (var i = config.menus.length - 1; i >= 0; i--) {
        //     var tempMenu = config.menus[i];
        //     if (tempMenu.subMenus && tempMenu.subMenus.length <= 0) {
        //         config.menus.splice(i, 1);
        //         continue;
        //     }
        //     if (!tempMenu.subMenus) {
        //         continue;
        //     }
        //     for (var j = tempMenu.subMenus.length - 1; j >= 0; j--) {
        //         var jMenus = tempMenu.subMenus[j];
        //         if (jMenus.subMenus && jMenus.subMenus.length <= 0) {
        //             tempMenu.splice(j, 1);
        //             continue;
        //         }
        //     }
        // }
        // // 渲染
        // $('.layui-layout-admin .layui-side').load('pages/side.html', function () {
        //     laytpl(sideNav.innerHTML).render(config.menus, function (html) {
        //         $('#sideNav').after(html);
        //     });
        //     element.render('nav');
        //     admin.activeNav(Q.lash);
        // });

        //     admin.req('api-user/menus/current', {}, function(data) {
        //         admin.putTempData("menus", data);
        //         var menus = data;
        //         // 判断权限
        //         for (var i = menus.length - 1; i >= 0; i--) {
        //             var tempMenu = menus[i];
        //             if (tempMenu.auth && !admin.hasPerm(tempMenu.auth)) {
        //                 menus.splice(i, 1);
        //                 continue;
        //             }
        //             if (!tempMenu.subMenus) {
        //                 continue;
        //             }
        //             for (var j = tempMenu.subMenus.length - 1; j >= 0; j--) {
        //                 var jMenus = tempMenu.subMenus[j];
        //                 if (jMenus.auth && !admin.hasPerm(jMenus.auth)) {
        //                     tempMenu.subMenus.splice(j, 1);
        //                     continue;
        //                 }
        //                 if (!jMenus.subMenus) {
        //                     continue;
        //                 }
        //                 for (var k = jMenus.subMenus.length - 1; k >= 0; k--) {
        //                     if (jMenus.subMenus[k].auth && !admin.hasPerm(jMenus.subMenus[k].auth)) {
        //                         jMenus.subMenus.splice(k, 1);
        //                         continue;
        //                     }
        //                 }
        //             }
        //         }
        //         // 去除空的目录
        //         for (var i = menus.length - 1; i >= 0; i--) {
        //             var tempMenu = menus[i];
        //             if (tempMenu.subMenus && tempMenu.subMenus.length <= 0) {
        //                 menus.splice(i, 1);
        //                 continue;
        //             }
        //             if (!tempMenu.subMenus) {
        //                 continue;
        //             }
        //             for (var j = tempMenu.subMenus.length - 1; j >= 0; j--) {
        //                 var jMenus = tempMenu.subMenus[j];
        //                 if (jMenus.subMenus && jMenus.subMenus.length <= 0) {
        //                     tempMenu.splice(j, 1);
        //                     continue;
        //                 }
        //             }
        //         }
        //         // 渲染
        //         $('.layui-layout-admin .layui-side').load('pages/side.html', function() {
        //             laytpl(sideNav.innerHTML).render(menus, function(html) {
        //                 $('#sideNav').after(html);
        //             });
        //             element.render('nav');
        //             admin.activeNav(Q.lash);
        //         });
        //     }, 'GET');
        // },

        // 注册页面路由
        initRouter: function() {
            index.regRouter(config.menus);

            Q.reg('console', function() {
                var menuPath = 'pages/console.html'
                index.loadView('console', menuPath, '主页');
            });

            Q.init({
                index: 'console'
            });
        },

        // 使用递归注册
        regRouter: function(menus) {
            $.each(menus, function(i, data) {
                if (data.url && data.url.indexOf('#!') == 0) {
                    Q.reg(data.url.substring(2), function() {
                        //临时保存url
                        data.path.startWith("http://") ? admin.putTempData("params", data.path) : null;
                        var menuId = data.url.substring(2);
                        //add by owen 修复 path 无法引用http://页面的问题
                        var menuPath = data.path.startWith("http://") ? 'pages/tpl/iframe.html' : 'pages/' + data.path
                        index.loadView(menuId, menuPath, data.name);
                    });
                }
                if (data.subMenus) {
                    index.regRouter(data.subMenus);
                }
            });
        },

        // 加载路由组件
        loadView: function(menuId, menuPath, menuName) {
            var contentDom = '.platform-layout-admin .platform-body .container .right-content';
            var flag; // 选项卡是否添加
            flag = menuPath.startWith("http://") ? false : flag;
            if (!flag || admin.isRefresh) {
                $(contentDom).load(menuPath, function() {
                    admin.isRefresh = false;
                    element.render('breadcrumb');
                    form.render('select');
                });
            }
            admin.activeNav(Q.lash);
        },

        //加载页面事件
        bindEvent: function() {
            //公共头部下拉列表
            $(".header .user").hover(function() {
                $(".dropdown-title span span.flag").addClass("flag-hover");
                $(".dropdown-title span").addClass("active-hover");
                $("ul.dropdown-menu").css('display', 'block');
            }, function() {
                $(".dropdown-title span span.flag").removeClass("flag-hover");
                $(".dropdown-title span").removeClass("active-hover");
                $("ul.dropdown-menu").css('display', 'none');
            });

            // 退出登录
            $('#btnLogout').click(function() {
                layer.confirm('确定退出登录吗？', function() {
                    //通过认证中心tuic  释放当前用户登录信息
                    admin.req('api-auth/oauth/remove/token?access_token=' + config.getToken().access_token, {}, function(data) {
                        config.removeToken();
                        location.replace('login.html');
                    }, 'POST');
                });
            });
        }
    };
    exports('index', index);
});
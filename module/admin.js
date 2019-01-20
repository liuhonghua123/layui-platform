layui.define(['config', 'layer'], function(exports) {
    var config = layui.config;
    var layer = layui.layer;
    var popupRightIndex, popupCenterIndex, popupCenterParam;

    var admin = {
        isRefresh: false,
        // 设置导航栏选中
        activeNav: function(url) {
            // 激活当前点击菜单
            $(".left-menu .items-list li").removeClass("active");
            if (url && url != '') {
                var $a = $('.left-menu .items-list li a[href="#!' + url + '"]');
                $a.parent('li').addClass("active");
            }
        },
        // 右侧弹出
        popupRight: function(path) {
            var param = new Object();
            param.path = path;
            param.id = 'adminPopupR';
            param.title = false;
            param.anim = 2;
            param.isOutAnim = false;
            param.closeBtn = false;
            param.offset = 'r';
            param.shadeClose = true;
            param.area = '336px';
            param.skin = 'layui-layer-adminRight';
            param.end = function() {
                layer.closeAll('tips');
            };
            popupRightIndex = admin.open(param);
            return popupRightIndex;
        },
        // 关闭右侧弹出
        closePopupRight: function() {
            layer.close(popupRightIndex);
        },
        // 中间弹出
        popupCenter: function(param) {
            param.id = 'adminPopupC';
            popupCenterParam = param;
            popupCenterIndex = admin.open(param);
            return popupCenterIndex;
        },
        // 关闭中间弹出并且触发finish回调
        finishPopupCenter: function() {
            layer.close(popupCenterIndex);
            popupCenterParam.finish ? popupCenterParam.finish() : '';
        },
        // 关闭中间弹出
        closePopupCenter: function() {
            layer.close(popupCenterIndex);
        },

        // 封装layer.open
        open: function(param) {
            var sCallBack = param.success;
            param.type = 1;
            param.area = param.area ? param.area : '450px';
            param.offset = param.offset ? param.offset : '120px';
            param.resize ? param.resize : false;
            param.shade ? param.shade : .2;
            param.success = function(layero, index) {
                sCallBack ? sCallBack(layero, index) : '';
                $(layero).children('.layui-layer-content').load(param.path);
            };
            return layer.open(param);
        },

        // 封装ajax请求，返回数据类型为json
        req: function(url, data, success, method) {
            if ('put' == method.toLowerCase()) {
                method = 'POST';
                data._method = 'PUT';
                method = 'PUT';
            } else if ('delete' == method.toLowerCase()) {
                method = 'POST';
                data._method = 'DELETE';
                method = 'DELETE';
            }
            var token = config.getToken();
            if (token) {
                data.access_token = token.access_token;
            }
            //add by owen ajax 执行前置处理器  
            admin.ajax({
                url: config.base_server + url,
                data: data,
                type: method,
                dataType: 'json',
                contentType: "application/json",
                success: success,
                beforeSend: function(xhr) {
                    var token = config.getToken();
                    if (token) {
                        xhr.setRequestHeader('Authorization', 'bearer ' + token.access_token);
                    }
                    //此时发送一个refresh_token
                    // if (access_token != null && access_token.trim().length != 0) {
                    //     $.ajax({
                    //         type: 'get',
                    //         url: domainName + '/api-u/users/current?access_token=' + access_token,
                    //         success: function(data) {
                    //             location.href = 'index.html';
                    //         },
                    //         error: function(xhr, textStatus, errorThrown) {
                    //             if (xhr.status == 401) {
                    //                 localStorage.removeItem("access_token");
                    //             }
                    //         }
                    //     });
                    // }
                }
            });
        },

        // 封装ajax请求
        ajax: function(param) {
            var successCallback = param.success;
            param.success = function(result, status, xhr) {
                // 判断登录过期和没有权限
                var jsonRs;
                if ('json' == param.dataType.toLowerCase()) {
                    jsonRs = result;
                } else if ('html' == param.dataType.toLowerCase() || 'text' == param.dataType.toLowerCase()) {
                    jsonRs = admin.parseJSON(result);
                }
                if (jsonRs) {
                    if (jsonRs.code == 401) {
                        config.removeToken();
                        layer.msg('登录过期', {
                            icon: 2,
                            time: 1500
                        }, function() {
                            location.replace('/login.html');
                        }, 1000);
                        return;
                    } else if (jsonRs.code == 403) {
                        layer.msg('没有权限', {
                            icon: 2
                        });
                        return;
                    }
                }
                // console.log(result);
                successCallback(result, status, xhr);
            };
            param.error = function(xhr) {
                param.success({
                    code: xhr.status,
                    msg: xhr.statusText
                });
            };
            //发送同步ajax请求
            param.async = false;
            // console.log(param);
            $.ajax(param);
        },

        // 窗口大小改变监听
        onResize: function() {
            if (config.autoRender) {
                if ($('.layui-table-view').length > 0) {
                    setTimeout(function() {
                        admin.events.refresh();
                    }, 800);
                }
            }
        },

        // 缓存临时数据
        putTempData: function(key, value) {
            if (value) {
                layui.sessionData('tempData', {
                    key: key,
                    value: value
                });
            } else {
                layui.sessionData('tempData', {
                    key: key,
                    remove: true
                });
            }
        },

        // 获取缓存临时数据
        getTempData: function(key) {
            return layui.sessionData('tempData')[key];
        },
    };

    // ewAdmin提供的事件
    admin.events = {
        // 关闭所有弹窗
        closeDialog: function() {
            layer.closeAll('page');
        }
    };

    // 所有ew-event
    $('body').on('click', '*[ew-event]', function() {
        var event = $(this).attr('ew-event');
        var te = admin.events[event];
        te && te.call(this, $(this));
    });

    // 所有lay-tips处理
    $('body').on('mouseenter', '*[lay-tips]', function() {
        var tipText = $(this).attr('lay-tips');
        var dt = $(this).attr('lay-direction');
        layer.tips(tipText, this, {
            tips: dt || 1,
            time: -1
        });
    }).on('mouseleave', '*[lay-tips]', function() {
        layer.closeAll('tips');
    });

    exports('admin', admin);
});
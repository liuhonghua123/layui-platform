layui.define(function(exports) {
    var config = {
        base_server: 'http://localhost:8080/', // 接口地址，实际项目请换成http形式的地址
        tableName: 'easyweb', // 存储表名
        // autoRender: false, // 窗口大小改变后是否自动重新渲染表格，解决layui数据表格非响应式的问题，目前实现的还不是很好，暂时关闭该功能
        // pageTabs: true, // 是否开启多标签

        // 获取缓存的token
        getToken: function() {
            var t = layui.data(config.tableName).token;
            if (t) {
                return JSON.parse(t);
            }
        },

        // 清除user
        removeToken: function() {
            layui.data(config.tableName, {
                key: 'token',
                remove: true
            });
        },

        // 缓存token
        putToken: function(token) {
            layui.data(config.tableName, {
                key: 'token',
                value: JSON.stringify(token)
            });
        },

        // 当前登录的用户
        getUser: function() {
            var u = layui.data(config.tableName).login_user;
            if (u) {
                return JSON.parse(u);
            }
        },

        // 缓存user
        putUser: function(user) {
            layui.data(config.tableName, {
                key: 'login_user',
                value: JSON.stringify(user)
            });
        },

        // 左部导航菜单，最多支持三级，因为还有判断权限，所以渲染左侧菜单很复杂，无法做到递归，
        menus: [{
                name: '管理',
                url: 'javascript:;',
                subMenus: [{
                    name: '机构管理',
                    url: '#!mechanism_manage',
                    path: 'manage/mechanism_manage.html',
                }, {
                    name: '用户管理',
                    url: '#!user_manage',
                    path: 'manage/user_manage.html',
                }, {
                    name: '用户反馈',
                    url: '#!user_feedback',
                    path: 'manage/user_feedback.html',
                }, {
                    name: '应用管理',
                    url: '#!application_manage',
                    path: 'manage/application_manage.html',
                }]
            },
            {
                name: '设置',
                url: 'javascript:;',
                subMenus: [{
                    name: '基本信息',
                    url: '#!basic_information',
                    path: 'setup/basic_information.html',
                }, {
                    name: '人员信息',
                    url: '#!person_information',
                    path: 'setup/person_information.html',
                }]
            },
            {
                name: '服务',
                url: 'javascript:;',
                subMenus: [{
                    name: '服务大厅',
                    url: '#!service_hall',
                    path: 'service/service_hall.html',
                }, {
                    name: '素材管理',
                    url: '#!material_manage',
                    path: 'service/material_manage.html',
                }, {
                    name: '群发消息',
                    url: '#!group_information',
                    path: 'service/group_information.html',
                }, {
                    name: '粉丝管理',
                    url: '#!fans_manage',
                    path: 'service/fans_manage.html',
                }, {
                    name: '操作记录',
                    url: '#!operator_recode',
                    path: 'service/operator_recode.html',
                }]
            },
            {
                name: '应用',
                url: 'javascript:;',
                subMenus: [{
                    name: '应用大厅',
                    url: '#!app_center',
                    path: 'application/app_center.html',
                }, {
                    name: '移动迎新',
                    // url: '#!app_center',                       正在建设...
                    // path: 'application/construction.html',     正在建设...
                }, {
                    name: '智能报修',
                    // url: '#!app_center',                       正在建设...
                    // path: 'application/construction.html',     正在建设...
                }, {
                    name: '水卡充值',
                    // url: '#!app_center',                       正在建设...
                    // path: 'application/construction.html',     正在建设...
                }, {
                    name: '电卡充值',
                    // url: '#!app_center',                       正在建设...
                    // path: 'application/construction.html',     正在建设...
                }, {
                    name: '查课表',
                    // url: '#!app_center',                       正在建设...
                    // path: 'application/construction.html',     正在建设...
                }, {
                    name: '校历',
                    // url: '#!app_center',                       正在建设...
                    // path: 'application/construction.html',     正在建设...
                }]
            },
            {
                name: '统计',
                url: 'javascript:;',
                subMenus: [{
                    name: '粉丝统计',
                    url: '#!fans_count',
                    path: 'statistics/fans_count.html',
                }, {
                    name: '应用统计',
                    url: '#!app_count',
                    path: 'statistics/app_count.html',
                }]
            }
        ]
    };

    exports('config', config);
});
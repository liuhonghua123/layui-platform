layui.define(function(exports) {
    var tempData = {
        //用户管理表格临时数据
        userManage: [{
            userId: "1",
            realName: "刘红华",
            cardName: "123456789123456789",
            wxNumber: "liuhonghua",
            phoneNumber: "17858475463",
            mechanismName: "菩明科技"
        }, {
            userId: "2",
            realName: "刘红华",
            cardName: "123456789123456789",
            wxNumber: "liuhonghua",
            phoneNumber: "17858475463",
            mechanismName: "菩明科技"
        }, {
            userId: "3",
            realName: "刘红华",
            cardName: "123456789123456789",
            wxNumber: "liuhonghua",
            phoneNumber: "17858475463",
            mechanismName: "菩明科技"
        }, {
            userId: "4",
            realName: "刘红华",
            cardName: "123456789123456789",
            wxNumber: "liuhonghua",
            phoneNumber: "17858475463",
            mechanismName: "菩明科技"
        }, {
            userId: "5",
            realName: "刘红华",
            cardName: "123456789123456789",
            wxNumber: "liuhonghua",
            phoneNumber: "17858475463",
            mechanismName: "菩明科技"
        }, {
            userId: "6",
            realName: "刘红华",
            cardName: "123456789123456789",
            wxNumber: "liuhonghua",
            phoneNumber: "17858475463",
            mechanismName: "菩明科技"
        }, {
            userId: "7",
            realName: "刘红华",
            cardName: "123456789123456789",
            wxNumber: "liuhonghua",
            phoneNumber: "17858475463",
            mechanismName: "菩明科技"
        }, {
            userId: "8",
            realName: "刘红华",
            cardName: "123456789123456789",
            wxNumber: "liuhonghua",
            phoneNumber: "17858475463",
            mechanismName: "菩明科技"
        }, {
            userId: "9",
            realName: "刘红华",
            cardName: "123456789123456789",
            wxNumber: "liuhonghua",
            phoneNumber: "17858475463",
            mechanismName: "菩明科技"
        }, {
            userId: "10",
            realName: "刘红华",
            cardName: "123456789123456789",
            wxNumber: "liuhonghua",
            phoneNumber: "17858475463",
            mechanismName: "菩明科技"
        }],



        //人员信息表格临时数据

        //管理员
        personAdminInfo: [{
            userId: "1",
            userName: "刘红华",
            wxId: "liu365839577",
            phoneNum: "18378946548",
            cardID: "123456789456123789",
            rootTime: "2018-10-10 10:00:00"
        }, {
            userId: "2",
            userName: "刘红华",
            wxId: "liu365839577",
            phoneNum: "18378946548",
            cardID: "123456789456123789",
            rootTime: "2018-10-10 10:00:00"
        }, {
            userId: "3",
            userName: "刘红华",
            wxId: "liu365839577",
            phoneNum: "18378946548",
            cardID: "123456789456123789",
            rootTime: "2018-10-10 10:00:00"
        }],

        //运营者
        personOperateInfo: [{
            userId: "1",
            wxId: "liu365839577",
            userName: "有你更精彩",
            rootTime: "2018-10-10 10:00:00"
        }, {
            userId: "2",
            wxId: "liu365839577",
            userName: "有你更精彩",
            rootTime: "2018-10-10 10:00:00"
        }, {
            userId: "3",
            wxId: "liu365839577",
            userName: "有你更精彩",
            rootTime: "2018-10-10 10:00:00"
        }, {
            userId: "4",
            wxId: "liu365839577",
            userName: "有你更精彩",
            rootTime: "2018-10-10 10:00:00"
        }, {
            userId: "5",
            wxId: "liu365839577",
            userName: "有你更精彩",
            rootTime: "2018-10-10 10:00:00"
        }, {
            userId: "6",
            wxId: "liu365839577",
            userName: "有你更精彩",
            rootTime: "2018-10-10 10:00:00"
        }, {
            userId: "7",
            wxId: "liu365839577",
            userName: "有你更精彩",
            rootTime: "2018-10-10 10:00:00"
        }, {
            userId: "8",
            wxId: "liu365839577",
            userName: "有你更精彩",
            rootTime: "2018-10-10 10:00:00"
        }, {
            userId: "9",
            wxId: "liu365839577",
            userName: "有你更精彩",
            rootTime: "2018-10-10 10:00:00"
        }, {
            userId: "10",
            wxId: "liu365839577",
            userName: "有你更精彩",
            rootTime: "2018-10-10 10:00:00"
        }],



        //操作记录临时数据 
        //应用
        opeartorRecodeApp: [{
            userId: "1",
            userAdmin: "刘红华",
            app: "求知网",
            operatorTime: "2018-10-10 10:00:00",
            operator: "开启"
        }, {
            userId: "2",
            userAdmin: "刘华",
            app: "智能报修",
            operatorTime: "2018-10-10 10:00:00",
            operator: "修改"
        }, {
            userId: "3",
            userAdmin: "刘红",
            app: "找工作",
            operatorTime: "2018-10-10 10:00:00",
            operator: "禁用"
        }],

        //群发
        opeartorRecodeGroup: [{
            userId: "1",
            userAdmin: "刘红华",
            card: "校园卡",
            operatorTime: "2018-10-10 10:00:00"
        }, {
            userId: "2",
            userAdmin: "刘华",
            card: "校园卡",
            operatorTime: "2018-10-10 10:00:00"
        }, {
            userId: "3",
            userAdmin: "刘红",
            card: "校园卡",
            operatorTime: "2018-10-10 10:00:00"
        }],

        //校园卡
        opeartorRecodeCard: [{
            userId: "1",
            userAdmin: "刘红华",
            card: "校园卡",
            operatorTime: "2018-10-10 10:00:00",
            operator: "开启"
        }, {
            userId: "2",
            userAdmin: "刘华",
            card: "校园卡",
            operatorTime: "2018-10-10 10:00:00",
            operator: "开启"
        }, {
            userId: "3",
            userAdmin: "刘红",
            card: "校园卡",
            operatorTime: "2018-10-10 10:00:00",
            operator: "禁用"
        }],



        //群发消息表格临时数据
        groupInformation: [{
            newsId: "1",
            news: "大家中秋快乐！！！",
            sendObject: "全部",
            sendStaic: "发送成功",
            sendTime: "2018-08-20 08:30:00"
        }, {
            newsId: "2",
            news: "大家国庆快乐！！！",
            sendObject: "全部",
            sendStaic: "发送成功",
            sendTime: "2018-09-20 10:30:00"
        }, {
            newsId: "3",
            news: "失物招领",
            sendObject: "星标组",
            sendStaic: "发送成功",
            sendTime: "2018-09-25 08:42:00"
        }]
    };
    exports('tempData', tempData);
});
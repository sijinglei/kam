<style>
@import '../../../assets/css/view/payment.css';
</style>
<template>
    <section class="page">
        <mt-header fixed
                   title="交易记录">
            <router-link to="/"
                         slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="pay trad-wrap">
            <dl class="trad-list">
                <dt>本月</dt>
    
                <dd v-for="d in dataList">
                    <router-link :to="{ name : 'tradInfo' , params : { id : d.id}}">
                        <div class="trads">
                            <div class="trad-item-top clearfix">
                                <div class="title w50 fl">{{d.title}}</div>
                                <div class="money w50 fr">{{d.money}}元</div>
                            </div>
                            <div class="trad-item-bot clearfix">
                                <div class="date w50 fl">{{d.datetime}}</div>
                                <div class="state w50 fr red"><span class="red">{{d.stateText}}</span></div>
                            </div>
                        </div>
                    </router-link>
                </dd>
            </dl>
            <dl class="trad-list">
                <dt>2月</dt>
                <dd v-for="d in dataList2">
                    <router-link :to="{ name : 'tradInfo' , params : { id : d.id}}">
                        <div class="trads">
                            <div class="trad-item-top clearfix">
                                <div class="title w50 fl">{{d.title}}</div>
                                <div class="money w50 fr">{{d.money}}元</div>
                            </div>
                            <div class="trad-item-bot clearfix">
                                <div class="date w50 fl">{{d.datetime}}</div>
                                <div class="state w50 fr red"><span class="red">{{d.stateText}}</span></div>
                            </div>
                        </div>
                    </router-link>
                </dd>
            </dl>
        </div>
    </section>
</template>

<script>
var MintUI = require('mint-ui');
var MessageBox = MintUI.MessageBox;
module.exports = {
    data: function () {
        return {
            title: '付款',
            dataList: [],
            dataList2: []
        }
    },
    components: {},
    // 加载之前
    created: function () {
        document.title = this.title;
    },

    mounted: function () {
        //隐藏加载动画
        this.dataList = [{
            id: 1,
            title: '银行卡充值',
            money: 200.88,
            datetime: '2017-03-22 16:22',
            stateText: '银行处理中'
        }, {
            id: 1,
            title: '充值',
            money: 1999.88,
            datetime: '2017-03-22 16:22',
            stateText: '已完成'
        }, {
            id: 1,
            title: '提现',
            money: -188.88,
            datetime: '2017-03-22 16:22',
            stateText: '进行中'
        }];
        this.dataList2 = [{
            id: 1,
            title: '充值',
            money: 188.88,
            datetime: '2017-03-22 16:22',
            stateText: '已处理'
        },
        {
            id: 1,
            title: '提现',
            money: 188.88,
            datetime: '2017-03-22 16:22',
            stateText: '已完成'
        },
        {
            id: 1,
            title: '银行卡充值',
            money: 188.88,
            datetime: '2017-03-22 16:22',
            stateText: '银行处理中'
        },
        {
            id: 1,
            title: '银行卡充值',
            money: 188.88,
            datetime: '2017-03-22 16:22',
            stateText: '银行处理中'
        },
        {
            id: 1,
            title: '银行卡充值',
            money: 188.88,
            datetime: '2017-03-22 16:22',
            stateText: '银行处理中'
        }
        ];
    },
    methods: {
        //扫一扫
        openWxSys: function () {
            MessageBox('提示', '扫一扫');
        },
        handleClick: function () {
            MessageBox('提示', '提交成功');
        }
    }
}
</script>
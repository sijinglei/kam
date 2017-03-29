<style>
@import '../../../assets/css/view/payment.css';
body .card-page {
    background: #F1F3F5;
}
</style>
<template>
    <section class="page card-page">
        <mt-header fixed
                   title="卡卷">
            <router-link to="/"
                         slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="pay card-top-wrap">
    
            <mt-navbar v-model="selected">
                <mt-tab-item id="yfk">预付卡</mt-tab-item>
                <mt-tab-item id="dzj">电子券</mt-tab-item>
            </mt-navbar>
        </div>
    
        <div class="tab-content">
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="yfk">
                    <router-link v-for="key in cardList"
                                 :to="{ name : 'cardDetail' , params : { id : key.cardid}}">
                        <div class="yfk-item clearfix">
                            <div class="img fl"></div>
                            <div class="card-name fl">{{key.title}}</div>
                            <div class="icon fr"></div>
                        </div>
                    </router-link>
                </mt-tab-container-item>
                <mt-tab-container-item id="dzj">
    
                    <div class="dzj-item">
                        <div class="nei">
                            <div class="topinfo clearfix">
                                <div class="info-title fl">中粮集团端午节套装兑换券</div>
                                <div class="number fr">共2张</div>
                            </div>
                            <div class="botinfo">有效期至2017-05-01</div>
                        </div>
    
                    </div>
    
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    
        <div class="footer">
            <p>
                <router-link to="/">
                    查看历史卡券
                </router-link>
            </p>
        </div>
    </section>
</template>

<script>
module.exports = {
    data: function () {
        return {
            title: '卡卷',
            selected: 'yfk',
            currentView: 'yfk',
            cardList: []
        }
    },
    components: {},
    // 加载之前
    created: function () {
        document.title = this.title;
    },

    mounted: function () {
        //隐藏加载动画
        this.cardList = [{
            cardid: 1,
            title: '中粮集团代金券a'
        }, {
            cardid: 2,
            title: '中粮集团代金券2'
        }, {
            cardid: 2,
            title: '中粮集团代金券3'
        }, {
            cardid: 2,
            title: '中粮集团代金券4'
        }, {
            cardid: 2,
            title: '中粮集团代金券5'
        }];
    },
    methods: {
        //扫一扫
        openWxSys: function () {
            MessageBox('提示', '扫一扫');
        },
        handleClick: function () {
            MessageBox('提示', '提交成功');
        },
        changeTab: function (type) {
            MessageBox('提示', 'ss');
            this.currentView = type;
        }
    }
}
</script>
<style>
@import '../../../assets/css/view/consumption.css';
body .pay-page {
    background: #F1F3F5;
}

.mint-header {
    background-color: #1B1B20;
}
</style>
<template>
    <section class="page pay-page">
        <mt-header fixed
                   title="预付卡">
            <router-link to="/"
                         slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="pay search-list p_info">
            <div class="item Fix">
                <div class="pic">
                    <img src="../../../assets/images/1.png">
                </div>
                <div class="content">
                    <div class="name">
                        <div class="itemname">
                            <span class="p_name">100元专家精心搭配套餐</span>
                        </div>
                    </div>
                    <p>有效期至：2017-05-01</p>
                    <p>已售：5张</p>
                </div>
            </div>
        </div>
        <div class="col-text">
            <p>门店地址 <br>
            • 浙江省杭州市下沙开发区四号大街  <br>
            • 10:00-15:00
            </p>
        </div>
        <div class="col-text">
            <p>
                使用规则
                <br> • 无需预约，消费高峰时可能需要等位
                <br> • 每张美团券建议4人使用
                <br> • 餐巾纸费：咨询商家
                <br> • 不可使用包间
                <br> • 堂食外带均可，可以打包，打包费详情咨询商家
                <br> • 团购用户不可同时享受商家其他优惠
                <br>
            </p>
        </div>
    
        <footer class="fixd-btn">
            <mt-button type="primary"
                       size="large"
                       @click.native="handleClick">立即开通</mt-button>
        </footer>
    </section>
</template>

<script>
var MintUI = require('mint-ui');
var MessageBox = MintUI.MessageBox;
module.exports = {
    data: function () {
        return {
            number: 1,
            isaddActive: false,
            isminusActive: false,
            total: 0,
            price: 100
        }
    },
    components: {},
    // 加载之前
    created: function () {
        document.title = this.title;
    },

    mounted: function () {
        //隐藏加载动画
        this.$el.querySelector('.mint-header-title').innerText = '电子券';
    },
    methods: {
        winOpen: function (type) {
            if (type === 2) {
                MessageBox('提示', '2');
                this.$router.go({
                    name: 'consumptionuser'
                });
            }
        },
        calculate: function (type) {
            if (type === 'add') {
                this.number++;
                this.isaddActive = true;
                this.isminusActive = false;
            } else {
                if (this.number > 1) {
                    this.isminusActive = true;
                    this.isaddActive = false;
                    this.number--;
                }
            }
            this.total = this.number * this.price;
        }
    }
}
</script>
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
        <mt-header fixed title="预付卡">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>

        <div class="pay consum-info-bot">
            <div class="col-img-link">
                <ul>
                    <li class="clearfix">
                        <div class="left-con fl">
                            <div class="j_img" style="background-image:url('/src/assets/images/j_yfk.png')"></div>
                            <div class="j_info">
                                <h3>中粮集团代金券</h3>
                                <div class="j_price">
                                    <span class="now_price">￥80</span>
                                    <span><del>￥100</del></span>
                                </div>
                            </div>
                        </div>
                        <div class="right-con fr">
                             <router-link :to="{name:'yfkinfo',params:{id:1}}" class="j_btn">
                                <span>开通</span>
                            </router-link>
                        </div>

                    </li>
                    <li class="clearfix">
                        <div class="left-con fl">
                            <div class="j_img" style="background-image:url('/src/assets/images/j_yfk.png')"></div>
                            <div class="j_info">
                                <h3>中粮集团代金券</h3>
                                <div class="j_price">
                                    <span class="now_price">￥80</span>
                                    <span><del>￥100</del></span>
                                </div>
                            </div>
                        </div>
                        <div class="right-con fr">
                            <router-link :to="{name:'yfkinfo',params:{id:1}}" class="j_btn">
                                <span>开通</span>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    var MintUI = require('mint-ui');
    var MessageBox = MintUI.MessageBox;
    module.exports = {
        data: function () {
            return {

            }
        },
        components: {},
        // 加载之前
        created: function () {
            document.title = this.title;
        },

        mounted: function () {
            //隐藏加载动画
            this.$el.querySelector('.mint-header-title').innerText = '预付卡';
        },
        methods: {
            winOpen: function (type) {
                if (type === 2) {
                    MessageBox('提示', '2');
                    this.$router.go({
                        name: 'consumptionuser'
                    });
                }
            }
        }
    }
</script>
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
        <mt-header fixed title="详情">
            <router-link to="/" slot="left">
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
                            <span class="p_name">掌上贷款</span>
                        </div>
                    </div>
                    <div class="comment">
                        <span class="star star-45">4.5</span>
                        <span class="pj">共98条评价</span>
                    </div>
                    <div class="type">
                        <span class="p_type">金融/贷款</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-field">
            <ul>
                <li>
                    <div class="pay-done-item clearfix">
                        <div class="item-title fl">地址</div>
                        <div class="item-info fr">浙江省杭州市下沙开发区四号大街</div>
                    </div>
                </li>
                <li>
                    <div class="pay-done-item clearfix">
                        <div class="item-title fl">电话</div>
                        <div class="item-info fr blue">0571-88871370</div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="consum-info-bot">
            <div class="kj_head clearfix">
                <div class="tilte fl">
                    <div class="img img-dzj">
                        <span>电子券</span>
                    </div>
                </div>
                <div class="more fr">
                    <router-link to="/dzjlist">
                        查看全部&gt;
                    </router-link>
                </div>
            </div>
            <div class="col-img-link">
                <ul>
                    <li class="clearfix">
                        <router-link :to="{name:'dzjinfo',params:{id:1}}">
                            <div class="left-con fl">
                                <div class="j_img"></div>
                                <div class="j_info">
                                    <h3>中粮集团代金券</h3>
                                    <div class="j_price">
                                        <span class="now_price">￥80</span>
                                        <span><del>￥100</del></span>
                                    </div>
                                </div>
                            </div>
                            <div class="right-con fr">
                                <span>
                                已售5张
                            </span>
                            </div>
                        </router-link>
                    </li>
                    <li class="clearfix">
                        <router-link :to="{name:'dzjinfo',params:{id:1}}">
                            <div class="left-con fl">
                                <div class="j_img"></div>
                                <div class="j_info">
                                    <h3>中粮集团代金券</h3>
                                    <div class="j_price">
                                        <span class="now_price">￥80</span>
                                        <span><del>￥100</del></span>
                                    </div>
                                </div>
                            </div>
                            <div class="right-con fr">
                                <span>
                                已售5张
                            </span>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="kj_head clearfix">
                <div class="tilte fl">
                    <div class="img img-yfk">
                        <span>预付卡</span>
                    </div>
                </div>
                <div class="more fr">
                    <router-link to="/yfklist">
                        查看全部&gt;
                    </router-link>
                </div>
            </div>
            <div class="col-img-link">
                <ul>
                    <li class="clearfix">

                        <div class="left-con fl">
                            <div class="j_img"></div>
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
                            <div class="j_img"></div>
                            <div class="j_info">
                                <h3>中粮集团代金券</h3>
                                <div class="j_price">
                                    <span class="now_price">￥80</span>
                                    <span><del>￥100</del></span>
                                </div>
                            </div>
                        </div>
                        <div class="right-con fr">
                            <router-link :to="{name:'yfkinfo',params:{id:1}}"  class="j_btn">
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
            this.$el.querySelector('.mint-header-title').innerText = '掌上贷款2';
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
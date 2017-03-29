<style>
    @import '../../../assets/css/view/consumption.css';
    .mint-header {
        background-color: #1B1B20;
    }
</style>
<template>
    <section class="page">
        <mt-header fixed title="搜索页面">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="pay consumption-page seach-head">
            <div class="search-wrap seach">
                <p>
                    <span class="search-icon"></span>
                    <input type="text" name="" value="" placeholder="商户名或地点">
                    <span class="close-icon" @click="$router.go(-1)"></span>
                </p>
            </div>
        </div>

        <div class="consum-info-bot">
            <div class="col-img-link hide">
                <ul>
                    <li class="clearfix">
                        <router-link :to="{name:'dzjinfo',params:{id:2}}">
                            <div class="left-con fl">
                                <div class="j_img" style="background-image:url('/src/assets/images/j_dzj.png')"></div>
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
                        <router-link :to="{name:'dzjinfo',params:{id:2}}">
                            <div class="left-con fl">
                                <div class="j_img" style="background-image:url('/src/assets/images/j_dzj.png')"></div>
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
            }
        }
    }
</script>
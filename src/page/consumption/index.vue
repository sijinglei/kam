<style>
    @import '../../assets/css/view/common.css';
    @import '../../assets/css/view/consumption.css';
    .mint-header {
        background-color: #1B1B20;
    }
</style>
<template>
    <section class="page">
        <mt-header fixed title="消费"></mt-header>
        <div class="pay consumption-page">
            <div class="search-wrap home">
                <p @click="jumpPage"><span class="search-icon"></span>商户名或地点</p>
            </div>
        </div>
        <div class="consump-nav clearfix">
            <ul>
                <li>
                    <router-link to="/">
                        <div class="nav-col">
                            <div class="bg-img"></div>
                            <p class="nav-name">预付卡</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <div class="nav-col">
                            <div class="bg-img"></div>
                            <p class="nav-name">电子券</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <nav class="consump-tab">
            <ul class="nav clearfix">
                <li class="open">
                    <span>全城</span>
                    <i></i>
                </li>
                <li>
                    <span>商户类型</span>
                    <i></i>
                </li>
                <li>
                    <span>推荐</span>
                    <i></i>
                </li>
            </ul>
            <section class="selector k_selector hide">
                全城下拉
            </section>
            <section class="selector k_selector hide">
                商户类型下拉
            </section>
            <section class="selector k_selector hide">
                推荐下拉
            </section>
        </nav>
        <div class="search-list">
            <ul>
                <li>
                    <router-link :to="{name:'consumptioninfo',params:{id:1}}" class="item Fix">
                        <div class="pic">
                            <img src="../../assets/images/1.png">
                        </div>
                        <div class="content">
                            <div class="name">
                                <div class="itemname">
                                    <span class="p_name">掌上贷款</span>
                                    <span class="p_type">金融/贷款</span>
                                </div>
                            </div>
                            <div class="comment">
                                <span class="star star-45">4.5</span>
                                <span class="pj">共98条评价</span>
                            </div>
                        </div>
                    </router-link>
                    <div class="new-coupon">
                        <div class="p_j">
                            <div class="img img-j"></div>
                            <span>月供零负担，不用不要钱</span>
                        </div>
                        <div class="p_j">
                            <div class="img img-k"></div>
                            <span>额度最高50万，信用贷款，随借随还</span>
                        </div>
                    </div>
                </li>
                <li>
                    <router-link :to="{name:'consumptioninfo',params:{id:2}}" class="item Fix">
                        <div class="pic">
                            <img src="../../assets/images/1.png">
                        </div>
                        <div class="content">
                            <div class="name">
                                <div class="itemname">
                                    <span class="p_name">线上白领通（适合缴纳公积金</span>
                                    <span class="p_type">金融/贷款</span>
                                </div>
                            </div>
                            <div class="comment">
                                <span class="star star-35">4.5</span>
                                <span class="pj">共98条评价</span>
                            </div>
                        </div>
                    </router-link>
                    <div class="new-coupon hide">
                        <div class="p_j">
                            <div class="img img-j"></div>
                            <span>月供零负担，不用不要钱</span>
                        </div>
                        <div class="p_j">
                            <div class="img img-k"></div>
                            <span>额度最高50万，信用贷款，随借随还</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!--点击下载-->
        <div class="download clearfix">
            <div class="down-info fl">
                <div class="img fl"></div>
                <div class="info fl">
                    <p>卡盟平台<br>普惠金融，精彩生活</p>
                </div>
            </div>
            <div class="down-btn fr">
                点击下载
            </div>
        </div>
        <!--end-->

        <div class="footer">
            <div class="mint-tabbar is-fixed">
                <router-link to="/" class="mint-tab-item active">
                    <div class="mint-tab-item-icon"><img src=""></div>
                    <div class="mint-tab-item-label"> 首页
                    </div>
                </router-link>
                <router-link to="/consumption" class="mint-tab-item">
                    <div class="mint-tab-item-icon"><img src=""></div>
                    <div class="mint-tab-item-label"> 消费
                    </div>
                </router-link>
                <router-link to="/center" class="mint-tab-item">
                    <div class="mint-tab-item-icon"><img src=""></div>
                    <div class="mint-tab-item-label"> 我的
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
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
           
        },
        methods: {
            jumpPage: function () { //跳转到搜索页面
                this.$router.push({'name':'search'});
            }
        }
    }
</script>
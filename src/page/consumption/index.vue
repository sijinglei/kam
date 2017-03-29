<style>
    @import '../../assets/css/view/consumption.css';
    .mint-header {
        background-color: #1B1B20;
    }
</style>
<template>
    <section class="page">
        <mt-header fixed title="消费"></mt-header>
        <div class="pay consumption-page seach-head">
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
        <nav class="consump-tab" ref="navmenu">
            <ul class="nav clearfix">
                <li class="open" @click="openSection(1)">
                    <span v-text="text1"></span>
                    <i></i>
                </li>
                <li @click="openSection(2)">
                    <span v-text="text2"></span>
                    <i></i>
                </li>
                <li @click="openSection(3)">
                    <span v-text="text3"></span>
                    <i></i>
                </li>
            </ul>
        </nav>
        <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-km">
            <div class="popup-body">
                <div class="popub-head clearfix">
                    <span class="cancel" @click="popupVisible=false">取消</span>
                    <span class="sure" @click="sure">完成</span>
                </div>
                <div class="popub-content">
                    <mt-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="5" :show-toolbar="false"></mt-picker>
                </div>
            </div>
        </mt-popup>
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
                    <p>卡盟平台
                        <br>普惠金融，精彩生活</p>
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
                popupVisible: false,
                buttonBottom: 0,
                dateSlots: [{
                    flex: 1,
                    values: ['深圳市', '深圳市2', '深圳市3', '深圳市4', '深圳市5', '深圳市6'],
                    className: 'slot1',
                    textAlign: 'center'
                }],
                selectValue: '',
                text1: '全城',
                text2: '商户类型',
                text3: '推荐',
                type: 1
            }
        },
        components: {},
        // 加载之前
        created: function () {
            document.title = this.title;
        },

        mounted: function () {
            //隐藏加载动画
            console.log(this.$refs);
            this.buttonBottom = this.$refs.navmenu.offsetTop;
        },
        methods: {
            jumpPage: function () { //跳转到搜索页面
                this.$router.push({
                    'name': 'search'
                });
            },
            openSection: function (val) {
                this.popupVisible = true;
                this.type = val;
                this.dateSlots[0].values = [];
                if (val == 1) {
                    this.dateSlots[0].values = ['深圳市', '深圳市2', '深圳市3', '深圳市4', '深圳市5', '深圳市6'];
                    console.log(this.dateSlots[0].values);
                } else if (val == 2) {
                    this.dateSlots[0].values = ['类型1', '类型2',
                        '类型3', '类型4', '类型5', '类型6'
                    ];
                    console.log(this.dateSlots[0].values);
                } else {
                    this.dateSlots[0].values = ['推荐1', '推荐2',
                        '推荐3', '推荐4', '推荐5', '推荐6'
                    ];
                }
            },
            sure: function () {
                this.popupVisible = false;
                if (this.type == 1) {
                    this.text1 = this.selectValue;
                } else if (this.type == 2) {
                    this.text2 = this.selectValue;
                } else {
                    this.text3 = this.selectValue;
                }
            },
            onDateChange(picker, values) {
                console.log(picker);
                console.log(values);
                this.selectValue = values[0];
            }
        }
    }
</script>
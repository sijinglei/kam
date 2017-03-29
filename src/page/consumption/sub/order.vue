<style>
    @import '../../../assets/css/view/common.css';
    body .pay-page {
        background: #F1F3F5;
    }

    .mint-header {
        background-color: #1B1B20;
    }

    .mint-popup {
        background: #F1F3F5;
    }
</style>
<template>
    <section class="page pay-page">
        <mt-header fixed title="订单确认">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>

        <p class="pay order-head-title">100元专家精心搭配套餐</p>
        <div class="col-field">
            <ul>
                <li>
                    <div class="pay-done-item clearfix">
                        <div class="item-title fl">单价</div>
                        <div class="item-info fr">80元</div>
                    </div>
                </li>
                <li>
                    <div class="pay-done-item clearfix">
                        <div class="item-title fl">数量</div>
                        <div class="item-info fr">1张</div>
                    </div>
                </li>
                <li>
                    <div class="pay-done-item clearfix">
                        <div class="item-title fl">总价</div>
                        <div class="item-info fr">80元</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="col-field">
            <ul>
                <li>
                    <div class="pay-done-item clearfix">
                        <div class="item-title fl">支付金额</div>
                        <div class="item-info fr">80元</div>
                    </div>
                </li>
                <li>
                    <div class="pay-done-item clearfix">
                        <div class="item-title fl">手机号码</div>
                        <div class="item-info fr">1581****888</div>
                    </div>
                </li>
                <li>
                    <div class="pay-done-item clearfix">
                        <div class="item-title fl">支付方式</div>
                        <div class="item-info fr">钱包支付</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="checkbox-field">
            <p @click="isActive=!isActive"><span class="chebox" :class="{active:isActive}"></span>我已阅读并同意
                <router-link to="">
                    《卡盟平台卡券服务协议》
                </router-link>
            </p>
        </div>
        <div class="order-btn">
            <mt-button type="primary" size="large" @click.native="handleClick">支付订单</mt-button>
        </div>
        <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-km">
            <div class="km-input-pw">
                <h2><span class="close" @click="popupVisible=false"></span> 请输入密码</h2>
                <div class="pw">
                    <div class="pay-pwd-box">
                        <ul>
                            <li v-for="key in ismark" :class="{zmarked:key}"><i></i></li>
                        </ul>
                        <input type="text" name="userPayPassword" maxlength="6" class="z-ignore" v-model="strs">
                    </div>
                </div>
                <div class="forget-pw">
                    <p>
                        <router-link to="">
                            忘记密码？
                        </router-link>
                    </p>
                </div>
                <div class="keylist clearfix">
                    <ul>
                        <li @click="keyImport('1')">
                            <p>1</p>
                            <p class="yy">&nbsp;</p>
                        </li>
                        <li @click="keyImport('2')">
                            <p>2</p>
                            <p class="yy">ABC</p>
                        </li>
                        <li @click="keyImport('3')">
                            <p>3</p>
                            <p class="yy">DEF</p>
                        </li>
                        <li @click="keyImport('4')">
                            <p>4</p>
                            <p class="yy">GHI</p>
                        </li>
                        <li @click="keyImport('5')">
                            <p>5</p>
                            <p class="yy">JKL</p>
                        </li>
                        <li @click="keyImport('6')">
                            <p>6</p>
                            <p class="yy">MNO</p>
                        </li>
                        <li @click="keyImport('7')">
                            <p>7</p>
                            <p class="yy">PQRS</p>
                        </li>
                        <li @click="keyImport('8')">
                            <p>8</p>
                            <p class="yy">TUV</p>
                        </li>
                        <li @click="keyImport('9')">
                            <p>9</p>
                            <p class="yy">WXYZ</p>
                        </li>
                        <li @click="keyImport('.')" style="background:#d1d5db; ">
                            <p>.</p>
                        </li>
                        <li @click="keyImport('0')">
                            <p>0</p>
                        </li>
                        <li @click="keyImport('clear')" style="background:#d1d5db; ">
                            <p>
                                <span class="clear"><i>&nbsp;</i></span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </mt-popup>
    </section>
</template>

<script>
    var MintUI = require('mint-ui');
    var MessageBox = MintUI.MessageBox;
    module.exports = {
        data: function () {
            return {
                isActive: false,
                popupVisible: false,
                strs: '',
                ismark: [],
                passwordStr: ''
            }
        },
        components: {},
        // 加载之前
        created: function () {
            document.title = this.title;
        },

        mounted: function () {
            //隐藏加载动画
            this.$el.querySelector('.mint-header-title').innerText = '订单确认';
            for (var i = 0; i < 6; i++) {
                this.ismark.push(false);
            }
        },
        methods: {
            keyImport: function (val) {
                var vm = this;
                if (val != '.') {

                    if (val === 'clear' && vm.passwordStr != '') {
                        var pwd = vm.passwordStr.substring(0, vm.passwordStr.length - 1);
                        vm.passwordStr = pwd;
                        if (pwd.length > -1) {
                            // vm.ismark[pwd.length] = false;   //数组监听事件不能使用=要用下面的替换方式，否则无效
                            vm.ismark.splice(pwd.length, 1, false);
                        }
                    } else {
                        if (vm.passwordStr.length < 6 && val != 'clear') {
                            vm.passwordStr += val;
                            vm.ismark.splice(vm.passwordStr.length - 1, 1, true);
                        }
                    }
                    if(vm.passwordStr.length===6){
                         MessageBox('提示', '提交密码：'+vm.passwordStr);
                    }
                }
            },
            handleClick: function () {
                if (this.isActive) {
                    this.popupVisible = true;
                } else {
                    MessageBox('提示', '请先同意');
                }
            }
        },
        watch: {
            isActive: function () {

            },
            popupVisible: function () {
                if (!this.popupVisible) {
                    this.ismark = [false, false, false, false, false, false];
                    this.passwordStr = '';
                }
            }
        }
    }
</script>
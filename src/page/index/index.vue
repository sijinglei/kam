<style>
@import '../../assets/css/view/index.css';
.page {
	background: #fff;
}

.mint-header {
	background-color: #1B1B20;
}

.page-swip {
	margin-top: 2.15rem;
}

.mint-swipe {
	height: 12.7rem;
	text-align: center;
}

.mint-swipe-item {
	line-height: 12.7rem;
}

.slide {
	background-color: #000;
	color: #fff;
}
</style>
<template>
	<section class="page clearfix">
		<mt-header fixed
		           title="首页"></mt-header>
		<div class="page-swip">
			<mt-swipe :auto="4500">
				<mt-swipe-item class="slide">
					<router-link to="/about"
					             style="background-image:url('/src/assets/images/2.jpg'); ">
					</router-link>
				</mt-swipe-item>
				<mt-swipe-item class="slide">
					<router-link to="/about"
					             style="background-image:url('/src/assets/images/3.jpg'); ">
					</router-link>
				</mt-swipe-item>
				<mt-swipe-item class="slide">
					<router-link to="/about"
					             style="background-image:url('/src/assets/images/4.jpg'); ">
					</router-link>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="menu-list clearfix">
			<ul>
				<li>
					<router-link to="/payment">
						<div class="menu-info">
							<div class="menu-icon"></div>
							<p>扫一扫</p>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="/gathering">
						<div class="menu-info">
							<div class="menu-icon"></div>
							<p>收款</p>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="/TradingRecord">
						<div class="menu-info">
							<div class="menu-icon"></div>
							<p>交易记录</p>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="/yfklist">
						<div class="menu-info">
							<div class="menu-icon"></div>
							<p>预付卡</p>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="/dzjlist">
						<div class="menu-info">
							<div class="menu-icon"></div>
							<p>电子券</p>
						</div>
					</router-link>
				</li>
				<li>
					<router-link to="/CardVolume">
						<div class="menu-info">
							<div class="menu-icon"></div>
							<p>卡券</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="page-swip2">
			<mt-swipe :auto="4000">
				<mt-swipe-item class="slide">
					<router-link to="/about"
					             style="background-image:url('/src/assets/images/2.jpg'); ">
					</router-link>
				</mt-swipe-item>
				<mt-swipe-item class="slide">
					<router-link to="/about"
					             style="background-image:url('/src/assets/images/3.jpg'); ">
					</router-link>
				</mt-swipe-item>
				<mt-swipe-item class="slide">
					<router-link to="/about"
					             style="background-image:url('/src/assets/images/4.jpg'); ">
					</router-link>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="hot-shop">
			<p>热门商户<i></i></p>
			<div class="product-list clearfix">
				<ul>
					<li>
						<router-link to="/about"
						             style="background-image:url('/src/assets/images/4.jpg'); ">
						</router-link>
					</li>
					<li>
						<router-link to="/about"
						             style="background-image:url('/src/assets/images/3.jpg'); ">
						</router-link>
					</li>
					<li>
						<router-link to="/about"
						             style="background-image:url('/src/assets/images/2.jpg'); ">
						</router-link>
					</li>
					<li>
						<router-link to="/about"
						             style="background-image:url('/src/assets/images/1.png'); ">
						</router-link>
					</li>
					<li>
						<router-link to="/about"
						             style="background-image:url('/src/assets/images/2.jpg'); ">
						</router-link>
					</li>
					<li>
						<router-link to="/about"
						             style="background-image:url('/src/assets/images/3.jpg'); ">
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!--点击下载-->
		<download></download>
		<!--end-->
	
		<div class="footer">
			<div class="mint-tabbar is-fixed">
				<router-link to="/"
				             class="mint-tab-item active">
					<div class="mint-tab-item-icon"><img src=""></div>
					<div class="mint-tab-item-label"> 首页
					</div>
				</router-link>
				<router-link to="/consumption"
				             class="mint-tab-item">
					<div class="mint-tab-item-icon"><img src=""></div>
					<div class="mint-tab-item-label"> 消费
					</div>
				</router-link>
				<router-link to="/center"
				             class="mint-tab-item">
					<div class="mint-tab-item-icon"><img src=""></div>
					<div class="mint-tab-item-label"> 我的
					</div>
				</router-link>
			</div>
		</div>
	</section>
</template>

<script>
var download=require('../../components/download.vue');
var MintUI = require('mint-ui');
var MessageBox = MintUI.MessageBox;
module.exports = {
	data: function () {
		return {
			title: '首页'
		}
	},
	// 加载之前
	created: function () {
		document.title = this.title;
	},

	mounted: function () {
		//隐藏加载动画
	},
	methods: {
		//扫一扫
		openWxSys: function () {
			MessageBox('提示', '扫一扫');
		},
		winOpen: function (type) {
			if (type === 2) {
				MessageBox('提示', '2');
				this.$router.go({
					name: 'consumptionuser'
				});
			}
		}
	},
	components: {
		download:download
	}
}
</script>
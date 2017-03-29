<style>

</style>
<template>
    <section class="page">
       <h1>收款</h1>
    </section>
</template>

<script>
var MintUI = require('mint-ui');
	var MessageBox=MintUI.MessageBox;
	module.exports = {
		data: function () {
			return {
				title: '首页'
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
			//扫一扫
			openWxSys: function () {
				MessageBox('提示', '扫一扫');
			}
		}
	}
</script>

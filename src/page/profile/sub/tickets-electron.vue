<style>
	/* @import "../../assets/css/profile.css" */
</style>

<template>

<section class="page electron">	
	<div class="t-list a">
		<div class="td-top tn-info">
			<div class="td-name toverflow">中粮集团端午节套装兑换券</div>
			<div class="td-num">2张</div>
		</div>
	</div>
	<div class="t-list a">
		<router-link :to="{ name : 'electron' }" class="t-ticket bg marg-bottom15" >
			<div class="td-top">
				<div class="td-name toverflow">券号 3896 0316 7515 5288</div>
				<div class="td-num"></div>
			</div>
			<div class="indate">有效期至2017-05-01</div>
		</router-link>
		<router-link :to="{ name : 'electron' }" class="t-ticket bg marg-bottom15" >
			<div class="td-top">
				<div class="td-name toverflow">券号 3896 0316 7515 5288</div>
				<div class="td-num"></div>
			</div>
			<div class="indate">有效期至2017-05-01</div>
		</router-link>
	</div><!-- 电子卡 -->
	<div class="msg-box">
		<div class="msg-box-inner on">
			<div class="msg-box-head">向商家展示二维码</div>
			<div class="msg-box-body">
				<div class="code-img"></div>
				<div class="code-text">券号 3896 0316 7515 5288</div>
			</div>
		</div>
	</div>
</section>

</template>

<script>

</script>

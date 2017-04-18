<style>
	/* @import "../../assets/css/profile.css" */
</style>

<template>

<section class="page ticket">
	<header class="t-head box">
		<a @click="selector(0)" :class="{ 'on' : navOn == 0 }"><span>预付卡</span></a>
		<a @click="selector(1)" :class="{ 'on' : navOn == 1 }"><span>电子卡</span></a>
	</header>
	<div v-show="navOn == 0" class="t-list b">
		<router-link :to="{ name : 'debit' }" class="t-ticket bg marg-bot15" >
			<div class="t-icon"></div>
			<div class="t-title toverflow arrows-right">中粮集团代金券</div>
		</router-link>
		<router-link :to="{ name : 'debit' }" class="t-ticket bg marg-bot15" >
			<div class="t-icon"></div>
			<div class="t-title toverflow arrows-right">中粮集团代金券</div>
		</router-link>
	</div><!-- 预付卡 -->
	<div v-show="navOn == 1" class="t-list a">
		<router-link :to="{ name : 'electron' }" class="t-ticket bg marg-bot15" >
			<div class="td-top">
				<div class="td-name toverflow">中粮集团端午节套装兑换券</div>
				<div class="td-num">共2张</div>
			</div>
			<div class="indate">有效期至2017-05-01</div>
		</router-link>
		<router-link :to="{ name : 'electron' }" class="t-ticket bg marg-bot15" >
			<div class="td-top">
				<div class="td-name toverflow">中粮集团端午节套装兑换券</div>
				<div class="td-num">共2张</div>
			</div>
			<div class="indate">有效期至2017-05-01</div>
		</router-link>
	</div><!-- 电子卡 -->
	<router-view></router-view>
</section>

</template>

<script>
export default {
  data () {
    return {
    	_data : {
    	},
    	navOn : 0
    }
  },methods : {
  	selector (type){
  		this.navOn = type
  	}
  }
}
</script>

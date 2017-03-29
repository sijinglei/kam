export default [{
		name: 'index', //首页
		path: '/',
		component: require('../page/index/index.vue'),
	},
	{
		name: 'payment', //首页 > 付款
		path: '/payment',
		component: require('../page/index/sub/payment.vue')
	},
	{
		name: 'paydone', //首页 > 付款成功
		path: '/paydone',
		component: require('../page/index/sub2/paydone.vue')
	},
	{
		name: 'gathering', //首页 > 收款
		path: '/gathering',
		component: require('../page/index/sub/gathering.vue')
	},
	{
		name: 'TradingRecord', //首页 > 交易记录
		path: '/TradingRecord',
		component: require('../page/index/sub/TradingRecord.vue')
	},
	{
		name: 'tradInfo', //首页 > 交易详情
		path: '/tradInfo/:id',
		component: require('../page/index/sub2/tradInfo.vue')
	},
	{
		name: 'PrepaidCard', //首页 > 预付卡
		path: '/PrepaidCard',
		component: require('../page/index/sub/PrepaidCard.vue')
	},
	{
		name: 'ElectronicCard', //首页 > 电子券
		path: '/ElectronicCard',
		component: require('../page/index/sub/ElectronicCard.vue')
	},
	{
		name: 'CardVolume', //首页 > 卡卷
		path: '/CardVolume',
		component: require('../page/index/sub/CardVolume.vue')
	},
	{
		name: 'cardDetail', //首页 > 卡卷详情
		path: '/cardDetail/:id',
		component: require('../page/index/sub2/cardDetail.vue')
	},
	{
		name: 'consumption', //消费首页
		path: '/consumption',
		component: require('../page/consumption/index.vue'),
	},
	{
		name: 'search', //消费搜索
		path: '/search',
		component: require('../page/consumption/sub/search.vue'),
	},
	{
		name: 'consumptioninfo', //消费详情
		path: '/consumptioninfo/:id',
		component: require('../page/consumption/sub/info.vue'),
	},
	{
		name: 'dzjlist', //电子券-更多
		path: '/dzjlist',
		component: require('../page/consumption/sub/dzj-list.vue'),
	},
	{
		name: 'dzjinfo', //电子券-更多
		path: '/dzjinfo/:id',
		component: require('../page/consumption/sub/dzj-info.vue'),
	},
	{
		name: 'dzjorder', //电子券-支付订单页面
		path: '/dzjorder/:id',
		component: require('../page/consumption/sub/order.vue'),
	},
	{
		name: 'yfklist', //预付卡-更多
		path: '/yfklist',
		component: require('../page/consumption/sub/yfk-list.vue'),
	},
	{
		name: 'yfkinfo', //预付卡-详情
		path: '/yfkinfo/:id',
		component: require('../page/consumption/sub/yfk-info.vue'),
	},
	{
		name: 'center', //我的
		path: '/center',
		component: require('../page/myinfo/index.vue'),
	}
]
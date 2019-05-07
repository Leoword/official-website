<template>
  <div 
		id="footer" 
		class="py-5"
		>
		<div id="info">
			<div id="logo">
				<img src="~/assets/images/logo.png" />
			</div>
			<p id="name">
				{{ $t('info.name') }}
			</p>
			<p>
				{{ $t('info.address.label') }}: {{ $t('info.address.value') }} 
				{{ $t('info.Tel') }}: 022-27956116
			</p>
			<p>{{ $t('info.email') }}: lemonce@or-change.cn</p>
		</div>
		<p>Copyright © 2005 - 2014 {{ $t('info.name') }}</p>
  </div>
</template>

<script>
export default {
	name: 'format-footer',
	props: ['options'],
	async asyncData() {

	}
};
</script>


<style lang="less">
#footer {
	height: auto;
	width: 100%;
	padding: 20px 0 10px 0;
	background-color: #f5f5f5;
	
	p {
		// height: 14px;
		line-height: 14px;
		color: #8f8f8f;
		font-size: 14px;
		margin-bottom: 5px;
		text-align: center;

		&#name {
			font-size: 20px;
			font-family:'微软雅黑';
			margin-bottom: 40px;
			font-weight: 500;
			color: #000;
		}
	}
}

#info {
	margin-bottom: 40px;
	#logo {
		text-align: center;
		margin-bottom: 20px;
		img{
			width: 60px;
		}
	}
}

</style>

<template>
	<div class="format-class-card">
		<b-container class="py-4">
			<b-row>
				<b-col
					v-for="(nav, index) in renderData"
					:key="index"
					class="text-center nav-img-ele"
				>
					<b-link :to="nav.url"> 
						<b-img
							class="rounded-circle"
							:src="nav.image" 
							style="height:60px;width:60px;"
						/>
						<b-card-text class="text-center pt-2">{{ nav.label }}</b-card-text>
					</b-link>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
	name: 'format-category-card',
	props: ['options'],
	async getRenderData(options, { id }, query, context) {
		return options[context.params.lang || 'zh-CN'];
	}
};
</script>

<style lang="less">
.format-class-card {
	.nav-img-ele {	
		a {
			font-size: 14px;
			color: #999;

			&:hover {
				img {
					transition: all 0.5s;
					transform: rotate(360deg);
					box-shadow: 0px 0px 20px #007BFF;
				}
			}
		}
	}
}
</style>

<template>
	<div class="overflow-auto">
		<b-container>
			<h1
				v-if="heading"
				class="text-center my-5"
				>{{ heading }}</h1>
			<b-row>
				<!-- 文章列表 -->
				<b-col class="pt-3">
					<b-card
						v-for="(list,index) in articleList"
						id="list"
						:key="index"
						class="border-0"
						>
						<h4 :title="list.title">
							<b-link
								to="/article"
								target="_blank"
								>{{ list.id }}{{ list.title }}</b-link>
						</h4>
						<b-card-text 
							class="list-summary" 
							style="min-height:65px;"
							>
							<small>{{ list.abstract | abstractClip }}</small>
						</b-card-text>
						<b-card-text style="color:#999;">
							<small>由{{ list.author }}发布于{{ list.date }}</small>
						</b-card-text>
					</b-card>
				</b-col>
				<!-- 推荐阅读 -->
				<b-col
					cols="3"
					class="d-none d-md-block pt-5"
					>
					<b-card
						class="rounded-0"
						body-class="pb-0"
						>
						<h5 class="mb-4">推荐阅读</h5>
						<b-card
							v-for="(item,index) in recommend"
							:key="index"
							no-body
							class="border-0 pb-4"
							>
							<b-link 
								target="_blank"
								:to="item.url"
								>
								<b-img
									:src="item.thumbnail"
									fluid
									/>
							</b-link>
							<b-card-text class="text-center mt-3">
								<small>{{ item.title }}</small>
							</b-card-text>
						</b-card>
					</b-card>
				</b-col>
			</b-row>
			<b-pagination
				v-model="currentPage"
				:total-rows="data.length"
				:per-page="perPage"
				aria-controls="list"
				align="center"
				class="mt-3"
				@click.native="windowMove"
			></b-pagination>
		</b-container>
	</div>
</template>

<script>
export default {
	name: 'format-article-list',
	filters: {
		abstractClip (value) {
			if (/.*[\u4e00-\u9fa5]+.*$/.test(value)) {
				return value.substr(0, 170) + '...';
			} else {
				return value.substr(0, 373) + '...';
			}
		}
	},
	props: [
		'options',
		'recommend'
	],
	data() {
		return {
			heading: '',
			perPage: 8,
			currentPage: 1,
			data: this.options
		};
	},
	computed: {
		articleList () {
			return this.data.slice(
				(this.currentPage - 1) * this.perPage,
				this.currentPage * this.perPage
			);
		},
	},
	methods: {
		windowMove () {
			let position = document.documentElement.scrollTop;
			const scroll = setInterval(function () {
				if (position < document.documentElement.scrollTop) {
					clearInterval(scroll);
				}

				window.scrollBy(0, -25);
				position = document.documentElement.scrollTop;

				if (position === 0) {
					clearInterval(scroll);
				}
			},10);
		}
	}
};
</script>

<style lang="less">

</style>
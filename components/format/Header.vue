<template>
	<b-navbar 
		id="header" 
		toggleable="md" 
		style="z-index:2000"
	>
		<b-navbar-brand 
			id="logo"
			:to="renderData.href" 
		>{{ $t('info.shortName') }}</b-navbar-brand>

		<b-navbar-toggle 
			ref="collapseButton"
			target="nav-collapse"
			class="nav-collapsing"
		></b-navbar-toggle>

		<b-collapse 
			id="nav-collapse" 
			is-nav 
			class="nav-collapsing"
		>
			<b-navbar-nav>
				<span
					v-for="(item, index) in renderData.data"
					:key="index"
				>
					<b-nav-item 
						v-if="!item.children"
						:href="item.url"
					>{{ item.label }}</b-nav-item>

					<b-nav-item-dropdown
						v-if="item.children"
						:text="item.label"
						right
					>
						<b-dropdown-item
							v-for="(dropdownItem, dropdownId) in item.children"
							:key="dropdownId" 
							:href="dropdownItem.url"
						>{{ dropdownItem.label }}</b-dropdown-item>
					</b-nav-item-dropdown>
				</span>
			</b-navbar-nav>

			<b-navbar-nav class="ml-auto">
				<b-nav-form>
					<b-form-input 
						v-model="keyword"
						size="sm" 
						class="mr-sm-2" 
						placeholder="Search"
					></b-form-input>
					<b-button 
						size="sm" 
						class="my-2 my-sm-0" 
						@click="jumpTo"
					>{{ $t('operate.search') }}</b-button>
				</b-nav-form>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	name: 'format-header',
	props: ['options'],
	data() {
		return {
			keyword: ''
		};
	},
	methods: {
		jumpTo() {
			this.$router.push({
				path: '/article', 
				query: {
					keyword: this.keyword
				}
			});
		}
	},
	async renderData({options, lang}) {
		return {
			href: (lang ? `/${lang}` : '') + '/index',
			data: options[lang || 'zh-CN']
		};
	}
};
</script>


<style lang="less">
#header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	box-shadow: 0 1px 2px rgba(0,0,0,.1);
	z-index: 100;
	background-color: #fff;
	border-color: #e4eaec;
}
</style>
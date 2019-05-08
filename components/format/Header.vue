<template>
	<b-navbar 
		id="header" 
		toggleable="md" 
		style="z-index:2000"
		>
		<b-navbar-brand 
			id="logo"
			href="#" 
			>
			{{ $t('info.shortName') }}
		</b-navbar-brand>

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
				<b-nav-item 
				v-for="(item, index) in data" 
				:key="index" 
				:href="item.url"
				>
				{{ item.label }}
			</b-nav-item>
			</b-navbar-nav>

			<b-navbar-nav class="ml-auto">
				<!-- <b-nav-item-dropdown 
					:text="$t('operate.switch')" 
					right
					>
					<b-dropdown-item 
					v-for="(item, index) in $language" 
					:key="index"
					@click="setLang(index)"
					>
					{{ index }}
					</b-dropdown-item>
				</b-nav-item-dropdown> -->

				<b-nav-form>
					<b-form-input 
						size="sm" 
						class="mr-sm-2" 
						placeholder="Search"
						></b-form-input>
					<b-button 
						size="sm" 
						class="my-2 my-sm-0" 
						type="submit"
						>
						{{ $t('operate.search') }}
					</b-button>
				</b-nav-form>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
import data from './navbar.json';

export default {
	name: 'format-header',
	data() {
		return {
			data
		};
	},
	props: ['options'],
	methods: {
		setLang(lang) {
			this.$i18n.locale = lang;
		}
	},
	async asyncData(context, options) {

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
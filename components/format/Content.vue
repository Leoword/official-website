<template>
	<div class="format-content my-3">
    <b-container>
			<b-row>
				<b-col
				cols="4"
				class="d-none d-md-block"
				>
					<img
						:src="options.thumbnail"
						fluid
						style="width: 100%;max-height: 300px"
						/>
				</b-col>
				<b-col>
					<p
						class="border-0"
						style="color:#999;"
						>
						{{ options.abstract | substr }}
					</p>
					<b-button
						variant="outline-info"
						block
						:to="`/article/${options.hash}`"
						class="position-absolute fixed-bottom"
						>
						More
					</b-button>
				</b-col>
			</b-row>
    </b-container>
  </div>
</template>

<script>
import {getSubStr} from './mixin.js';

export default {
	name: 'format-content',
	filters: {
		substr(value) {
			return getSubStr(value, 370, 140);
		}
	},
	props: ['options'],
	data() {
		return {
		};
	},
	methods: {

	},
	async asyncData(context, options) {

	}
};
</script>

<style lang="less">
.format-content {
	max-height: 350px;
	p {
		overflow: hidden;
		max-height: 200px;
		text-indent: 2em;
		font-size: 15px;
	}
}
</style>


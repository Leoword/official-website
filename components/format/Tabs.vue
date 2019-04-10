<template>
	<div :style="{
		background: '#F2F2F2',
		padding: '70px 0'
	}" id="tabs-box">
		<b-container>

			<h2 style="text-align:center;padding-bottom:20px;">Tabs</h2>
			<b-card no-body style="border:none;background-color: #F2F2F2;">
				<b-tabs card>
					<b-tab no-body title="Picture 1">
						<b-card-group deck>
							<b-card img-src="https://picsum.photos/600/200/?image=26" img-alt="Card image" img-top>
								<b-card-text>
									<b-link>Some quick example text to build on the card and make up the bulk of the card's content.</b-link>	
								</b-card-text>
							</b-card>

							<b-card img-src="https://picsum.photos/600/200/?image=26" img-alt="Card image" img-top>
								<b-card-text>
									Some quick example text to build on the card and make up the bulk of the card's content.
								</b-card-text>
							</b-card>

							<b-card img-src="https://picsum.photos/600/200/?image=26" img-alt="Card image" img-top>
								<b-card-text>
									Some quick example text to build on the card and make up the bulk of the card's content.
								</b-card-text>
							</b-card>
						</b-card-group>
					</b-tab>

					<b-tab no-body title="Picture 2">
						<b-card-group deck>
							<b-card img-src="https://picsum.photos/600/200/?image=25" img-alt="Card image" img-top>
								<b-card-text>
									Some quick example text to build on the card and make up the bulk of the card's content.
								</b-card-text>
							</b-card>

							<b-card img-src="https://picsum.photos/600/200/?image=25" img-alt="Card image" img-top>
								<b-card-text>
									Some quick example text to build on the card and make up the bulk of the card's content.
								</b-card-text>
							</b-card>

							<b-card img-src="https://picsum.photos/600/200/?image=25" img-alt="Card image" img-top>
								<b-card-text>
									Some quick example text to build on the card and make up the bulk of the card's content.
								</b-card-text>
							</b-card>
						</b-card-group>
					</b-tab>

					<b-tab no-body title="Picture 3">
						<b-card-group deck>
							<b-card img-src="https://picsum.photos/600/200/?image=23" img-alt="Card image" img-top>
								<b-card-text>
									Some quick example text to build on the card and make up the bulk of the card's content.
								</b-card-text>
							</b-card>

							<b-card img-src="https://picsum.photos/600/200/?image=23" img-alt="Card image" img-top>
								<b-card-text>
									Some quick example text to build on the card and make up the bulk of the card's content.
								</b-card-text>
							</b-card>

							<b-card img-src="https://picsum.photos/600/200/?image=23" img-alt="Card image" img-top>
								<b-card-text>
									Some quick example text to build on the card and make up the bulk of the card's content.
								</b-card-text>
							</b-card>
						</b-card-group>
					</b-tab>
				</b-tabs>
  		</b-card>

		</b-container>
	</div>
</template>

<script>
export default {
	name: 'format-tabs'
	
}
</script>

<style lang="less">
	#tabs-box .card-header {
		border-bottom: none;
		background-color: rgba(0, 0, 0, 0);
		margin-bottom: 20px;

		ul li {
			margin: 0 auto;

			a {
				border-radius: 0.5rem;	
			}
		}

		.nav-tabs .nav-link.active {
			border-color: blue;
		}
		
	}
</style>

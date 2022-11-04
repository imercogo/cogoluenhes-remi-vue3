<script setup>

import TheLogo from '@/components/TheLogo.vue'
import TheNavbar from '../components/TheNavbar.vue'
import {useRoute} from 'vue-router'
import {ref, onMounted} from 'vue'
import axios from 'axios'

const route = useRoute()
const amiiboTail = route.params
const amiiboDetails = ref([])
const firstAmiibo = ref([])
const release = ref([])
onMounted(async () => {
    console.log(amiiboTail.amiiboId)
    const amiibo = await axios.get('https://www.amiiboapi.com/api/amiibo/?tail='+amiiboTail.amiiboId)
    amiiboDetails.value = amiibo.data.amiibo
    firstAmiibo.value = amiiboDetails.value[0]
    release.value = firstAmiibo.value.release
})

</script>

<template>
    	<body class="left-sidebar is-preload">
		<div id="page-wrapper">

			<!-- Header -->
				<section id="header">

                    <TheLogo/>
					<TheNavbar/>

				</section>

			<!-- Main -->
				<section id="main">
					<div class="container">
						<div class="row">
							<div class="col-4 col-12-medium">

								<!-- Sidebar -->
									<section class="box">
										<header>
											<h3>Infos</h3>
										</header>
										<p> amiiboSeries: <b>{{firstAmiibo.amiiboSeries}}</b> <br />
											character: {{firstAmiibo.character}}<br />
											gameSeries: {{firstAmiibo.gameSeries}}<br />
											type: {{firstAmiibo.type}}
										</p>
										
									</section>
									<section class="box">
										<header>
											<h3>Dates sorties</h3>
										</header>
										
										<ul class="divided">
											<li>au: {{release.au}}</li>
											<li>eu: {{release.eu}}</li>
											<li></li>
											<li></li>
										</ul>
										
									</section>

							</div>
							<div class="col-8 col-12-medium imp-medium">

								<!-- Content -->
									<article class="box post">
										<a href="#" class="featured"><img :src=firstAmiibo.image alt="" /></a>
										<header>
											<h2>{{firstAmiibo.name}}</h2>
											<p>{{firstAmiibo.type}}</p>
										</header>
										
										
										
									</article>

							</div>
						</div>
					</div>
				</section>

		</div>

		
	</body>
</template>

<style scoped>

</style>
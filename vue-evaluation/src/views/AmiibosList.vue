<script setup>
import TheLogo from '@/components/TheLogo.vue'
import TheNavbar from '../components/TheNavbar.vue'
import {ref, onMounted} from 'vue'
import axios from 'axios'
import router from '../router';

const amiibos = ref([])

onMounted(async () => {
    const allAmiibos = await axios.get("https://www.amiiboapi.com/api/amiibo/")
    amiibos.value = allAmiibos.data.amiibo
    console.log(amiibos.value)
})

const goToAmiiboDetails = amiiboId => {
    const routeOptions = {
        name: 'amiiboDetails',
        params: {
            amiiboId: amiiboId
        }
    }
    router.push(routeOptions)
}

</script>

<template>
    	<body class="no-sidebar is-preload">
		<div id="page-wrapper">

			<!-- Header -->
				<section id="header">
                    <TheLogo/>
					<TheNavbar/>

				</section>

			<!-- Main -->
				<section id="main">
					<div class="container">

						<!-- Content -->
							<article class="box post">
								
								<header>
									<h2>Ma Collection</h2>
									<p>{{amiibos.length}} amiibos</p>
								</header>
								<p>
									<table>
										<tr>
										  <th>Character</th>
										  <th>game Series</th>
										  <th>Action</th>
										</tr>
										<tr v-for="amiibo in amiibos">
										  <td>{{amiibo.character}}</td>
										  <td>{{amiibo.gameSeries}}</td>
										  <td><button @click="goToAmiiboDetails(amiibo.tail)">voir</button></td>
										</tr>
									</table>
								</p>
								
							</article>

					</div>
				</section>

		</div>

	</body>
</template>

<style scoped>

</style>
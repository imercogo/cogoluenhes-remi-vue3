<script setup>
import TheLogo from '../components/TheLogo.vue'
import TheBanner from '../components/TheBanner.vue'
import TheNavbar from '../components/TheNavbar.vue'
import {ref, onMounted} from 'vue'
import axios from 'axios'
import router from '../router'

const amiibos = ref([])
const threeAmiibos = ref([])

onMounted(async () => {
    const allAmiibos = await axios.get("https://www.amiiboapi.com/api/amiibo/")
    amiibos.value = allAmiibos.data.amiibo
    const random = Math.random()*200
    threeAmiibos.value = amiibos.value.slice(random, random+3)
})

const goToAmiibosList = () => {
    router.push({name: "amiibosList"})
}

</script>

<template>
    <!-- Header -->
    <section id="header">
        <TheLogo/>
        <TheNavbar/>
        <TheBanner/>
        <!-- Intro -->
        <section id="intro" class="container">
            <div class="row">
                <div class="col-4 col-12-medium" v-for="amiibo in threeAmiibos">
                    <section class="middle">
                        <img :src="amiibo.image" />
                        <header>
                            <h2>{{amiibo.character}}</h2>
                        </header>
                        <p>{{amiibo.gameSeries}}</p>
                    </section>
                </div>
            </div>
            <footer>
                <ul class="actions">
                    <li><a class="button large" @click="goToAmiibosList">Liste complète</a></li>
                </ul>
            </footer>
        </section>

    </section>
</template>

<style scoped></style>
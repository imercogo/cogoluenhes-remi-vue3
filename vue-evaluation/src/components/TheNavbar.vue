<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

// const goToAmiibosList = () => {
//     console.log("halo")
//     router.push({name: 'amiibosList'})
// }
</script>

<template>
<!-- Nav -->
<nav id="nav">
    <ul>
        <li class="current"><router-link to="/">Home</router-link></li>
        <!-- <li><a href="left-sidebar.html">Pokémons</a></li> -->
        <li><router-link to="/amiibosList">Liste Amiibo</router-link></li>
    <router-view/>
    </ul>
</nav>
</template>
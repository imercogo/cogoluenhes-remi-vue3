<script setup>
  import TheLogo from '@/components/TheLogo.vue'
  import TheBanner from '@/components/TheBanner.vue'
  import TheNavbar from '@/components/TheNavbar.vue'
  import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
<body class="homepage is-preload">
		<div id="page-wrapper">
        
        <router-view/>
        <TheFooter/>
		</div>

	</body>
</template>

<style scoped>

</style>

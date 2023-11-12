<script setup>
//import HelloWorld from './components/HelloWorld.vue'
import InterfazAlumno from './components/InterfazAlumno.vue';
import InterfazDocente from './components/InterfazDocente.vue';
import Fianzas from './components/Finanzas.vue'
</script>

<template>
<Fianzas></Fianzas>
 <!-- <InterfazAlumno></InterfazAlumno> -->
 <!-- <InterfazDocente></InterfazDocente> --> 
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

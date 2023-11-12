<template>
  <section>
    <div class="section-div">
      <div class="div-info">
        <div>
          <h2>{{ alumnoInfo.nombre }}</h2>
        </div>
        <div class="info-datos">
          <div>
            <h6>Numero de control:</h6>
            <p>{{ alumnoInfo.numeroDeControl }}</p>
          </div>
          <div>
            <h6>Fecha de ingreso:</h6>
            <p>{{ alumnoInfo.fechaDeIngreso }}</p>
          </div>
        </div>
      </div>

      <div class="div-foto">
        <div class="div-foto">
          <img :src="alumnoInfo.foto" class="img-fluid" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const alumnoInfo = ref({
  nombre: '',
  numeroDeControl: '',
  fechaDeIngreso: '',
  foto: ''
});

async function obtenerInfoAlumno() {
  try {
    const response = await axios.post('http://localhost:3000/qr');
    alumnoInfo.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

obtenerInfoAlumno();
</script>

<style scoped>
.section-div {
  display: flex;
  background-color: rgba(194, 129, 49, 0.441);
  align-items: center;
  border-radius: 15px;
  margin-left: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.section-div h6,
p {
  padding-left: 1rem;
}

.div-info {
  margin-left: 1rem;
  width: 30%;
}

.info-datos {
  margin: auto;
  text-align: center;
}

h2 {
  margin: 2rem 0;
}

h6 {
  display: flex;
}

.div-status {
  margin: 3rem 0;
  width: 3rem;
}

.div-status img {
  background-color: rgb(190, 188, 188);
  border-radius: 5px;
  margin-left: 4rem;
}

.div-foto {
  height: auto;
}

p {
  text-align: left;
}
</style>

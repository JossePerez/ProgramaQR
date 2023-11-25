<template>
  <section>
    <div v-if="alumno" class="section-div">
      <div class="div-info">
        <div>
          <h2>{{ alumno && alumno.Nombre }}</h2>
        </div>
        <div class="info-datos">
          <div>
            <h6>Numero de control:</h6>
            <p>{{ alumno && alumno.NumeroControl }}</p>
          </div>
          <div>
            <h6>Fecha de ingreso:</h6>
            <p>{{ alumno && alumno.FechaIngreso }}</p>
          </div>
        </div>
      </div>

      <div class="div-foto">
        <div class="div-foto">
          <img :src="alumno && alumno.Foto" class="img-fluid" alt="">
        </div>
      </div>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      alumno:null,
    };
  },
  mounted() {
    try {
      // Obtener el ID del alumno de la URL
      const alumnoId = this.$route.params.id; // Asumiendo que estás usando Vue Router

      // Hacer la solicitud utilizando Axios
      axios.get(`http://localhost:3000/api/alumnos/${alumnoId}`)
        .then(response => {
          // Asignar el primer elemento del array rowAlumno a la variable alumno
          this.alumno = response.data.rowAlumno[0];
        })
        .catch(error => {
          console.error('Error al obtener los datos del alumno', error);
        });
    } catch (error) {
      console.error('Error en el gancho mounted:', error);
    }
  },
};
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


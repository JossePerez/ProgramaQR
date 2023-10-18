<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>

<!--Interfaz del Alumno-->
<section>
    <div class="section-div">
        <div class="div-info">
            <div>
                <h2>Jose de Jesus</h2>
            </div>
            <div class="info-datos">
                <div>
                    <label> <h6>Numero de control:</h6></label>
                    <p>2354334</p>
                </div>
                <div>
                    <label><h6>Carrera:</h6></label>
                    <p>Derecho</p>
                </div>
                <div>
                    <label><h6>Fecha de ingreso:</h6></label>
                    <p>26/08/2022</p>
                </div>
                <div class="div-status">
                    <img src="../imagenes/checkin.png" class="img-fluid" alt="">
                </div>
            </div>
        </div>

        <div class="div-foto">
            <div class="div-foto">
                <img src="../imagenes/estudiante.png"  class="img-fluid" alt="">
            </div>
        </div>
    </div>
</section>

</template>

<style scoped>
.section-div {
    display: flex;
    background-color: rgb(212, 127, 29);
    align-items: center;
    border-radius: 15px;
    margin-left: 2rem;
}

.div-info {
    margin: 1rem;
    width: 25%;
}

.info-datos {
    margin: auto; 
    text-align: center; 
}

label {
    display: flex;
}

.div-status {
    width: 3rem;
    margin: 5rem;
}

.div-foto{
    height: auto;
}
</style>


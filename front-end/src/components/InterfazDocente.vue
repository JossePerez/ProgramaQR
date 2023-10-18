<script setup>

</script>

<template>

<!--Interfaz del Alumno-->
<section>
    <div class="section-div">
        <div class="div-info">
            <div>
                <h2>Maria Miranda</h2>
            </div>
            <div class="info-datos">
                <div>
                    <h6>Numero de control:</h6>
                    <p>2354334</p>
                </div>
                <div>
                    <h6>Cargo:</h6>
                    <p>Docente</p>
                </div>
                <div>
                    <h6>Fecha de ingreso:</h6>
                    <p>26/08/2022</p>
                </div>
                <div class="div-status">
                    <div>
                        <div>
                            <h6>Clase:</h6>
                            <p>Calculo Diferencial</p>
                        </div>
                    </div>
                    <div>
                        <img src="../imagenes/checkin.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="div-foto">
            <div class="div-foto">
                <img src="../imagenes/Docente.png"  class="img-fluid" alt="">
            </div>
        </div>
    </div>
</section>

</template>

<style scoped>
.section-div {
    display: flex;
    background-color: rgba(194, 129, 49, 0.441);
    align-items: center;
    border-radius: 15px;
    margin-left: 2rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Sombra de fondo */
}
.section-div h6, p{
    padding-left: 2rem;
}

.div-info {
    margin-left: 1rem;
    width: 30%;
}

.info-datos {
    margin: auto; 
    text-align: center; 
}

h2{
    margin: 2rem 0;
}

h6 {
    display: flex;
}

.div-status {
    margin: 3rem 0;
    width: 3rem;
}

.div-status img{
    background-color: rgb(190, 188, 188);
    border-radius: 5px;
    margin-left: 6rem;
}
.div-foto{
    height: auto;
}

p{
    text-align: left;
}
</style>


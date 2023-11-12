<template>
    <div class="container text-center">
      <h1>Registro</h1>
  
      <div class="row">
        <div class="col-md-2 flex-column">
          <button type="button" class="btn btn-primary">Primer Boton</button>
          <button type="button" class="btn btn-primary">Segundo Boton</button>
          <button type="button" class="btn btn-primary">Tercer Boton</button>
        </div>
  
        <div class="col-md-10">
          <div class="table-container">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Email</th>
                  <th scope="col">Columna 5</th>
                  <th scope="col">Columna 6</th>
                  <th scope="col">Columna 7</th>
                  <th scope="col">Columna 8</th>
                  <th scope="col">Columna 9</th>
                  <th scope="col">Columna 10</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item.nombre }}</td>
                  <td>{{ item.apellido }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.columna5 }}</td>
                  <td>{{ item.columna6 }}</td>
                  <td>{{ item.columna7 }}</td>
                  <td>{{ item.columna8 }}</td>
                  <td>{{ item.columna9 }}</td>
                  <td>{{ item.columna10 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <!-- Segunda tabla con barra de desplazamiento -->
          <div class="table-container mt-4">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Columna A</th>
                  <th scope="col">Columna B</th>
                  <th scope="col">Columna C</th>
                  <!-- Agregar más columnas según sea necesario -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in items2" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item.columnaA }}</td>
                  <td>{{ item.columnaB }}</td>
                  <td>{{ item.columnaC }}</td>
                  <!-- Agregar más datos según sea necesario -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
        items2: [], // Nueva tabla
      };
    },
    mounted() {
      // Generar datos de ejemplo para la primera tabla
      for (let i = 1; i <= 20; i++) {
        this.items.push({
          nombre: `Nombre ${i}`,
          apellido: `Apellido ${i}`,
          email: `email${i}@ejemplo.com`,
          columna5: `Dato ${i}`,
          columna6: `Dato ${i}`,
          columna7: `Dato ${i}`,
          columna8: `Dato ${i}`,
          columna9: `Dato ${i}`,
          columna10: `Dato ${i}`,
        });
      }
  
      // Generar datos de ejemplo para la segunda tabla
      for (let i = 1; i <= 20; i++) {
        this.items2.push({
          columnaA: `Dato A${i}`,
          columnaB: `Dato B${i}`,
          columnaC: `Dato C${i}`,
          // Agregar más datos según sea necesario
        });
      }
    },
  };
  </script>
  
  <style scoped>
  /* Agregar estilos personalizados aquí */
  body {
    padding: 20px;
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  .table-container {
    max-height: 400px; /* Ajustar según sea necesario */
    overflow-y: auto;
  }
  </style>
  
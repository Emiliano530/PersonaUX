<script>
import axios from 'axios';
let API_URL= '/api/guardarPersonasUxd.php';

export default {
  data() {
    return {
      nombre: '',
      edad: '',
      estadoCivil: '',
      trabajo: '',
      residencia: '',
      cita: '',
      citaAutor: '',
      bio: '',
      personalidad01: '',
      personalidad02: '',
      personalidad03: '',
      personalidad04: '',
      objetivos: [],
      frustraciones: [],
      motivaciones: [],
      porcentaje: '',
      marcas: '',

    }
  },
  methods: {
    submit() {
      axios.post(API_URL, {
        nombre: this.nombre,
        edad: this.edad,
        estadoCivil: this.estadoCivil,
        trabajo: this.trabajo,
        residencia: this.residencia,
        cita: this.cita,
        citaAutor: this.citaAutor,
        bio: this.bio,
        personalidad01: this.personalidad01,
        personalidad02: this.personalidad02,
        personalidad03: this.personalidad03,
        personalidad04: this.personalidad04,
        objetivos: this.objetivos,
        frustraciones: this.frustraciones,
        motivaciones: this.motivaciones,
        porcentaje: this.porcentaje,
        marcas: this.marcas,
      })
      .then((response) => {
        console.log(response.status)
    });
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-4 p-2 m-5">
    <div>
      <label for="nombre"> Nombre </label>
      <br />
      <input v-model="nombre"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>

    <div>
      <label for="edad"> Edad </label>
      <br />
      <input v-model="edad"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>

    <div>
      <label for="estadoCivil"> Estado Civil </label>
      <br />
      <input v-model="estadoCivil"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="estadoCivil"
      />
    </div>

    <div>
      <label for="trabajo"> Trabajo </label>
      <br />
      <input  v-model="trabajo"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>

    <div>
      <label for="residencia"> Residencia </label>
      <br />
      <input v-model="residencia"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>

    <div>
      <label for="cita"> Cita </label>
      <br />
      <input v-model="cita"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>

    <div>
      <label for="citaAutor"> Autor de la cita </label>
      <br />
      <input v-model="citaAutor"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>

    <div>
      <label for="bio"> Biografia </label>
      <br />
      <input v-model="bio"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>
    <div>
      <label for="personalidad01"> Personalidad 1</label>
      <br />
      <input v-model="personalidad01"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>
    <div>
      <label for="personalidad02"> Personalidad 2</label>
      <br />
      <input v-model="personalidad02"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>
    <div>
      <label for="personalidad03"> Personalidad 3</label>
      <br />
      <input v-model="personalidad03"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>
    <div>
      <label for="personalidad04"> Personalidad 4</label>
      <br />
      <input v-model="personalidad04"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>

    <div>
      <label for="objetivos"> Objetivos </label>
      <br />
      <input v-model="objetivos"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>

    <div>
      <label for="frustraciones"> Frustraciones </label>
      <br />
      <input v-model="frustraciones"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>

    <div class="card">
      <label for="motivaciones"> Motivaciones </label>
      <br />
      <input
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
      <br />
      <label
        for="default-range"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Porcentaje</label
      >
      <input v-model="porcentaje"
        id="default-range"
        type="range"
        class="w-48 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>

    <div>
      <label for="marcas"> Marcas </label>
      <br />
      <input v-model="marcas"
        class="shadow appearance-none border rounded-full w-48 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>
  </div>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="submit">Submit</button>
</template>

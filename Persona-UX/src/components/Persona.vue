<script>
import axios from "axios";
let API_URL = "/api/guardarPersonasUxd.php";

export default {
  data() {
    return {
      nombre: "",
      apellido: "",
      edad: "",
      estadoCivil: "",
      trabajo: "",
      residencia: "",
      cita: "",
      citaAutor: "",
      bio: "",
      personalidad01: "",
      personalidad02: "",
      personalidad03: "",
      personalidad04: "",
      objetivos: [],
      frustraciones: [],
      motivaciones: [],
      porcentaje: "",
      marcas: "",
    };
  },
  methods: {
    submit() {
      axios
        .post(API_URL, {
          nombre: this.nombre + ' ' +this.apellido,
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
          console.log(response.status);
        });
    },
  },
};
</script>
<template>
  <div class="card relative flex p-2 bg-slate-900 m-16 mb-28">
    <div class="card static w-3/12 bg-violet-900 ml-12 mt-8 mb-8">
      <div
        class="blocks absolute top-6 left-6 bg-gray-600 border-orange-700 border w-48 h-64"
      ></div>
      <div class="block w-full h-64"></div>
      <div class="blocks grid place-items-center text-center w-full">
        <div class="blocks static">
          <input
            id="name"
            maxlength="100"
            v-model="nombre"
            placeholder="Nombre"
            class="pl-3 pr-3 bg-violet-900 rounded text-white text-center placeholder-white text-lg border-none shadow outline-none focus:outline-none focus:ring w-11/12 mt-8"
            type="text"
          />
          <input
            id="apellido"
            maxlength="100"
            v-model="apellido"
            placeholder="Apellido"
            class="pl-3 pr-3 bg-violet-900 rounded text-white text-center placeholder-white text-lg border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mb-24 mt-1"
            type="text"
          />
          <div class="blocks absolute top-96 left-3 m-4 bg-black w-72 h-fit">
            <textarea
              placeholder="Escriba una cita aqui"
              class="pl-3 pr-3 bg-black text-white rounded text-center placeholder-white text-sm border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-2"
              name="cita"
              id="cita"
              cols="40"
              rows="3"
              maxlength="500"
              v-model="cita"
            ></textarea>
            <input
              id="citaAutor"
              maxlength="500"
              v-model="citaAutor"
              placeholder="Autor de la cita"
              class="pl-3 pr-3 bg-black rounded text-white text-end placeholder-white text-xs border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-0.5 mb-2"
              type="textarea"
            />
          </div>
          <input
            id="edad"
            maxlength="2"
            v-model="edad"
            placeholder="Edad"
            class="pl-3 pr-3 bg-violet-900 rounded text-white text-center placeholder-white text-lg border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-6"
            type="tel"
          />
          <input
            id="residencia"
            maxlength="200"
            v-model="residencia"
            placeholder="Residencia"
            class="pl-3 pr-3 bg-violet-900 rounded text-white text-center placeholder-white text-lg border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-1"
            type="text"
          />
          <select
            v-model="estadoCivil"
            class="pl-3 pr-3 bg-violet-900 rounded text-white text-center placeholder-white text-lg border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-1"
          >
            <option value="" class="bg-red-700 text-white">Estado Civil</option>
            <option value="1" class="bg-white text-black">Soltero</option>
            <option value="2" class="bg-white text-black">Casado</option>
            <option value="3" class="bg-white text-black">Divorciado</option>
            <option value="4" class="bg-white text-black">Separado</option>
            <option value="5" class="bg-white text-black">Union libre</option>
            <option value="6" class="bg-white text-black">Viudo</option>
          </select>
          <input
            id="trabajo"
            maxlength="200"
            v-model="trabajo"
            placeholder="Trabajo"
            class="pl-3 pr-3 bg-violet-900 rounded text-white text-center placeholder-white text-lg border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-1 mb-4"
            type="text"
          />
        </div>
      </div>
    </div>
    <div class="card w-9/12 mr-12 mt-8 mb-8">
      <div class="grid gap-4 grid-cols-2 m-0">
        <div class="bg-fuchsia-600 ml-6 mt-0 text-white">
          <div class="ml-4 mt-2 mb-2">
            <label for="bio"><strong>Biografia</strong></label>
            <br />
            <textarea
              placeholder="Escribe tu biografia aqui"
              class="pl-3 pr-3 bg-fuchsia-600 rounded placeholder-gray-200 text-base border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-2"
              name="bio"
              id="bio"
              cols="40"
              rows="8"
              maxlength="700"
              v-model="bio"
            ></textarea>
          </div>
        </div>
        <div class="bg-fuchsia-600 ml-2 mt-0 text-white">
          <div class="ml-4 mt-2 mb-2">
            <label for="objetivos"><strong>Objetivos</strong></label>
            <br />
            <textarea
              placeholder="Escribe cuales son tus motivaciones aqui"
              class="pl-3 pr-3 bg-fuchsia-600 rounded placeholder-gray-200 text-base border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-2"
              name="objetivos"
              id="bio"
              cols="40"
              rows="3"
              maxlength="300"
              v-model="objetivos"
            ></textarea>
            <label for="frustraciones"><strong>Frustraciones</strong></label>
            <br />
            <textarea
              placeholder="Escribe cuales son tus frustaciones aqui"
              class="pl-3 pr-3 bg-fuchsia-600 rounded placeholder-gray-200 text-base border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-2"
              name="frustraciones"
              id="bio"
              cols="40"
              rows="3"
              maxlength="300"
              v-model="frustraciones"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="pt-5 m-0 text-white">
        <label class="mt-4 ml-10" for=""><strong>Personalidad</strong></label>
        <br />
        <div class="relative ml-10 mt-6 mr-10">
          <input
            v-model="personalidad01"
            type="range"
            min="0"
            max="100"
            set="50"
            class="w-full h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
          />
          <span class="absolute left-0 top-0 -mt-2 text-sm font-medium"
            >Introvertido</span
          >
          <span class="absolute left-1/2 top-0 -mt-2 text-sm font-medium">{{
            this.personalidad01
          }}</span>
          <span class="absolute right-0 top-0 -mt-2 text-sm font-medium"
            >Extrovertido</span
          >
        </div>
        <br />
        <div class="relative ml-10 mt-1 mr-10">
          <input
            v-model="personalidad02"
            type="range"
            min="0"
            max="100"
            set="50"
            class="w-full h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
          />
          <span class="absolute left-0 top-0 -mt-2 text-sm font-medium"
            >Observador</span
          >
          <span class="absolute left-1/2 top-0 -mt-2 text-sm font-medium">{{
            this.personalidad02
          }}</span>
          <span class="absolute right-0 top-0 -mt-2 text-sm font-medium"
            >Intuitivo</span
          >
        </div>
        <br />
        <div class="relative ml-10 mt-1 mr-10">
          <input
            v-model="personalidad03"
            type="range"
            min="0"
            max="100"
            set="50"
            class="w-full h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
          />
          <span class="absolute left-0 top-0 -mt-2 text-sm font-medium"
            >Emocional</span
          >
          <span class="absolute left-1/2 top-0 -mt-2 text-sm font-medium">{{
            this.personalidad03
          }}</span>
          <span class="absolute right-0 top-0 -mt-2 text-sm font-medium"
            >Pensamiento</span
          >
        </div>
        <br />
        <div class="relative ml-10 mt-1 mb-4 mr-10">
          <input
            v-model="personalidad04"
            type="range"
            min="0"
            max="100"
            set="50"
            class="w-full mb-5 h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
          />
          <span class="absolute left-0 top-0 -mt-2 text-sm font-medium"
            >Prospeccion</span
          >
          <span class="absolute left-1/2 top-0 -mt-2 text-sm font-medium">{{
            this.personalidad04
          }}</span>
          <span class="absolute right-0 top-0 -mt-2 text-sm font-medium"
            >Juzgador</span
          >
        </div>
      </div>
      <div class="grid gap-4 grid-cols-2 m-0 text-white">
        <div class="ml-6 mt-0 text-white">
          <div class="ml-4 mt-2 mb-2">
            <label for="motivaciones"><strong>Motivaciones</strong></label>
            <br />
            <div class="grid gap-2 grid-cols-2">
              <label class="mr-8" for="motivaciones">Incentivo</label>
              <input
                v-model="motivaciones.porcentaje1"
                type="range"
                min="0"
                max="100"
                set="30"
                class="w-4/4 h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
              />
              <label class="mr-8" for="motivaciones">Miedo</label>
              <input
                v-model="motivaciones.porcentaje2"
                type="range"
                min="0"
                max="100"
                set="15"
                class="w-4/4 h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
              />
              <label class="mr-8" for="motivaciones">Social</label>
              <input
                v-model="motivaciones.porcentaje3"
                type="range"
                min="0"
                max="100"
                set="60"
                class="w-4/4 h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
              />
              <label class="mr-8" for="motivaciones">Logro</label>
              <input
                v-model="motivaciones.porcentaje4"
                type="range"
                min="0"
                max="100"
                set="45"
                class="w-4/4 h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
              />
              <label class="mr-8" for="motivaciones">Crecimiento</label>
              <input
                v-model="motivaciones.porcentaje5"
                type="range"
                min="0"
                max="100"
                set="22"
                class="w-4/4 h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div class="ml-2 mt-0">
          <div class="ml-4 mt-2 mb-2">
            <label for="marcas"><strong>Marcas</strong></label>
            <br />
            <textarea
              placeholder="Escribe tus marcas aqui"
              class="pl-3 pr-3 bg-slate-900 rounded text-center placeholder-gray-200 text-base border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-2"
              name="marcas"
              id="marcas"
              cols="40"
              rows="7"
              v-model="marcas"
            ></textarea>
          </div>
        </div>
      </div>
      <div
        class="blocks absolute left-20 top-full w-10/12 h-14 justify-center text-center"
      >
        <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    @click="submit()"
  >
    Submit
  </button>
      </div>
    </div>
  </div>
</template>
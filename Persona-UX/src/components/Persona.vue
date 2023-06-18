<script>
import slider from "../components/sliderInput.vue";
import inputsimple from "../components/inputsimple.vue";
import intextarea from "../components/textArea.vue";

import axios from "axios";
let API_URL = "/api/guardarPersonasUxd.php";
export default {
  components: {
    slider,
    inputsimple,
    intextarea,
  },
  emits: ["personalidad", "datoInput", "datoArea"],
  data() {
    return {
      datos: {
        nombre: "",
        apellido: "",
        edad: "",
        estadoCivil: "",
        trabajo: "",
        residencia: "",
        cita: "",
        citaAutor: "",
        bio: "",
        personalidad01: "50",
        personalidad02: "50",
        personalidad03: "50",
        personalidad04: "50",
        objetivos: [],
        frustraciones: [],
        motivaciones: [],
        marcas: "",
      },
      mensaje: "",
      bgColor: "",
      nuevoItem: "",
    };
  },
  methods: {
    submit() {
      window.scrollTo(0, 0);
      this.bgColor = "rgb(22 163 74)";
      this.mensaje = "Se ha guardado correctamente";
      axios
        .post(API_URL, {
          nombre: this.datos.nombre + " " + this.datos.apellido,
          edad: this.datos.edad,
          estadoCivil: this.datos.estadoCivil,
          trabajo: this.datos.trabajo,
          residencia: this.datos.residencia,
          cita: this.datos.cita,
          citaAutor: this.datos.citaAutor,
          bio: this.datos.bio,
          personalidad01: this.datos.personalidad01,
          personalidad02: this.datos.personalidad02,
          personalidad03: this.datos.personalidad03,
          personalidad04: this.datos.personalidad04,
          objetivos: this.datos.objetivos,
          frustraciones: this.datos.frustraciones,
          motivaciones: this.datos.motivaciones,
          marcas: this.datos.marcas,
        })
        .then((response) => {
          console.log(response.status);
          Object.assign(this.$data, this.$options.data.call(this));
          console.log("Datos guardados");
        });
      // Aquí realizarías la acción de guardar el objeto person
    },
    enInput() {
      this.mensaje = "";
    },
    guardarNombre(s) {
      (this.datos.nombre = s), console.log(this.datos.nombre);
    },
    guardarApellido(s) {
      (this.datos.apellido = s), console.log(this.datos.apellido);
    },
    personalidad1(s) {
      this.datos.personalidad01 = s;
      console.log(s);
    },
    personalidad2(s) {
      this.datos.personalidad02 = s;
      console.log(s);
    },
    personalidad3(s) {
      this.datos.personalidad03 = s;
      console.log(s);
    },
    personalidad4(s) {
      this.datos.personalidad04 = s;
      console.log(s);
    },
    agregarObjetivo() {
      if (this.nuevoItem) {
        this.datos.objetivos.push({ value: this.nuevoItem });
        this.nuevoItem = "";
      }
    },
    agregarFrustraciones() {
      if (this.nuevoItem) {
        this.datos.frustraciones.push({ value: this.nuevoItem });
        this.nuevoItem = "";
      }
    },
    guardarBio(s) {
      this.datos.bio = s;
    },
    guardarAutor(s) {
      this.datos.citaAutor = s;
    },
    guardarTrabajo(s) {
      this.datos.trabajo = s;
    },
    guardarResidencia(s) {
      this.datos.residencia = s;
    },
    guardarEdad(s) {
      this.datos.edad = s;
    },
  },
};
</script>

<template>
  <div class="grid grid-cols-1 place-items-center">
    <div
      v-if="mensaje"
      :style="{ backgroundColor: bgColor }"
      class="card border border-blue-700 text-white text-center rounded-full w-2/5 mb-5 mt-5 p-6"
    >
      <strong>{{ mensaje }}</strong>
    </div>
  </div>
  <div class="flex rounded-3xl overflow-hidden">
    <div
      class="flex flex-col w-1/3 justify-center items-center bg-indigo-900 p-5"
    >
      <div
        class="flex items-center justify-center bg-green-600 w-52 h-52 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-full h-full stroke-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <inputsimple
        @dato-input="guardarNombre"
        labelClasses="peer-focus:text-white"
        class="w-96 p-5"
        >Nombre:</inputsimple
      >
      <inputsimple
        @dato-input="guardarApellido"
        labelClasses="peer-focus:text-white"
        class="w-96 p-5"
        >Apellido:</inputsimple
      >
      <inputsimple
        @dato-input="guardarTrabajo"
        labelClasses="peer-focus:text-white"
        class="w-96 p-5"
        >Trabajo:</inputsimple
      >
      <div class="blocks m-0 bg-black rounded-3xl w-96 h-fit">
        <intextarea class="text-white" @dato-area="guardarCita"
          >Cita:</intextarea
        >
        <inputsimple
          @dato-input="guardarAutor"
          labelClasses="peer-focus:text-white"
          class="w-96 mt-3 p-5"
          >Autor de la cita:</inputsimple
        >
      </div>
      <inputsimple
        @dato-input="guardarResidencia"
        labelClasses="peer-focus:text-white"
        class="w-96 mt-5 p-5"
        >Residencia:</inputsimple
      >
      <div class="flex flex-col">
        <label for="estadoCivil" class="text-left text-white ml-5 font-bold"
          >Estado civil:</label
        >
        <select
          v-model="datos.estadoCivil"
          @focus="enInput"
          class="px-3 rounded-3xl h-12 w-[22.9vw] text-black text-left font-bold placeholder-black text-lg border-0 shadow outline-none focus:outline-none focus:ring"
        >
          <option value="" class="bg-red-700 text-white">----------</option>
          <option value="1" class="bg-white text-black">Soltero</option>
          <option value="2" class="bg-white text-black">Casado</option>
          <option value="3" class="bg-white text-black">Divorciado</option>
          <option value="4" class="bg-white text-black">Separado</option>
          <option value="5" class="bg-white text-black">Union libre</option>
          <option value="6" class="bg-white text-black">Viudo</option>
        </select>
      </div>
      <inputsimple
        @dato-input="guardarEdad"
        labelClasses="peer-focus:text-white"
        class="w-96 mt-5 p-5"
        >Edad:</inputsimple
      >
    </div>
    <!--segunda columna de 2-->
    <div class="flex flex-col w-2/3 p-5 bg-gray-900">
      <intextarea class="w-full text-white" @dato-area="guardarBio"
        >Biografia:</intextarea
      >
      <div class="flex items-center justify-center">
        <div class="w-1/2 flex justify-left items-center">
          <inputsimple id="objetivos" class="text-white w-96"
            >objetivos:</inputsimple
          >
          <button
            class="bg-green-600 w-8 h-8 rounded-full"
            @click="agregarInput"
          >
            ►
          </button>
        </div>
        <div class="w-1/2 flex justify-left items-center">
          <inputsimple id="frustraciones" class="text-white w-96"
            >Frustaciones:</inputsimple
          >
          <button
            class="bg-green-600 w-8 h-8 rounded-full"
            @click="agregarFrustraciones"
          >
            ►
          </button>
        </div>
      </div>
      <!--sliders-->
      <label class="mt-16 text-white" for=""
        ><strong>Personalidad</strong></label
      >
      <slider @dato-input="enInput" @personalidad="personalidad1">
        <template v-slot:slot1>Introvertido</template>
        <template v-slot:slot2>Extrovertido</template>
      </slider>

      <br />
      <slider @dato-input="enInput" @personalidad="personalidad2">
        <template v-slot:slot1>Observador</template>
        <template v-slot:slot2>Intuitivo</template>
      </slider>
      <br />
      <slider @dato-input="enInput" @personalidad="personalidad3">
        <template v-slot:slot1>Emocional</template>
        <template v-slot:slot2>Pensador</template>
      </slider>
      <br />
      <slider @dato-input="enInput" @personalidad="personalidad4">
        <template v-slot:slot1>Cauteloso</template>
        <template v-slot:slot2>Acertivo</template>
      </slider>
      <div class="flex p-5">
        <inputsimple class="w-1/2 text-white">Motivaciones</inputsimple>
        <inputsimple class="w-1/2 text-white">Marcas</inputsimple>
      </div>
    </div>
  </div>

  <button
    class="bg-green-500 hover:bg-green-700 text-white mt-8 font-bold py-2 px-4 rounded-3xl"
    @click="submit()"
  >
    Enviar
  </button>
</template>

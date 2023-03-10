<script>
import slider from "../components/sliderInput.vue"
import inputsimple from "../components/inputsimple.vue"
import intextarea from "../components/textArea.vue"

import axios from "axios";
let API_URL = "/api/guardarPersonasUxd.php";
export default {
  components:{
    slider, inputsimple, intextarea
  },
  emits: ['personalidad','datoInput','datoArea'],
  data() {
    return {
      datos:{
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
    }
  },
  methods: {
    submit() {
      window.scrollTo(0, 0);
      this.bgColor='rgb(22 163 74)'
      this.mensaje = "Se ha guardado correctamente";
      axios
        .post(API_URL, {
          nombre: this.datos.nombre + ' ' + this.datos.apellido,
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
    guardarNombre(s){
      this.datos.nombre=s,
      console.log(this.datos.nombre)
    },
    guardarApellido(s){
      this.datos.apellido=s,
      console.log(this.datos.apellido)
    },
    personalidad1(s){
      this.datos.personalidad01=s;
      console.log(s);
    },
    personalidad2(s){
      this.datos.personalidad02=s;
      console.log(s);
    },
    personalidad3(s){
      this.datos.personalidad03=s;
      console.log(s);
    },
    personalidad4(s){
      this.datos.personalidad04=s;
      console.log(s);
    },
    agregarObjetivo() {
      if (this.nuevoItem) {
        this.datos.objetivos.push({ value: this.nuevoItem });
        this.nuevoItem = '';
      }
    },
    agregarFrustraciones() {
      if (this.nuevoItem) {
        this.datos.frustraciones.push({ value: this.nuevoItem });
        this.nuevoItem = '';
      }
    },
    guardarBio(s){
      this.datos.bio=s;
    },
    guardarAutor(s){
      this.datos.citaAutor=s;
    },
    guardarTrabajo(s){
      this.datos.trabajo=s;
    },
    guardarResidencia(s){
      this.datos.residencia=s;
    },
    guardarEdad(s){
      this.datos.edad=s;
    },
    
  },
};
</script>

<template>
  <div class="grid grid-cols-1 m-2 place-items-center">
    <div v-if="mensaje" :style="{ backgroundColor: bgColor }" class="card border border-blue-700 text-white text-center rounded-full w-2/5 mb-5 mt-5 p-6"><strong>{{ mensaje }}</strong></div>
  </div>
  
  <inputsimple @dato-input="guardarNombre" class="text-white">Nombre:</inputsimple>
  <inputsimple @dato-input="guardarApellido" class="text-white">Apellido:</inputsimple>

          <div class="blocks m-4 bg-black w-72 h-fit">
            <intextarea @dato-area="guardarCita">cita:</intextarea>
            <inputsimple @dato-input="guardarAutor" class="text-white">Autor de la cita:</inputsimple>
          </div>
          <inputsimple @dato-input="guardarTrabajo" class="text-white">Trabajo:</inputsimple>
          <inputsimple @dato-input="guardarResidencia" class="text-white">Residencia:</inputsimple>

          <select
            v-model="datos.estadoCivil" @focus="enInput"
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

          <inputsimple @dato-input="guardarEdad" class="text-white">Edad:</inputsimple>
          <intextarea @dato-area="guardarBio">Biografia</intextarea>

            <div id="objetivos">
              <inputsimple class="text-white">objetivos:</inputsimple>
            </div>
            <button @click="agregarInput">Agregar Objetivo</button>

        
            <div id="frustraciones">
              <inputsimple class="text-white">Frustaciones</inputsimple>
            </div>
            <button @click="agregarFrustraciones">Agregar Frustracion</button>

  
        <label class="mt-4 ml-10" for=""><strong>Personalidad</strong></label>
        <br />
        <slider @click="enInput" @personalidad = "personalidad1">
          <template v-slot:slot1>Introvertido</template>
          <template v-slot:slot2>Extrovertido</template>
        </slider>
        <br />
        <slider  @click="enInput" @personalidad = "personalidad2">
          <template v-slot:slot1>Observador</template>
          <template v-slot:slot2>Intuitivo</template>
        </slider>
        <br />
        <slider  @click="enInput" @personalidad = "personalidad3">
          <template v-slot:slot1>Emocional</template>
          <template v-slot:slot2>Pensador</template>
        </slider>
        <br />
        <slider  @click="enInput" @personalidad = "personalidad4">
          <template v-slot:slot1>Cauteloso</template>
          <template v-slot:slot2>Acertivo</template>
        </slider>

        <inputsimple class="text-white">Motivaciones</inputsimple>
     
        <inputsimple class="text-white">Marcas</inputsimple>
        
     
        <button
    class="bg-green-500 hover:bg-green-700 text-white mt-8 font-bold py-2 px-4 rounded"
    @click="submit()"
  >
    Enviar
  </button>
</template>

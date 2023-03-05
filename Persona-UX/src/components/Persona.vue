<script>
import iconEdad from "../components/icons/IconEdad.vue"
import axios from "axios";
let API_URL = "/api/guardarPersonasUxd.php";
export default {
  components:{
    iconEdad,
  },
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
        motivaciones: [
        {
          id: '1',
          motivacion: 'incentive',
          porcentaje: '80',
          persona_id: '1'
        },
        {
          id: '2',
          motivacion: 'fear',
          porcentaje: '30',
          persona_id: '1'
        },
        {
          id: '3',
          motivacion: 'social',
          porcentaje: '80',
          persona_id: '1'
        },
        {
          id: '4',
          motivacion: 'achievement',
          porcentaje: '75',
          persona_id: '1'
        },
        {
          id: '5',
          motivacion: 'growth',
          porcentaje: '85',
          persona_id: '1'
        }
    ],
        marcas: "",
      },
    mensajeError: ""
    }
  },
  methods: {
    submit() {
      for (let key in this.datos) {
        if (!this.datos[key]) {
          window.scrollTo(0, 0);
          this.mensajeError = "Se deben llenar todos los campos";
          return;
        }
      }
      window.scrollTo(0, 0);
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
          //motivaciones: this.datos.motivaciones,
          porcentaje: this.datos.porcentaje,
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
      this.mensajeError = "";
    },
  },
};
</script>
<template>
  <div class="grid grid-cols-1 m-2 place-items-center">
    <div v-if="mensajeError" class="card bg-red-700 border border-blue-700 text-white text-center rounded-full w-2/5 mb-5 mt-5 p-6"><strong>{{ mensajeError }}</strong></div>
  </div>
  <div class="card relative flex p-2 bg-slate-900 m-16 mt-2 mb-28">
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
            v-model="datos.nombre" @focus="enInput"
            placeholder="Nombre"
            class="pl-3 pr-3 bg-violet-900 rounded text-white text-center placeholder-white text-lg border-none shadow outline-none focus:outline-none focus:ring w-11/12 mt-8"
            type="text"
          />
          <input
            id="apellido"
            maxlength="100"
            v-model="datos.apellido" @focus="enInput"
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
              v-model="datos.cita" @focus="enInput"
            ></textarea>
            <input
              id="citaAutor"
              maxlength="500"
              v-model="datos.citaAutor" @focus="enInput"
              placeholder="Autor de la cita"
              class="pl-3 pr-3 bg-black rounded text-white text-end placeholder-white text-xs border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-0.5 mb-2"
              type="textarea"
            />
          </div>
          <input
            id="edad"
            maxlength="2"
            v-model="datos.edad" @focus="enInput"
            placeholder="Edad"
            class="pl-3 pr-3 bg-violet-900 rounded text-white text-center placeholder-white text-lg border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-6"
            type="tel"
          />
          <input
            id="residencia"
            maxlength="200"
            v-model="datos.residencia" @focus="enInput"
            placeholder="Residencia"
            class="pl-3 pr-3 bg-violet-900 rounded text-white text-center placeholder-white text-lg border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-1"
            type="text"
          />
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
          <input
            id="trabajo"
            maxlength="200"
            v-model="datos.trabajo" @focus="enInput"
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
            <div class="mt-4">
              <textarea
              placeholder="Escribe tu biografia aqui"
              class="pl-3 pr-3 bg-fuchsia-600 rounded placeholder-gray-200 text-base border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-2"
              name="bio"
              id="bio"
              cols="40"
              rows="8"
              maxlength="700"
              v-model="datos.bio" @focus="enInput"
            ></textarea>
            </div>
          </div>
        </div>
        <div class="bg-fuchsia-600 ml-2 mt-0 text-white">
          <div class="ml-4 mt-2 mb-2">
            <label for="objetivos"><strong>Objetivos</strong></label>
            <div class="mt-4">
              <textarea
              placeholder="Escribe cuales son tus motivaciones aqui"
              class="pl-3 pr-3 bg-fuchsia-600 rounded placeholder-gray-200 text-base border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-2"
              name="objetivos"
              id="bio"
              cols="40"
              rows="3"
              maxlength="300"
              v-model="datos.objetivos" @focus="enInput"
            ></textarea>
            </div>
            <label for="frustraciones"><strong>Frustraciones</strong></label>
            <div class="mt-4">
              <textarea
              placeholder="Escribe cuales son tus frustaciones aqui"
              class="pl-3 pr-3 bg-fuchsia-600 rounded placeholder-gray-200 text-base border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-2"
              name="frustraciones"
              id="bio"
              cols="40"
              rows="3"
              maxlength="300"
              v-model="datos.frustraciones" @focus="enInput"
            ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-5 m-0 text-white">
        <label class="mt-4 ml-10" for=""><strong>Personalidad</strong></label>
        <br />
        <div class="relative ml-10 mt-4 mr-10">
          <div class="grid grid-cols-3">
            <span class="text-start text-sm font-medium"
            >Introvertido</span
          >
          <span class="text-center text-sm font-medium">{{
            this.datos.personalidad01
          }}</span>
          <span class="text-end text-sm font-medium"
            >Extrovertido</span
          >
          </div>
          <input
            v-model="datos.personalidad01" @focus="enInput"
            type="range"
            min="0"
            max="100"
            set="50"
            class="w-full h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
          />
        </div>
        <br />
        <div class="relative ml-10 mt-0 mr-10">
          <div class="grid grid-cols-3">
            <span class="text-start text-sm font-medium"
            >Observador</span
          >
          <span class="text-center text-sm font-medium">{{
            this.datos.personalidad02
          }}</span>
          <span class="text-end text-sm font-medium"
            >Intuitivo</span
          >
          </div>
          <input
            v-model="datos.personalidad02" @focus="enInput"
            type="range"
            min="0"
            max="100"
            set="50"
            class="w-full h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
          />
        </div>
        <br />
        <div class="relative ml-10 mt-0 mr-10">
          <div class="grid grid-cols-3">
            <span class="text-start text-sm font-medium"
            >Emocional</span
          >
          <span class="text-center text-sm font-medium">{{
            this.datos.personalidad03
          }}</span>
          <span class="text-end text-sm font-medium"
            >Pensamiento</span
          >
          </div>
          <input
            v-model="datos.personalidad03" @focus="enInput"
            type="range"
            min="0"
            max="100"
            set="50"
            class="w-full h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
          />
        </div>
        <br />
        <div class="relative ml-10 mt-0 mb-4 mr-10">
          <div class="grid grid-cols-3">
            <span class="text-start text-sm font-medium"
            >Prospeccion</span
          >
          <span class="text-center text-sm font-medium">{{
            this.datos.personalidad04
          }}</span>
          <span class="text-end text-sm font-medium"
            >Juzgador</span
          >
          </div>
          <input
            v-model="datos.personalidad04" @focus="enInput"
            type="range"
            min="0"
            max="100"
            set="50"
            class="w-full mb-5 h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
          />
        </div>
      </div>
      <div class="grid gap-4 grid-cols-2 m-0 text-white">
        <div class="ml-6 mt-0 text-white">
          <div class="ml-4 mt-2 mb-2">
            <label for="motivaciones"><strong>Motivaciones</strong></label>
            <br />
            <div class="grid gap-2 grid-cols-5 mt-2">
              <label class="mr-8 mb-1 col-start-1 col-end-3" for="motivaciones">incentivo</label>
              <span class="col-start-3 text-center col-end-4">{{ datos.motivaciones[0].porcentaje }}</span>
              <input
                v-model="datos.motivaciones[0].porcentaje" @focus="enInput"
                type="range"
                min="0"
                max="100"
                set="30"
                class="w-4/4 h-3 col-start-4 col-span-2 rounded-lg mt-2 bg-gray-300 appearance-none focus:outline-none"
              />
              <label class="mr-8 mb-1 col-start-1 col-end-3" for="motivaciones">Miedo</label>
              <span class="col-start-3 text-center col-end-4">{{ datos.motivaciones[1].porcentaje }}</span>
              <input
                v-model="datos.motivaciones[1].porcentaje" @focus="enInput"
                type="range"
                min="0"
                max="100"
                set="30"
                class="w-4/4 h-3 col-start-4 col-span-2 rounded-lg mt-2 bg-gray-300 appearance-none focus:outline-none"
              />
              <label class="mr-8 mb-1 col-start-1 col-end-3" for="motivaciones">Social</label>
              <span class="col-start-3 text-center col-end-4">{{ datos.motivaciones[2].porcentaje }}</span>
              <input
                v-model="datos.motivaciones[2].porcentaje" @focus="enInput"
                type="range"
                min="0"
                max="100"
                set="30"
                class="w-4/4 h-3 col-start-4 col-span-2 rounded-lg mt-2 bg-gray-300 appearance-none focus:outline-none"
              />
              <label class="mr-8 mb-1 col-start-1 col-end-3" for="motivaciones">Logro</label>
              <span class="col-start-3 text-center col-end-4">{{ datos.motivaciones[3].porcentaje }}</span>
              <input
                v-model="datos.motivaciones[3].porcentaje" @focus="enInput"
                type="range"
                min="0"
                max="100"
                set="30"
                class="w-4/4 h-3 col-start-4 col-span-2 rounded-lg mt-2 bg-gray-300 appearance-none focus:outline-none"
              />
              <label class="mr-8 mb-1 col-start-1 col-end-3" for="motivaciones">Crecimiento</label>
              <span class="col-start-3 text-center col-end-4">{{ datos.motivaciones[4].porcentaje }}</span>
              <input
                v-model="datos.motivaciones[4].porcentaje" @focus="enInput"
                type="range"
                min="0"
                max="100"
                set="30"
                class="w-4/4 h-3 col-start-4 col-span-2 rounded-lg mt-2 bg-gray-300 appearance-none focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div class="ml-2 mt-0">
          <div class="ml-4 mt-2 mb-2">
            <label for="marcas"><strong>Marcas</strong></label>
            <div class="mt-4">
              <textarea
              placeholder="Escribe tus marcas aqui"
              class="pl-3 pr-3 bg-slate-900 rounded text-center placeholder-gray-200 text-base border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-2"
              name="marcas"
              id="marcas"
              cols="40"
              rows="7"
              v-model="datos.marcas" @focus="enInput"
            ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div
        class="blocks absolute left-20 top-full w-10/12 h-14 justify-center text-center"
      >
        <button
    class="bg-green-500 hover:bg-green-700 text-white mt-8 font-bold py-2 px-4 rounded"
    @click="submit()"
  >
    Enviar
  </button>
      </div>
    </div>
  </div>
</template>
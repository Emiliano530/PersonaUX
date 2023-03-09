<script>
import iconEdad from "../components/icons/IconEdad.vue"
import slider from "../components/sliderInput.vue"
import inputsimple from "../components/inputsimple.vue"

import axios from "axios";
let API_URL = "/api/guardarPersonasUxd.php";
export default {
  components:{
    iconEdad, slider, inputsimple
  },
  emits: ['personalidad','datoInput'],
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
    mensaje: "",
    bgColor: "",
    }
  },
  methods: {
    submit() {
      for (let key in this.datos) {
        if (!this.datos[key]) {
          window.scrollTo(0, 0);
          this.bgColor='rgb(220 38 38)'
          this.mensaje = "Se deben llenar todos los campos";
          return;
        }
      }
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
      this.mensaje = "";
    },
    soloNumeros(event) {
      // Permite solo números y el punto decimal
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
      } else {
        const currentValue = this.edad;
        const newValue = currentValue.concat(String.fromCharCode(charCode));
        if (newValue.length > 2) {
          event.preventDefault();
        }
      }
    },
    personalidad1(s){
      this.personalidad01=s;
      console.log(s);
    },
    personalidad2(s){
      this.personalidad02=s;
      console.log(s);
    },
    personalidad3(s){
      this.personalidad03=s;
      console.log(s);
    },
    personalidad4(s){
      this.personalidad04=s;
      console.log(s);
    },
  },
};
</script>
<template>
  <div class="grid grid-cols-1 m-2 place-items-center">
    <div v-if="mensaje" :style="{ backgroundColor: bgColor }" class="card border border-blue-700 text-white text-center rounded-full w-2/5 mb-5 mt-5 p-6"><strong>{{ mensaje }}</strong></div>
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
            id="nombre"
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
            v-model="datos.edad" @focus="enInput" @keypress="soloNumeros"
            placeholder="Edad"
            class="pl-3 pr-3 bg-violet-900 rounded text-white text-center placeholder-white text-lg border-0 shadow outline-none focus:outline-none focus:ring w-11/12 mt-6"
            type="text"
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
      <div class="pt-5 m-0 text-white"><!--aqui empieza personalidad (no moverlo)-->
        <label class="mt-4 ml-10" for=""><strong>Personalidad</strong></label>
        <br />
        <slider @click="enInput" @personalidad = "personalidad1">
          <template v-slot:slot1>gg</template>
          <template v-slot:slot2>ee</template>
        </slider>
        <br />
        <slider  @click="enInput" @personalidad = "personalidad2">
          <template v-slot:slot1>gg</template>
          <template v-slot:slot2>ee</template>
        </slider>
        <br />
        <slider  @click="enInput" @personalidad = "personalidad3">
          <template v-slot:slot1>gg</template>
          <template v-slot:slot2>ee</template>
        </slider>
        <br />
        <slider  @click="enInput" @personalidad = "personalidad4">
          <template v-slot:slot1>gg</template>
          <template v-slot:slot2>ee</template>
        </slider>
      </div> <!--hasta aqui son los slider de personalidad (no mover)-->

      <div class="grid gap-4 grid-cols-2 m-0 text-white">
        <div class="ml-6 mt-0 text-white">
          <div class="ml-4 mt-8 mb-4 pb-8 bg-blue-900"> <!--aqui empieza lo de motivaciones-->
            <label for="motivaciones"><strong>Motivaciones</strong></label>
            <br />
              <slider @click="enInput" @personalidad = "datos.motivaciones[0].porcentaje">
                <template v-slot:slot1>Incentivo</template>
              </slider>
              <slider @click="enInput" @personalidad = "datos.motivaciones[1].porcentaje">
                <template v-slot:slot1>Miedo</template>
              </slider>
              <slider @click="enInput" @personalidad = "datos.motivaciones[2].porcentaje">
                <template v-slot:slot1>Social</template>
              </slider>
              <slider @click="enInput" @personalidad = "datos.motivaciones[3].porcentaje">
                <template v-slot:slot1>Logro</template>
              </slider>
              <slider @click="enInput" @personalidad = "datos.motivaciones[4].porcentaje">
                <template v-slot:slot1>Crecimiento</template>
              </slider>
          </div> <!--hasta aqui termina las motivaciones-->
        </div>
        <div class="ml-2 mt-0">
          <div class="ml-4 mt-8 mb-2">
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

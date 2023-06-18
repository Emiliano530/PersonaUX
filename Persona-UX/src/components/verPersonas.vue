<script>
import axios from "axios";

let API_URL = '/api/getPersonasUxd.php';

export default {
  data() {
    return {
      info: [],
      personas: [],
      selectedId: null,
      dataPersona: null,
    };
  },
  mounted() {
    axios.get(API_URL).then((response) => {
      this.personas = response.data.personas;
    });
  },
  methods: {
    saveId(id) {
      this.selectedId = id;
      let personaDataURL = API_URL + '?id=' + this.selectedId;
      axios.get(personaDataURL).then((response) => {
        this.dataPersona = response.data.persona;
      });
    },
  },
};
</script>

<template>
  <ul v-for="persona in personas">
    <li>
      <button @click="saveId(persona.id)">{{ persona.nombre }}</button>
      <div v-if="dataPersona">
        <p v-for="objetivo in dataPersona.objetivos" :key="objetivo.id">{{ objetivo.objetivo }}</p>
      </div>
    </li>
  </ul>
</template>


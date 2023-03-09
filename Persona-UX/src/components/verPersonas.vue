<script>
import axios from "axios";
let API_URL = 'https://isclab.com.mx/personasuxd/getPersonasUxd.php'; ////
export default {
  data() {
    return {
      info: [],
      personas: [],
      
    };
  },
  mounted() {
    axios.get(API_URL).then((response) => {
      this.personas = response.data.personas;
    });
  },
  methods: {

  },
};
</script>

<template>
  <ul v-for="a in personas">
    <li>
      {{a.nombre}}
    </li>
  </ul>
</template>

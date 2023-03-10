<script>
export default {
  data() {
    return {
      dato: "",
    };
  },
  methods: {
    enviar() {
      this.$emit("datoArea", this.dato);
    },
  },
};
</script>

<template>
  <div>
    <label for="input" class="bg-white m-4 bg-inherit text-lg"><strong><slot></slot></strong></label>
    <textarea
              class="pl-3 pr-3 bg-inherit rounded border-2 border-white text-white text-center placeholder-white text-lg shadow outline-none focus:outline-none focus:ring w-full"
              id="textarea"
              cols="40"
              rows="3"
              maxlength="500"
              v-model="dato" @change="enviar"
            ></textarea>
  </div>
</template>

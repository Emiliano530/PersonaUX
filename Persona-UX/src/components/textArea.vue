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
  <div class="flex flex-col p-4">
    <label for="input" class="bg-transparent ml-4 mb-2 text-lg text-left"
      ><strong><slot></slot></strong
    ></label>
    <textarea
      :class="{ 'bg-white text-black': dato === '' }"
      class="px-6 bg-inherit rounded-3xl text-left border-2 border-none border-white text-white placeholder-white text-lg outline-none focus:outline-none focus:ring w-full"
      id="textarea"
      cols="40"
      rows="3"
      maxlength="500"
      v-model="dato"
      @change="enviar"
    ></textarea>
  </div>
</template>

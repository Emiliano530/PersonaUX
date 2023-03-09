<script>
export default {
  data() {
    return {
      dato: "",
    };
  },
  methods: {
    enviar() {
      this.$emit("datoInput", this.dato);
    },
  },
};
</script>

<template>
  <div>
    <input
      placeholder="Input"
      v-model="dato"
      @change="enviar"
      class="bg-inherit rounded text-white text-center placeholder-white text-lg border-none shadow outline-none focus:outline-none focus:ring w-full mb-1"
      type="text"
    />
  </div>
</template>

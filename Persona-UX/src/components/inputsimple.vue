<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dato: "",
      placeholder: "input"
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
    :placeholder="placeholder"
      maxlength="20"
      v-model="value"
      @change="enviar"
      class="pl-3 pr-3 bg-violet-900 rounded text-white text-center placeholder-white text-lg border-none shadow outline-none focus:outline-none focus:ring w-full mt-8"
      type="text"
    />
  </div>
</template>

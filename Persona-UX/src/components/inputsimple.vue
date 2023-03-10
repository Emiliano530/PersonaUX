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
<div class="relative">
    <input id="input"
      maxlength="20"
      v-model="dato"
      @change="enviar"
      type="text" class="block px-2.5 pb-2.5 pt-4 w-full text-xl text-white bg-transparent m-1 rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="input" class=" absolute text-xl text-white dark:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-transparent px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"><slot></slot></label>
</div>
</template>

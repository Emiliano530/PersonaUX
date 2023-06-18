<script>
export default {
  props: {
    labelClasses: {
      type: String,
      default: '',
    },
  },
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
<div class="relative p-4">
    <input id="input"
      maxlength="100"
      v-model="dato"
      @change="enviar"
      :class="{ 'bg-white': dato === '' }"
      type="text" class="block p-2 w-full h-12 pl-6 text-xl m-0 bg-transparent text-white rounded-3xl border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label :class="labelClasses" for="input" class="absolute font-bold text-xl ml-6 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-placeholder-shown:text-black text-white"><slot></slot></label>
</div>
</template>

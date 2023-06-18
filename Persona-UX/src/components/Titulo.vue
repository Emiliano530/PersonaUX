<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="text-white text-lg font-bold">{{ msg }}</h1>
    <h3 class="text-white text-base ">
      Revision y creacion de Personas UXD
    </h3>
  </div>
</template>

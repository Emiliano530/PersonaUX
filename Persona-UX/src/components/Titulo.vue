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
    <h1 class="text-green-800">{{ msg }}</h1>
    <h3>
      Revision y creacion de Personas UXD
    </h3>
  </div>
</template>

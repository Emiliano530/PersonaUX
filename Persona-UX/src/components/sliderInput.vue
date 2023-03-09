<script>
export default {
    
    data() {
        return {
            slider: 50,
        }
    },
    methods: {
        enviar() {
            this.$emit('Personalidad',this.slider)
        }
    }
}
</script>

<template>

    <div class="relative ml-10 mt-4 mr-10">
          <div class="grid grid-cols-3">
            <span class="text-start text-sm font-medium"
            > <slot name="slot1"></slot> </span
          >
          <span class="text-center text-sm font-medium">{{ slider }}%</span>
          <span class="text-end text-sm font-medium"
            > <slot name="slot2"></slot> </span
          >
          </div>
          <input
            v-model="slider" @change="enviar"
            type="range"
            min="0"
            max="100"
            class="w-full h-3 rounded-lg mt-4 bg-gray-300 appearance-none focus:outline-none"
          />
        </div>
</template>
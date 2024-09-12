<template>
  <h1 class="text-4xl font-bold text-green-500 mb-16">Front-Base</h1>

  <div class="mb-4">
    <span class="text-green-400 font-semibold">Testing Endpoint: </span>
    <span class="text-gray-400">http://localhost/test</span>
  </div>

  <ProgressSpinner style="width: 50px; height: 50px" stroke-width="5" v-if="loading" />
  <div v-else>
    <div class="mb-4">
      <span class="text-green-400 font-semibold">API message: </span>
      <span class="text-gray-400">{{ response?.message || 'No message available' }}</span>
    </div>

    <Button @click="testApiCall" label="Retry test"></Button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProgressSpinner from 'primevue/progressspinner'

// Definir la interfaz para la respuesta de la API
interface ApiResponse {
  message: string
}

// Variables reactivas para almacenar la respuesta y el estado de carga
const response = ref<ApiResponse | null>(null)
const status = ref<number | null>(null)
const loading = ref<Boolean>(true)

const testApiCall = async () => {
  loading.value = true
  try {
    response.value = await $fetch('http://localhost/test')
  } catch (error) {
    console.error('Error en la solicitud:', error)
  } finally {
    loading.value = false // Ocultar el spinner cuando la respuesta llega
  }
}
onMounted(() => {
  testApiCall()
})
</script>

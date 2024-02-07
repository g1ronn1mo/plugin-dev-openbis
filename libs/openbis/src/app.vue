<script setup>
import { useOpenBisStore } from '@/src/composabels/openbisAPI.ts'
import LoginForm from './'
import  Test from './'

const store = useOpenBisStore()
const showLoginForm = ref(!store.isLoggedIn)

watch(() => store.isLoggedIn, (newVal) => {
  if (newVal)
    showLoginForm.value = false
})

onMounted(async () => {
  await store.loadV3API()
})
</script>

<template>
  <div>
    <LoginForm v-if="showLoginForm" />
    <NuxtLayout v-else>
      <TheNavbar />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
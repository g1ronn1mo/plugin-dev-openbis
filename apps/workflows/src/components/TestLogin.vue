<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(async () => {
  await useOpenBisStore().loadV3API()
  // await useOpenBisStore().fetchSpaces()
})
</script>

<template>
  <div>V3ConnectionExampleUsingESMBundle</div>
  <!-- <div>Number of spaces: {{ useOpenBisStore.spaces?[0] }}</div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AutocompleteSpaces from '@/components/APIComponents/AutocompleteSpaces.vue';
const MINDESCLENGTH = 20;

// The type for modelValue is inferred as Object. However, it would be better to have a more specific type.
// From your template, it seems like it should be something like this:
export interface ProjectContext {
  UUID: string;
  space: string | null;
  name: string | null;
  contactPerson: string | null;
  manager: string | null;
  description: string | null;
}
const { modelValue } = defineModels<{ modelValue: ProjectContext }>();

// data from the API
const people = ref<string[]>([]);
</script>

<template>
  <div>
    <AutocompleteSpaces v-model="modelValue.space" />
    <v-text-field
      v-model="modelValue.name"
      label="New Project Name"
      :rules="[(value) => !!value || 'Item is required']"
    />

    <v-autocomplete
      v-model="modelValue.contactPerson"
      :items="people"
      label="Contact Person"
    />

    <v-autocomplete
      v-model="modelValue.manager"
      :items="people"
      label="Project Manager"
    />

    <v-textarea
      v-model="modelValue.description"
      :counter="2000"
      label="Description"
      :rules="[
        (value) => !!value || 'Item is required',
        (value) =>
          (value && value.length >= MINDESCLENGTH) ||
          'Item must be at least 20 characters',
      ]"
    />
  </div>
  Iside projectContext.vue
  <pre>{{ modelValue }}</pre>
</template>

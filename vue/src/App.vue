<script setup>
import { inject, ref } from 'vue';
import { resourceKey, loadingKey } from "./glue/keys";
import usePage from "./glue/composable/usePage";

const resource = inject(resourceKey);
const type = ref(null);
const loading = inject(loadingKey);
const { pageType } = usePage(resource);
</script>

<template>
  <component :is="pageType" />
  <p v-if="loading">Loading...</p>
</template>

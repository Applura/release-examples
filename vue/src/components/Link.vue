<script setup>
import { inject } from 'vue';
import { followKey } from "../glue/keys";
defineProps({
  link: Object,
})
const follow = inject(followKey);
</script>
<template>
  <a @click.prevent="follow(link.href)" :href="link.href" title="link.title" :class="[link.active ? 'is-active' : '']">
    {{ link.title }}
  </a>
</template>

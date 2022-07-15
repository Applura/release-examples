<script setup>
import Link from "./Link.vue";
defineProps({
  items: Array,
});
</script>
<template>
  <nav>
    <ul>
      <li v-for="item in items" :key="item.id">
        <Link :link="item" />
      </li>
    </ul>
  </nav>
</template>

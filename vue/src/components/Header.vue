<script setup>
import { inject } from 'vue';
import Menu from './Menu.vue';
import useMenu from '../glue/composable/useMenu';
import { resourceKey } from "../glue/keys";

const resource = inject(resourceKey);
const { items } = useMenu(resource);

</script>
<template>
  <header>
    <slot></slot>
    <Menu :items="items" />
  </header>
</template>

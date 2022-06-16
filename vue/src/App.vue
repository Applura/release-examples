<script setup>
import { inject } from 'vue';
import { resourceKey, problemKey, loadingKey, followKey } from "./glue/keys";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
const resource = inject(resourceKey);
const loading = inject(loadingKey);
const follow = inject(followKey);
function home() {
  follow({ href: '/' });
}
function about() {
  follow({ href: '/about' });
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <h1 v-if="loading">Loading...</h1>
  <ul>
    <li>
    <button @click="home">Home</button>
    </li>
    <li>
      <button @click="about">About</button>
    </li>
  </ul>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

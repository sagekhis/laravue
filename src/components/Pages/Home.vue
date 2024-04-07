<template>
  <Header/>
  <div class="flex justify-center bg-gray-400">
    <div class="grid grid-cols-3 gap-3">
      <Card v-for="index in 3" :key="index" :index="index"/>
    </div>
  </div>
</template>

<script>
import Card from '../card.vue';
import product from "./Contact.vue";
import Header from "../header.vue";
export default {
  components: {
    Header,
    Card,product
  },
};
</script>

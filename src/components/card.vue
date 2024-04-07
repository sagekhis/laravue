<template>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 relative w-52">
      <img alt="Placeholder Image" class="w-full" src="https://via.placeholder.com/150">
      <div
          class="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity flex items-center justify-center mb-20">
        <p class="text-white text-lg">مشاهده</p>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold">{{ title }}</h3>
        <p class="text-sm">{{ description }}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    product:Object,
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    title() {
      return `کارت ${this.index}`;
    },
    description() {
      return `توضیحات کارت ${this.index}.`;
    },
  },
};
</script>

<style scoped>
div {
  direction: rtl;
}
</style>

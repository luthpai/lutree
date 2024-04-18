<script setup>
const props = defineProps(['name', 'to', 'customClass', 'icon', 'smallText'])
</script>

<template>
  <a :href="props.to" target="_blank" :class="props.customClass">
    <v-icon :name="props.icon" scale="1.6" />
    <span class="a-name">{{ props.name }}</span>
    <span v-if="props.smallText" class="small-text">{{ props.smallText }}</span>
  </a>
</template>

<style lang="scss" scoped>
a {
  @apply py-2
      flex 
      gap-1
      justify-center 
      items-center 
      w-[270px]
      rounded-lg 
      shadow-md 
      text-[22px]
      font-semibold
      opacity-[0.90]
      text-gray-100
      relative

      md:text-[26px]
      md:w-[420px];

  transition: all 0.3s;

  &:hover {
    @apply text-white
      opacity-100

      w-[290px]
      md:w-[440px]
      py-2;

    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  &:active {
    @apply scale-95;
  }

  .small-text {
    @apply text-[12px] md:text-[16px] ml-2 text-gray-500 absolute top-1 right-3;
  }
}
</style>

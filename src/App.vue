<script setup>
import Link from '@/components/Link.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <main>
    <h1 class="animate__animated animate__fadeIn">Luthpai</h1>
    <div id="buttonList">
      <Link
        name="Instagram"
        to="https://instagram.com/luthpai"
        custom-class="bg-gradient-to-r from-violet-600 via-pink-600 to-orange-600 animate__animated animate__fadeIn"
        icon="si-instagram"
      />
      <Link
        name="GitHub"
        to="https://github.com/luthpai"
        custom-class="bg-[#3D4451] animate__animated animate__fadeIn"
        icon="si-github"
        small-text="(luthpai)"
      />
      <Link
        name="WhatsApp"
        to="https://wa.me/+6283853321044"
        custom-class="bg-[#28B13D] animate__animated animate__fadeIn"
        icon="si-whatsapp"
      />
      <Link
        name="Dev"
        to="https://dev.to/luthpai"
        custom-class="bg-red-500 animate__animated animate__fadeIn"
        icon="si-devdotto"
      />
      <Link
        name="GitHub"
        to="https://github.com/luthpi"
        custom-class="bg-[#3D4451] animate__animated animate__fadeIn"
        icon="si-github"
        small-text="(luthpi)"
      />
    </div>
  </main>
  <Footer />
</template>

<style lang="stylus">
*::selection
  @apply bg-transparent text-white

body
  @apply bg-gradient-to-b from-blue-800 via-blue-700 to-purple-700 overflow-x-hidden

main
  @apply flex h-screen gap-2 flex-col items-center justify-center gap-5

#buttonList
  @apply w-full flex flex-col gap-2 items-center box-border

h1
  @apply text-6xl font-extrabold font-sans text-pink-300
</style>

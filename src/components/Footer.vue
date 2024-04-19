<template>
  <footer>Copyright &copy; {{ new Date().getFullYear() }} - Luthfi Afriansyah</footer>
</template>

<style lang="scss">
footer {
  @apply
    w-full 
    flex 
    justify-center 
    text-white
    bg-transparent
    backdrop-blur-sm
    py-1 
    font-[14px];
}
</style>

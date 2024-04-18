<template>
    <footer>
        Copyright &copy; {{ new Date().getFullYear() }} - Luthfi Afriansyah
    </footer>
</template>

<style lang="scss">
footer {
    @apply 
        fixed
        bottom-0 
        w-full 
        flex 
        justify-center 
        text-pink-300 
        bg-purple-900 py-2 
        font-[16px]
    ;
}
</style>
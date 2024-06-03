<script setup>
import Main from './Main.vue';
import LogoVue from './Logo/Logo.vue';
import MenuVue from './components/Menu.vue';
</script>

<template>
    <div class="space-y-2">
        <div class="flex justify-center items-center h-[100px]">
            <logo-vue></logo-vue>
        </div>
        <div class="grid-container">
            <div class="col-span-3">
                <div class="m-2 ">
                    <menu-vue></menu-vue>
                </div>
            </div>
            <div class="col-span-9"></div>
        </div>
    </div>
</template>

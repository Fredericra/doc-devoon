<script setup>
import Main from './Main.vue';
import LogoVue from './Logo/Logo.vue';
import MenuVue from './components/Menu.vue';
</script>

<template>
    <div class="space-y-2 bg-gradient-to-tr from-indigo-600 to-orange-400">
        <div class="flex justify-center items-center h-[100px]">
            <logo-vue></logo-vue>
        </div>
        <div class="grid-container">
            <div class="col-span-3">
                <div class="m-2 ">
                    <menu-vue></menu-vue>
                </div>
            </div>
            <div class="col-span-9 min-h-screen  border-white border-l-2 border-t-2 rounded-t-full relative duration-1000">
                <router-view class=" "></router-view>
            </div>
        </div>
    </div>
</template>

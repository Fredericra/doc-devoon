<template>
    <div class="space-y-4">
        <div class="h1">
            <p>File</p>
        </div>
        <div class="">
            <div class="grid grid-cols-12">
                <div class="space-y-4 col-start- col-span-8">
                    <div class="" v-for="(value,index) in File" :key="index">
                        <div class="text-left">
                            <p class="text-indigo-950 underline font-mono mx-2 text-[28px]">
                                {{ value.dirname }} 
                            </p>
                        </div>
                        <div class="py-2">
                            <div v-for="(valuefile,indexfile) in value.file" :key="indexfile" >
                                <div class="text-left text-purple-950">
                                    <p class="indent-12 underline text-[22px]">
                                        {{ valuefile.filename }}
                                    </p>
                                    <p class="text-sm indent-20">
                                        {{  valuefile.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import File from "../components/file.json";
</script>
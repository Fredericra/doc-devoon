<template>
    <div class="space-y-4 h-full mx-20">
        <div class="py-2">
            <div class="text-center h1">
                <p class="">
                    Console
                </p>
            </div>
        </div>
        <div>
            <div v-for="(value,index) in Console" :key="index">
                <div class="py-2 text-left">
                    <p class="text-[25px] underline">
                       > {{ value.title }}
                    </p>
                </div>
                <div class="py-2 space-y-4">
                    <div class="space-y-4 mx-20" v-if="value.cmd.length!==0">
                        <div v-for="(valuecmd,indexcmd) in value.cmd" :key="indexcmd">
                            <div class="">
                                <p class="indent-12">
                                    {{ valuecmd.text }}
                                </p>
                            </div>
                            <div class="w-full px-4 bg-gray-400 h-[52px] rounded-md py-1 shadow-lg relative" v-if="valuecmd.tags.length===0">
                                <button
                                    class="absolute right-0 text-sm float-left px-2 mx-2 rounded-md hover:shadow-lg bg-black text-white"
                                    @click="textCopy">copy</button>
                                <div class="absolute bottom-0">
                                    <p class="font-mono" id="copy" ref="message">
                                        > php devoon {{ valuecmd.commande }}
                                    </p>
                                </div>
                            </div>
                            <div class="space-y-4" v-else>
                                <div class="" v-for="(valueTags,indexTags) in valuecmd.tags" :key="indexTags">
                                    <div class="w-full px-4 bg-gray-400 h-[52px] rounded-md py-1 shadow-lg relative">
                                        <button
                                            class="absolute right-0 text-sm float-left px-2 mx-2 rounded-md hover:shadow-lg bg-black text-white"
                                            @click="textCopy">copy</button>
                                        <div class="absolute bottom-0">
                                            <p class="font-mono" id="copy" ref="message">
                                                > php devoon {{ valuecmd.commande }} {{ valueTags }}
                                            </p>
                                        </div>
                                    </div>
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
import Console from "../components/console.json"
</script>
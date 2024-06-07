<template>
    <div>
        <div class="h1 text-left">
            <p class="">Installation</p>
        </div>
        <div class="py-4">
            <div>
                <div class="w-1/3 px-4 bg-gray-400 h-[52px] rounded-md py-1 shadow-lg relative">
                    <button
                        class="absolute right-0 text-sm float-left px-2 mx-2 rounded-md hover:shadow-lg bg-black text-white"
                        @click="textCopy">copy</button>
                    <p class="font-mono absolute bottom-0" id="copy" ref="message">
                        > git clone https://github.com/
                    </p>
                </div>
            </div>
        </div>
        <div class="py-4">
            <div class="h1 text-left">
                <p>Start Application</p>
            </div>
            <div>
                <div class="w-1/3 px-4 bg-gray-400 h-[52px] rounded-md py-1 shadow-lg relative">
                    <button
                        class="absolute right-0 text-sm float-left px-2 mx-2 rounded-md hover:shadow-lg bg-black text-white"
                        @click="textCopy">copy</button>
                    <div class="absolute bottom-0">
                        <p class="font-mono" id="copy" ref="message">
                            > php devoon serve

                        </p>
                        <p class="font-mono" id="copy" ref="message">
                            > php devoon serve:port
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-4">
            <div class="h1 text-left">
                <p>Database start</p>
            </div>
            <div>
                <div class="w-1/3 px-4 bg-gray-400 h-[52px] rounded-md py-1 shadow-lg relative">
                    <button
                        class="absolute right-0 text-sm float-left px-2 mx-2 rounded-md hover:shadow-lg bg-black text-white"
                        @click="textCopy">copy</button>
                    <div class="absolute bottom-0">
                        <p class="font-mono" id="copy" ref="message">
                            > php devoon db:up or db:refresh

                        </p>
                        <p class="font-mono" id="copy" ref="message">
                            > php devoon db:update
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref()
const textCopy = () => {
    const storage = document.createElement("textarea")
    storage.value = message._value.innerText;
    storage.select()
    storage.setSelectionRange(0, 99999)
    document.execCommand("copy")
};
</script>
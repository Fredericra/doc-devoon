<template>
    <div class="space-y-4">
        <div class="h1">
            <p class="text-center">FILE STORAGE</p>
        </div>
        <div class="grid grid-cols-12">
            <div class=" col-span-8">
                <div class="mx-4 text-left underline">
                    <p class="text-purple-950 py-2 text-[28px]">Upload Image</p>
                </div>
                <div class="">
                    <div>
                        <div class="w-full px-4 bg-gray-400 h-[52px] rounded-md py-1 shadow-lg relative">
                            <button
                                class="absolute right-0 text-sm float-left px-2 mx-2 rounded-md hover:shadow-lg bg-black text-white"
                                @click="textCopy">copy</button>
                            <div class="absolute bottom-0">
                                <p class="font-mono" id="copy" ref="message">
                                    > Storage::Share("DirName")->Move("img.png");
        
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-12">
            <div class=" col-span-8">
                <div class="mx-4 text-left underline">
                    <p class="text-purple-950 py-2 text-[28px]">Delete Image</p>
                </div>
                <div class="">
                    <div>
                        <div class="w-full px-4 bg-gray-400 h-[52px] rounded-md py-1 shadow-lg relative">
                            <button
                                class="absolute right-0 text-sm float-left px-2 mx-2 rounded-md hover:shadow-lg bg-black text-white"
                                @click="textCopy">copy</button>
                            <div class="absolute bottom-0">
                                <p class="font-mono" id="copy" ref="message">
                                    > Storage::Share("DirName")->Delete("img.png");
        
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
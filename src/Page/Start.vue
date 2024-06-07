<template>
    <div>
        <div class="grid grid-cols-12">
            <div class="col-start-2 col-span-8">
                <div class="text-center">
                    <p class="text-[32px] font-bold text-white">DEVOON PHP CODE</p>
                </div>
                <div class="space-y-4">
                    <p class=" indent-8 font-thin text-[18px]">
                        The <span class="underline text-orange-900">devoon framework is</span> is a ligthweight and flexible framework PHP MVC (model-view-controller) framework designed to streamline web application devlopments.

                    </p>
                    <p class="indent-8 font-thin text-[18px]">
                        Build with simplicity and performance in mind, this framework aims to provide developers with a robust structure while maintaining the flexiblility to adapt to
                        various projects needs.
                    </p>
                </div>
                <div class="py-4 mx-4">
                    <div>
                        <ul class="space-y-4">
                            <li v-for="(value,index) in Mvc" :key="index" class=" list-disc space-x-3 ">
                                <span class="font-bold text-purple-950">
                                    {{ value.title }}
                                </span>
                                <span class="text-indigo-950">
                                    {{ value.soustitle }}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    import Mvc from "../components/mvc.json"
  
</script>
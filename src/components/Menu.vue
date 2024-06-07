<script setup>
import { ref } from "vue"
import MenuJson from "./Menu.json";
import { routerKey } from "vue-router";

const hiddenIindex= ref()
const hidden = ref(false)

function HiddenAction(index, action,boolValue){
hiddenIindex.value = index;
if(boolValue)
{
  hidden.value=!hidden.value

}
}
</script>
<template>
    <div>
        <div class="mx-2 ">
          <div v-for="(value,index) in MenuJson " :key="index" class="space-y-5 text-white">
            <div class="py-1" v-if="value.menu.length===0">
                <router-link :to="{ name:value.routerName }" class="hover:font-bold hover:underline hover:ml-2 duration-200" :class="index===hiddenIindex?'font-bold text-indigo-800 underline duration-1000':''" @click="HiddenAction(index,value,false)">
                    {{ value.name }}
                </router-link>
            </div>
            <div v-else>
              <div>
                <button class="hover:font-bold hover:underline hover:ml-2 duration-200" :class="index===hiddenIindex?'font-bold text-indigo-800 underline duration-1000':''" @click="HiddenAction(index,value,true)" >
                 {{ value.name }}
                </button>
              </div>
              <div :class="hidden && hiddenIindex===index?'scale-y-100 h-full py-2':'h-0 scale-y-0'" class="duration-300 origin-top-left ">
                <ul class=" mx-4 ">
                  <li v-for="(item,indexKey) in value.menu" :key="indexKey">
                      <router-link :to="{name:item.route}" class="">{{ item.item }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
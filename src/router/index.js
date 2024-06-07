import { createRouter, createWebHistory } from "vue-router";

import StartVue from "../Page/Start.vue"
import installation from "../Page/Installation.vue"
import Mvc from "../Page/Mvc.vue";
import Databases from "../Page/Database.vue";
import Pagenoutfounds from "../Page/FoutNotPage.vue";
import Relationship from "../Page/DatabaseRelation.vue";
import DirectoryStructures from "../Page/DirStructure.vue";
import Console from "../Page/Console.vue";
import File from "../Page/File.vue";
import Config from "../Page/Config.vue";
import WebApp from "../Page/WebApp.vue";
import Apirest from "../Page/Apirest.vue";
import Provider from "../Page/Provider.vue";
import Public from "../Page/Public.vue";
import Models from "../Page/Model.vue";
import Controllers from "../Page/Controle.vue";
import Views from "../Page/View.vue";
import FileStorage from "../Page/FileStorage.vue";
const routes = [
    {
        path:"/",
        name:"Home",
        component: StartVue,
    },
    {
        path:"/installation",
        name:"installation",
        component: installation,
    },
    {
        path:"/mvc-structures",
        name:"mvc",
        component:Mvc
    },
    {
        path:"/Databases",
        name:"databases",
        component: Databases
    },
    {
        path:"/:matches(.*)",
        name:"pagenoutfounds",
        component: Pagenoutfounds
    },
    {
        path:"/Relationships",
        name:"relationships",
        component: Relationship
    },
    {
        path:"/directoryStructures",
        name:"directoryStructures",
        component: DirectoryStructures
    },
    {
        path:"/console",
        name:"console",
        component: Console
    },
    {
        path:"/File",
        name:"File",
        component: File
    },
    {
        path:"/Provider",
        name:"Provider",
        component: Provider
    },
    {
        path:"/Configuration",
        name:"Configuration",
        component: Config
    },
    {
        path:"/WebApplication",
        name:"WebApplication",
        component: WebApp
    },
    {
        path:"/Public",
        name:"Public",
        component: Public
    },
    {
        path:"/ApiRest",
        name:"ApiRest",
        component: Apirest
    },
    {
        path:"/Controllers",
        name:"Controllers",
        component: Controllers
    },
    {
        path:"/Models",
        name:"Models",
        component: Models
    },
    {
        path:"/Views-models",
        name:"Views",
        component: Views
    },
    {
        path:"/FileStorage",
        name:"FileStorage",
        component: FileStorage
    }
   
]
const router = new createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
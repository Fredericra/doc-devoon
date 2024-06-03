import { createRouter,createWebHistory} from "vue-router";


import HomeVue from "../Page/Home.vue";
import Mvc from "../Page/Mvc.vue";
import FoutNotPage from "../Page/FoutNotPage.vue";
const routes = [
    {
        path: "/",
        component: HomeVue
        // component: () => import("../Page/Home.vue")
    },
    {
        path: "/mvc",
        component: Mvc
        // component: () => import("../Page/Mvc.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        component: FoutNotPage
        // component: () => import("../Page/FoutNotPage.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
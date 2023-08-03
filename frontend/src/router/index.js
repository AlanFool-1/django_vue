import {createWebHistory, createRouter} from "vue-router";
import Home from "@/views/HomeView.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";
import LoginView from "@/views/LoginView";
import UserCenter from "@/views/UserCenter";
import ArticleCreate from "@/views/ArticleCreate";
import ArticleEdit from "@/views/ArticleEdit";


const routes = [
    {
        path: "/",
        name: "HomeView",
        component: Home,
    },
    {
        path: "/article/:id",
        name: "ArticleDetail",
        component: ArticleDetail,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView,
    },
    {
        path: "/user/:username",
        name: "UserCenter",
        component: UserCenter
    },
    {
    path: "/article/create",
    name: "ArticleCreate",
    component: ArticleCreate
    },
    {
    path: "/article/edit/:id",
    name: "ArticleEdit",
    component: ArticleEdit
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
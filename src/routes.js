import TheHome from "./components/TheHome.vue"
import SignUp from "./components/SignUp.vue"
import TheLogin from "./components/TheLogin.vue"
import AddRes from "./components/AddRes.vue"
import UpdateRes from "./components/UpdateRes.vue"

export default [
    {
        name: "TheHome",
        path: "/",
        component: TheHome
    },
    {
        name: "SignUp",
        path: "/sign-up",
        component: SignUp
    },
    {
        name: "TheLogin",
        path: "/login",
        component: TheLogin
    },
    {
        name: "AddRes",
        path: "/addres",
        component: AddRes
    },
    {
        name: "UpdateRes",
        path: "/updateres/:id",
        component: UpdateRes
    }
]
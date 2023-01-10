<template>
    <div>
        <div class="logo">
            <img src="../assets/images/lion-img.png" alt="">
        </div>
        <h1>Login page</h1>
        <form action="">
            <div class="input-wrap">
                <input type="email" id="email" placeholder="Enter email" v-model="email">
            </div>
            <div class="input-wrap">
                <input type="password" id="password" placeholder="Enter password" v-model="password">
            </div>
            <div class="action-btn">
                <button @click.prevent="login">Login</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "TheLogin",
    data() {
        return {
            email: "",
            password: ""

        }
    },
    methods: {
        async login() {
            let APIdata = await this.$http.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
            console.log(APIdata)

            if (APIdata.status == 200 && APIdata.body.length>0) {
                localStorage.setItem("user-info", JSON.stringify(APIdata.body[0]));
                this.$router.push({ name: "TheHome" })
            }
        }
    },
    mounted() {
        let localdata = localStorage.getItem("user-info")
        if (localdata) {
            this.$router.push("/")
        }
    }
}
</script>
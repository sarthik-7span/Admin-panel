<template>
    <div>
        <div class="logo">
            <img src="../assets/images/lion-img.png" alt="">
        </div>
        <h1>Sign Up</h1>
        <form action="">
            <div class="input-wrap">
                <input type="text" id="username" placeholder="Enter Username" v-model="username">
            </div>
            <div class="input-wrap">
                <input type="email" id="email" placeholder="Enter email" v-model="email">
            </div>
            <div class="input-wrap">
                <input type="password" id="password" placeholder="Enter password" v-model="password">
            </div>
            <div class="action-btn">
                <button @click.prevent="signup">SignUp</button>
            </div>
            <p><router-link to="/login">Login</router-link></p>
        </form>
    </div>
</template>
<script>
export default {
    name: "SignUp",
    data() {
        return {
            username: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async signup() {
            let SignData = await this.$http.post("http://localhost:3000/user", {
                username: this.username,
                email: this.email,
                password: this.password
            })
            console.log(SignData.body)
            if (SignData.status===201) {
                localStorage.setItem("user-info", JSON.stringify(SignData.body));
                this.$router.push({ name: "TheHome" })
            }
        }
    },
    mounted() {
        let x = localStorage.getItem("user-info");
        if (x) {
            this.$router.push({ name: "TheHome" })
        }
    }
}
</script>
<style>

</style>
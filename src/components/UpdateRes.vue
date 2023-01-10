<template>
    <div>
        <TheHeader/>
        <h1>hello welcom to Update Resturent page</h1>
        <form action="" class="add">
            <input type="text" placeholder="Enter Name" v-model="restaurant.name">
        
            <input type="text" placeholder="Enter Address" v-model="restaurant.address">
            <input type="text" placeholder="Enter Contact" v-model="restaurant.contact">
            <button @click.prevent="update">Update Restaurant</button>
        </form>
    </div>
</template>
<script>
import TheHeader from "./TheHeader.vue";
export default {
    name: "UpdateRes",
    data() {
        return {
            restaurant: {
                name: "",
                address: "",
                contact: ""
            }
        }
    },
    components: {
        TheHeader
    },
    async mounted() {
        let x = localStorage.getItem("user-info");
        if (!x) {
            this.$router.push({ name: "SignUp" })
        }
        let pram = this.$route.params.id
        let update = await this.$http.get("http://localhost:3000/restaurant/" + pram)
        this.restaurant = update.body
    },
    methods: {
        async update() {
            let pram = this.$route.params.id
            const updated = await this.$http.put(`http://localhost:3000/restaurant/${pram}`, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            })
            if (updated.status == 200) {
                this.$router.push("/")
            }
        }
    }
}
</script>
<style>
.name{
    font-size: 50px;
    color: purple;
}
</style>
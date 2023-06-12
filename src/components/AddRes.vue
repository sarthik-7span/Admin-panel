<template>
    <div>
        <TheHeader />
        <h1>hello welcom to Add Resturent page</h1>
        <form action="" class="add">
            <input type="text" placeholder="Enter Name" v-model="restaurant.name">

            <input type="text" placeholder="Enter Address" v-model="restaurant.address">
            <input type="text" placeholder="Enter Contact" v-model="restaurant.contact">
            <h1>{{ restaurant.name }}</h1>
            <button @click.prevent="addres">Add    Restaurant</button>
        </form>
    </div>
</template>
<script>
import TheHeader from "./TheHeader.vue";
export default {
    name: "AddRes",
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
    mounted() {
        let x = localStorage.getItem("user-info");
        if (!x) {
            this.$router.push({ name: "SignUp" })
        }
    },
    methods: {
       async addres() {
            let addresto= await this.$http.post("http://localhost:3000/restaurant", {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            })
            if (addresto.status == 201) {
                this.$router.push("/")
            }
        }
    }
}
</script>
<style>
.name {
    font-size: 50px;
    color: purple;
}
</style>
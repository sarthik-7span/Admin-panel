<template>
    <div>
        <TheHeader />
        <h1> Home page</h1>
        <h2 class="name"><b>{{ name }}</b></h2>
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Update List button</th>
            </tr>
            <tr v-for="item in restaurants" :key="item">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.contact }}</td>
                <td>
                    <router-link :to="'/updateres/' + item.id">Update</router-link>
                    <button @click="deleteRes(item.id)">delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import TheHeader from "./TheHeader.vue";
export default {
    name: "TheHome",
    data() {
        return {
            name: "",
            restaurants: []
        }
    },
    components: {
        TheHeader
    },
    mounted() {
        this.loaddata()
    },
    methods: {
        async deleteRes(x) {
            let result = await this.$http.delete("http://localhost:3000/restaurant/" + x)
            if (result.status == 200) {
                this.loaddata()
            }
        },
        async loaddata() {
            let x = localStorage.getItem("user-info");
            if (!x) {
                this.$router.push({ name: "SignUp" })
            }
            this.name = JSON.parse(x).username;

            let result = await this.$http.get("http://localhost:3000/restaurant")
            this.restaurants = result.body
        }
    }
}
</script>
<style>
.name {
    font-size: 50px;
    color: red;
}

table,
tr,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
}

th,
td {
    padding: 10px 20px;
}
</style>
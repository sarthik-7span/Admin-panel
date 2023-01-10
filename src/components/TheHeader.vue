<template>
    <nav class="nav">
        <router-link to="/">
            Home
        </router-link>
        <router-link to="/addres">
            Add resturent
        </router-link>
        <router-link to="/updateres">
            Update resturent
        </router-link>
        <a @click="remove">
            logout
        </a>
    </nav>
</template>
<script>
export default {
    name: "TheHeader",
    methods: {
        remove() {
            localStorage.clear("user-info")
            this.$router.push("/login")
        }
    }
}
</script>
<style>
.nav {
    display: flex;
    justify-content: flex-start;
    background: #ff4e00;
}

.nav a{
    padding: 10px 20px;
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: 600;
}

.nav a:hover {
    background-color: black;

}
</style>
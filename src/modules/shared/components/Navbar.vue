<template>
    <div>
        <router-link class="btn" to="/">Pokemon List</router-link>
        <router-link class="btn" to="/id">Pokemon por Id</router-link>
        <router-link class="btn" to="/about">About</router-link>
    </div>
</template>

<style scoped>

div{
    padding: 0 30px;
}
div a{
    font-weight: bold;
    color: #2c3e50;
    margin: 0 3px;
}
a{
    text-decoration: none;
}
.btn {
    background-color: #e7e7e7; /* 008CBA, 4CAF50 */
    border: none;
    color: black;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    border-radius: 8px;
}

.btn:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
div .router-link-exact-active{
    color: #42b983;
}
</style>
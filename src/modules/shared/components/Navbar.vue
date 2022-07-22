<template>
    <div>
        <!--<router-link class="btn" :to="{name: 'home'}">Pokemon List</router-link>
        <router-link class="btn" :to="{name: 'pokemon-id', params: {id: 10}}">Pokemon por Id</router-link>
        <router-link class="btn" :to="{name: 'about'}">About</router-link>-->
        <CustomLink
            v-for="link in links"
            :key="link.to"
            :link="link"
        />
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'

export default {
    data(){
        return {
            links: [
                {to: 'pokemon-home',    name: 'Pokemons'},
                {to: 'pokemon-id',      name: 'Por Id', id: 15},
                {to: 'pokemon-about',   name: 'About'},

                {to: 'dbz-characters',   name: 'Personajes'},
                {to: 'dbz-about',   name: 'DBZ - About'},

                {to: 'https://google.com', name: 'Google'},
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent(()=>import('./CustomLink.vue'))
    }
}
</script>
<style scoped>

div{
    padding: 0 30px;
}
div a{
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}
a {
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
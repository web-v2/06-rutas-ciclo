<template>
  <div>
    <a v-if="isExternalLink"
    target="_blank"
    class="normal-link"   
    :href="link.to">{{ link.name }}</a>

    <router-link v-else :to="route" v-slot="{isActive}">
        <a :class=" isActive ? 'is-active' : 'normal-link' ">{{ link.name }}</a>
    </router-link>

  </div>
</template>

<script>
export default {
    props:{
        link: {
            type: Object,
            required: true
        }
    },
    computed:{
        isExternalLink(){
            return this.link.to.startsWith('http')
        },
        route(){
            return this.link.to === undefined
                ? { name: this.link.to }
                : { name: this.link.to, params: { id: this.link.id }}
        }
    }
}
</script>

<style scoped>
.is-active {
    color: #42b983;
}
.normal-link {
    color: #c6c5c5;
}
div{
    padding: 0 30px;
}
div a{
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;    
    justify-content: center;
}
a {
    text-decoration: none;
}
</style>
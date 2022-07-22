<template>
    <div>
        <h1>Pokemon Page: <span>#{{id}}</span></h1>
        <div class="container">
            <div v-if="pokemon">
                <img :src="pokemon.sprites.other.dream_world.front_default" :alt="pokemon.name" :title="pokemon.name">                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data(){
        return {
            //idPkm: null
            pokemon: null
        }
    },
    created(){
        //const { id } = this.$route.params
        //console.log(id);
        //this.idPkm = id;
        //const n = Math.floor(Math.random()*560)
        this.getPokemon()
    },
    methods:{
        async getPokemon(){
            try {
                const pkm = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(r => r.json())
                //console.log(pkm.sprites.other.dream_world.front_default);
                //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.Id}.svg
                this.pokemon = pkm                
            } catch (error) {
                this.$root.push('/')
                console.log('Error, usuario redireccionado!');
            }
        }
    },
    watch: {
        id(){
            this.getPokemon();
        }
    }
}
</script>
<style scoped>
.container {
  padding: 4px 16px;
}
</style>
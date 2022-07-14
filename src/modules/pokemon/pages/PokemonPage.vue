<template>
    <div>
        <h1>Pokemon Page: <span>#{{id}}</span></h1>
        <div v-if="pokemon">
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
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
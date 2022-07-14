<template>
    <div>
        <h1>About Page</h1>
        <hr>
        <!--<h2>{{name}}</h2>-->
        <button @click="onChangeName">Cambiar Nombre</button>
    </div>
</template>

<script>
    export default {

        data(){
            return {
                name: 'SamirV2'
            }
        },
        methods:{
            onChangeName(){
                console.log('Se cambia en el nombre');
                this.name = 'Sara V2'
            } 
        },
        beforeCreate(){
            console.log('beforeCreate')
        },
        created(){
            console.log('created')
            //Peticiones HTTP
        },
        beforeMount(){
            console.log('beforeMount')
        },
        mounted(){
            console.log('mounted')
        },
        beforeUpdate(){
            console.log('beforeUpdate')
        },
        updated(){
            console.log('updated')
        },
        activated(){
            console.log('activated')
        },
        desactivated(){
            console.log('desactivated')
        },
        beforeUnmount(){
            console.log('beforeUnmount')
        },
        unmounted(){
            console.log('unmounted')
        },
        errorCaptured(){
            console.log('errorCaptured')
        },
        renderTracked(){
            console.log('renderTracked')
        },
        renderTriggered(){
            console.log('renderTriggered')
        }
    }
</script>
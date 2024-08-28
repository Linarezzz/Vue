<!-- 1. Template -->
<template>
  <div class="My_component">
        <!-- Componentes -->
        <!-- <h1>{{ message }}</h1> -->

        <!-- directivas -->
        <h1 v-if="isVisible">{{ message }}</h1>
        <button v-on:click="$event=>isVisible =!isVisible">Cambiar directiva</button>

        <!-- Metodo -->
        <button v-on:click="toggleVisibility">Cambiar metodo</button>

        <!-- Vmodel -->
        <input v-model="message" type="text" />

        <!-- Evento -->
        <button @click="sayHello">Alerta</button>
  </div>
</template>


<!-- 2. Script -->
<script>
export default {
    name: "My_component",
    data() {
        return {
            message: "Hola mundo",
            isVisible: true
        };
    },
    methods:{
        toggleVisibility(){
            this.isVisible = !this.isVisible
        },
        sayHello(){
            alert('Hello');
        }
    
    },

};
</script>

<!-- 3. Style -->
<style>

</style>


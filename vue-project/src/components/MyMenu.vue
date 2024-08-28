<!-- 1. Template -->
<template>
  <div class="MyMenu text-center">
    <div v-if="isVisible">
      <h1 class="text-white">Menú</h1>
      <ul>
        <li>
          <button class="nav-link active text-white">Inicio</button>
        </li>
        <li>
          <button class="nav-link active text-white" @click="cambiarFormulario">
            Persona
          </button>
        </li>
        <li>
          <button class="nav-link active text-white" @click="cambiarGrupo">
            Grupo
          </button>
        </li>
      </ul>
    </div>
    <div v-else="isVisible" class="border border-white">
      <h2>Formulario de registro</h2>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<!-- 2. Script -->
<script>
export default {
  name: "MyMenu",
  data() {
    return {
      message: "Hola mundo",
      isVisible: true,
    };
  },
  methods: {
    cambiarFormulario() {
      this.isVisible = !this.isVisible;
    },
    enviarinfo() {
       alert('Persona registrada con exito')
       this.isVisible = this.isVisible 
    }
  },
};
</script>

<!-- 3. Style -->
<style></style>

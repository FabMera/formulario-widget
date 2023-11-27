<template>
    <h2 class="text-center m-2 p-3">Formulario de Desarrollador</h2>
    <Formulario
        @formulario-enviado="procesarForm"
        :postulante="postulante"
      
    />
</template>

<script>
import Formulario from "./components/Formulario.vue";
import { v4 as id } from "uuid";
import { mapActions } from "vuex";
export default {
    name: "App",
    data() {
        return {
            postulante: {
                id: "",
                nombre: "",
                apellido: "",
                email: "",
                profesion: "",
                experiencia: 0,
                especialidades: [],
                tecnologias: [],
                modalidad: "",
            },
        };
    },
    components: {
        Formulario,
    },
    methods: {
        ...mapActions(["cargarPostulantes", "resetFormulario"]),
        procesarForm() {
            this.postulante.id = id();
            this.cargarPostulantes(this.postulante);
            this.resetFormulario();
        },

    },
};
</script>
<style>
body {
    background-color: #e0e7e4;
}
</style>

<template>
    <Form v-slot="{ resetForm }" @submit="enviarFormulario(resetForm)">
        <div class="row">
            <div
                class="p-4 bg-white mt-4 col-12 col-lg-6 mx-auto border shadow rounded"
            >
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <Field
                        v-model="postulante.nombre"
                        name="nombre"
                        type="text"
                        class="form-control"
                        id="nombre"
                        placeholder="Escribe tu nombre"
                        :rules="isRequired"
                    />
                </div>
                <ErrorMessage :name="'nombre'" v-slot="{ message }">
                    <div class="text-danger">{{ message }}</div>
                </ErrorMessage>
                <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido</label>
                    <Field
                        v-model="postulante.apellido"
                        type="text"
                        class="form-control"
                        id="apellido"
                        placeholder="Escribe tu apellido"
                        :rules="isRequired"
                        name="apellido"
                    />
                </div>
                <ErrorMessage :name="'apellido'" v-slot="{ message }">
                    <div class="text-danger">{{ message }}</div>
                </ErrorMessage>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <Field
                        v-model="postulante.email"
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Escribe tu email"
                        :rules="isRequired"
                        name="email"
                    />
                </div>
                <ErrorMessage :name="'email'" v-slot="{ message }">
                    <div class="text-danger">{{ message }}</div>
                </ErrorMessage>
                <div class="mb-3">
                    <label for="profesion" class="form-label"
                        >Profesion y/o Título</label
                    >
                    <Field
                        v-model="postulante.profesion"
                        type="text"
                        class="form-control"
                        id="profesion"
                        placeholder="Escribe tu profesion y/o titulo"
                        :rules="isRequired"
                        name="profesion"
                    />
                </div>
                <ErrorMessage
                    :name="'profesion'"
                    class="invalid-feedback"
                    v-slot="{ message }"
                >
                    <div class="text-danger">{{ message }}</div>
                </ErrorMessage>
                <div class="mb-3">
                    <label for="años" class="form-label"
                        >Años de Experiencia</label
                    >
                    <Field
                        v-model.number="postulante.experiencia"
                        type="number"
                        class="form-control"
                        id="años"
                        :rules="isRequired"
                        name="experiencia"
                    />
                    <ErrorMessage
                        :name="'experiencia'"
                        class="text-danger"
                        v-slot="{ message }"
                    >
                        <div class="text-danger">{{ message }}</div>
                    </ErrorMessage>
                </div>
                <div>
                    <label class="form-label"
                        >Elige tu especialidad,puedes chequear ambas:</label
                    >
                </div>
                <div class="mb-3 form-check">
                    <Field
                        v-model="postulante.especialidades"
                        type="checkbox"
                        value="frontend"
                        class="form-check-input"
                        name="especialidades"
                        :rules="checkOne"
                    />
                    <label class="form-check-label">Front End</label>
                </div>
                <div class="mb-3 form-check">
                    <Field
                        v-model="postulante.especialidades"
                        type="checkbox"
                        value="backend"
                        class="form-check-input"
                        name="especialidades"
                        :rules="checkOne"
                    />
                    <label class="form-check-label">Back End</label>
                </div>
                <ErrorMessage :name="'especialidades'" v-slot="{ message }">
                    <div class="text-danger">{{ message }}</div>
                </ErrorMessage>

                <div class="row">
                    <div>
                        <label class="form-label"
                            >Selecciona las tecnologias que utilizas:</label
                        >
                    </div>
                    <div class="col">
                        <div class="mb-3 form-check">
                            <Field
                                v-model="postulante.tecnologias"
                                type="checkbox"
                                value="java"
                                class="form-check-input"
                                :rules="checkOne"
                                name="tecnologias"
                            />
                            <label class="form-check-label">Java</label>
                        </div>
                        <div class="mb-3 form-check">
                            <Field
                                v-model="postulante.tecnologias"
                                type="checkbox"
                                value="javascript"
                                class="form-check-input"
                                :rules="checkOne"
                                name="tecnologias"
                            />
                            <label class="form-check-label">Javascript</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="mb-3 form-check">
                            <Field
                                v-model="postulante.tecnologias"
                                type="checkbox"
                                value="react js"
                                class="form-check-input"
                                name="tecnologias"
                                :rules="checkOne"
                            />
                            <label class="form-check-label">React JS</label>
                        </div>
                        <div class="mb-3 form-check">
                            <Field
                                v-model="postulante.tecnologias"
                                type="checkbox"
                                value="vue js"
                                class="form-check-input"
                                name="tecnologias"
                                :rules="checkOne"
                            />
                            <label class="form-check-label">Vue JS</label>
                        </div>
                    </div>
                    <ErrorMessage :name="'tecnologias'" v-slot="{ message }">
                        <div>
                            <div class="text-danger">{{ message }}</div>
                        </div>
                    </ErrorMessage>
                </div>

                <label class="form-label">Elige tu modalidad de trabajo:</label>
                <div class="mt-2">
                    <div class="form-check form-check-inline">
                        <Field
                            class="form-check-input"
                            type="radio"
                            value="freelance"
                            name="modalidad"
                            :rules="checkOne"
                        />
                        <label class="form-check-label">FreeLance</label>
                    </div>
                </div>
                <div class="mt-2">
                    <div class="form-check form-check-inline mb-3">
                        <Field
                            class="form-check-input"
                            type="radio"
                            value="tiempo completo"
                            name="modalidad"
                            :rules="checkOne"
                        />
                        <label class="form-check-label">Tiempo Completo</label>
                    </div>
                </div>
                <ErrorMessage :name="'modalidad'" v-slot="{ message }">
                    <div class="text-danger">{{ message }}</div>
                </ErrorMessage>

                <button type="submit" class="btn btn-primary col-12">
                    Enviar Formulario
                </button>
            </div>
        </div>
    </Form>
</template>

<script>
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";

export default {
    name: "Formulario",
    created() {
        defineRule('checkOne', (value) => {
            if (!value || value.length === 0) {
                return "Debes seleccionar al menos una opción";
            }
            return true;
        });
    },
    data() {
        return {
            isRequired: (value) => {
                if (!value || value.length === 0) {
                    return "Este campo es requerido";
                }
                return true;
            },
        };
    },
    components: {
        Field,
        ErrorMessage,
        Form,
    },
    props: {
        postulante: {
            type: Object,
            required: true,
        },
    },
    methods: {
        enviarFormulario(resetForm) {
            this.$emit("formulario-enviado");
            resetForm();
        },
    },
};
</script>

<style lang="scss" scoped></style>

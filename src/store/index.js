import { createStore } from 'vuex'
import instance from '@/api/axios_create'


export default createStore({
    state: {
        postulantes: [],
        postulante: {
            id: "",
            nombre: '',
            apellido: '',
            email: '',
            profesion: '',
            experiencia: 0,
            especialidades: [],
            tecnologias: [],
            modalidad: '',
        },
    },
    getters: {
    },
    mutations: {
        agregarPostulante(state, payload) {
            state.postulantes.push(payload)
        },
        setPostulante(state, payload) {
            state.postulante = payload
        },
        resetFormulario(state){
            Object.assign(state,postulante)
        }
    },
    actions: {
        async cargarPostulantes({ commit }, postulante) {
            try {
                const res = await instance.post('/postulantes', postulante)
                console.log(res)
                commit('agregarPostulante', res.data.postulante)
            } catch (error) {
                console.log(error)
            }
        },
        async mostrarPostulantes({ commit }) {
            try {
                const res = await instance.get('/postulantes')
                console.log(res)
                commit('setPostulante', res.data.postulante)
            } catch (error) {
                console.log(error)
            }
        },
        resetFormularioPostulante({commit}){
            commit('resetFormulario')
        }


    },
    modules: {
    }
})

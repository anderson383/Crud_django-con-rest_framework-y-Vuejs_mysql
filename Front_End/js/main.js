








new Vue({
    el:'#app',
    data:{
        guardar:false,
        actualizar: false,
        name:'skere',
        usuarios: [],
        usuario:{nombre:null,apellido:null,correo:null}
    },
    methods:{
        getUsuarios(){
            this.$http.get('http://127.0.0.1:8000/api/users/all')
            .then((response)=>{
                this.usuarios = response.data
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        addUsuario(){
            this.$http.post('http://127.0.0.1:8000/api/users/all',this.usuario)
            .then((response)=>{
                this.usuarios = response.data
                this.getUsuarios()
            })
            .catch((error)=>{
                console.log(error);
            })
        },
        getUsuario(id){
            this.$http.get(`http://127.0.0.1:8000/api/modifi/all/${id}/`)
            .then((response)=>{
                this.usuario = response.data
                
            })
            .catch((response)=>{
                console.log(response);
            })
        },
        updateUsuario(event){
            
            this.$http.put(`http://127.0.0.1:8000/api/modifi/all/${this.usuario.id}/`,this.usuario)
            .then((response)=>{
                console.log(response)
                this.getUsuarios()
            })
            .then((error)=>{
                console.log(error);
            })
            event.preventDefault()
            
        },
        deleteUser(){
            this.$http.delete(`http://127.0.0.1:8000/api/modifi/all/${this.usuario.id}/`)
            .then((response)=>{
                console.log(response)
                this.getUsuarios()
            })
            .then((error)=>{
                console.log(error);
            })
        }
    },
    mounted(){
        this.getUsuarios()
    }
})
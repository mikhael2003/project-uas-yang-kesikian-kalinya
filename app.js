let vm = new Vue({
    el: '#app',
    data: function () {
        return {
            dataResto: null,
            loading: true,
            error: false,


            nama: null,
            alamat: null
        }
    },
    methods: {
        viewResto: function() {
            axios 
            .get('https://test-api-blond.vercel.app/resto')
            .then(Response => {
                console.log(Response);
                this.Resto = Response.data
            })
        },
        saveResto: function () {
            let data = {
                nama: this.nama,
                alamat: this.alamat,

                status: true,
            }

            axios
                .post('https://test-api-blond.vercel.app/resto/')
                .then(Response => {
                    this.viewResto();
                    
                })
                .catch(err => {
                    console.log(err);
                })
        },

        getResto: function () {
            axios
                .get('https://test-api-blond.vercel.app/resto')
                .then((response) => {
                    console.log(response.data);
                    this.dataResto = response.data
                    this.getResto()
                }).catch(err => {
                    console.log(err);
                    this.error = true
                })
                .finally(() => (this.loading = false))
        },



        deleteResto: function (id) {
            axios
                .delete('https://test-api-blond.vercel.app/resto/' + id)
                .then(Response => {
                    this.viewResto();
                   
                }) 
               
                .catch(error => {
                    console.log(error);
                })
        }
    },

    mounted() {
        axios
        .get('https://test-api-blond.vercel.app/resto/')
        .then(Response => {
            console.log(Response);
            this.dataResto = Response.data
        })
    }
})
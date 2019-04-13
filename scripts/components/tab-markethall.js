Vue.component('tab-markethall',{
    template:'#tabmarkethall',
    data() {
        return {
            commodities:[],
            cities:[],
            cityselected:'Aalborg'
        }
    },
    created: function () {
        this.$http.get('http://localhost:8080/commodities')
            .then(response => {
                response.json().then(data => {
                    this.commodities = data
                })
            }, response => {
            })
        this.$http.get('http://localhost:8080/cities')
            .then(response => {
                response.json().then(data => {
                    this.cities = data
                })
            }, response => {
            })
    },
    methods:{
        save: function(event){
            console.log(this.commodities)
        }
    }
})
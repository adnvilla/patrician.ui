
Vue.component('tab-cities', {
    template: '#citiestemplate',
    data: function () {
        return {
            cities: []
        }
    },
    created: function () {
        this.$http.get('http://localhost:8080/cities')
            .then(response => {
                response.json().then(data => {
                    this.cities = data
                })
            }, response => {
            })
    },
})

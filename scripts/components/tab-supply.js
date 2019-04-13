
Vue.component('tab-supply', {
    template: '#tabsupply',
    data() {
        return {
            cities: [],
            cityfromselected: '',
            citytoselected: '',
            supply: []
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
    methods: {
        onChangeCitySelected: function (event) {
            if (this.cityfromselected === '') {
                return
            }

            if (this.citytoselected === '') {
                return
            }

            this.$http.get('http://localhost:8080/city/' + this.citytoselected + '/supply/' + this.cityfromselected)
                .then(response => {
                    response.json().then(data => {
                        this.supply = data
                    })
                }, response => {
                })

        },
    }
})
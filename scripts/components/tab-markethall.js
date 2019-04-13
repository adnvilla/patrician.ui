Vue.component('tab-markethall', {
    template: '#tabmarkethall',
    data() {
        return {
            commodities: [],
            cities: [],
            cityselected: ''
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
        save: function (event) {
            r = Object.keys(this.commodities).map((key) => {
                return {
                    name: this.commodities[key].Name,
                    buy: this.commodities[key].Buy,
                    sell: this.commodities[key].Sell,
                    production: this.commodities[key].Production,
                    consumption: this.commodities[key].Consumption,
                }
            })
            this.$http.post('http://localhost:8080/city/' + this.cityselected + '/commodities', {
                commodities: r
            }).then(response => {
            }, response => {
            })
        },
        onChangeCitySelected: function (event) {
            if (this.cityselected === '') {
                return
            }

            this.$http.get('http://localhost:8080/city/' + this.cityselected + '/commodities')
                .then(response => {
                    response.json().then(data => {
                        this.commodities = data
                    })
                }, response => {
                })
        }
    }
})

Vue.component('tab-distances', {
    template: '#tabdistances',
    data() {
        return {
            cities:[],
            distances: [],
            citiesdistances: [],
            cityselected: ''
        }
    },
    created: function () {
        this.$http.get('http://localhost:8080/distances')
            .then(response => {
                response.json().then(data => {
                    this.citiesdistances = data
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
    methods: {
        onChangeCitySelected: function (event) {
            this.distances = Object.keys(this.citiesdistances).filter((key) => {
                return key === this.cityselected
            }).reduce((obj, key) => {
                obj[key] = this.citiesdistances[key]
                return obj[key]
            }, {})
        }
    }
})
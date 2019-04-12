Vue.component('city-card', {
    props: ['city'],
    template: '#cityCard'
})

Vue.component('tab-distances', {
    template: '<div>Distances component</div>'
})

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

new Vue({
    el: '#app',
    data: {
        currentTab: 'cities',
        tabs: ['cities', 'distances']
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    }
})




Vue.component('tabs', {
    template: '#tabstemplate',
    data() {
        return {
            currentTab: 'cities',
            tabs: ['cities', 'distances']
        }
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    }
})
new Vue({
    el: '#app',
    data: {
        debug: false,
        apiUrl: 'http://localhost:5000/Club/',
        id: 324456,
        users: [],
        factor: 1000,
        kms: [0, 0, 0, 0]
    },
    created: function () {
        // (c) Tanguy Busschaert
        this.$http.get(this.apiUrl + this.id).then(response => {
            var km = response.data.data.distance / 1000;
            this.kms = km.toString().split(".")[0].split("");
            if (this.kms.length === 3) this.kms.unshift("0");
        });
    }
});
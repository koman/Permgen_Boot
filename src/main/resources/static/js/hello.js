angular.module('hello', [])
        .controller('home', function ($http) {
            var self = this;
            $http.get('/resource')
                .success(function (data) {
                    self.greeting = data;
                })
                .error(function() {
                    self.greeting = {id:'666', content: 'Bad'};
                });
        });
(function() {
    'use strict';

    angular
        .module('app')
        .controller('TomatoExerciseThreeController', TomatoExerciseThreeController);
    
    TomatoExerciseThreeController.$inject = [
        '$scope', 'restService', '$q'
    ];

    function TomatoExerciseThreeController($scope, restService, $q) {
        var vm = this;

        activate();

        function activate() {
            $q.all([
                getExerciseThreeData()
            ]).then(activateComplete);

            function activateComplete(results) {
                vm.data = results[0];
                vm.formattedData = formatData(vm.data)
                vm.sumTomatoes = sumTomatoesByCountry(vm.data);
            }
        }

        function getExerciseThreeData() {
            return restService.getExerciseThreeData().then(function(response) {
                return response;
            });
        }

        function formatData(data) {
            var countries = data[0].countries;
            var tomatoes = data[1].tomatoes;
            var statuses = data[2].statuses;
            var orders = data[3].orders;
            return _.chain(orders)
                .forEach(function(order) {
                    order.Countries = _.find(countries, ['ID', order.Countries.ID]);
                    order.Tomato = _.find(tomatoes, ['ID', order.Tomato.ID]);
                    order.Status = _.find(statuses, ['ID', order.Status.ID])
                })
                .groupBy('Countries.Title')
                .value();
        }

        function sumTomatoesByCountry(data) {
            var countries = data[0].countries;
            var orders = data[3].orders;
            var totals = {};
            
            _.map(countries, function(country){
                totals[country.Title] = 0;
            });

            _.chain(orders)
                .groupBy('Countries.Title')
                .forEach(function(country){
                    _.reduce(country, function(order, value, key){
                        totals[value.Countries.Title] += value.Qty;
                    }, {});
                })
            .value();
            return totals;
        }
    }
})();

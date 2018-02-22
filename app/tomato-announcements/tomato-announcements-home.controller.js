(function() {
    'use strict';

    angular
        .module('app')
        .controller('TomatoAnnouncementsHomeController', TomatoAnnouncementsHomeController);
    
    TomatoAnnouncementsHomeController.$inject = [
        '$scope', 'restService', '$q', 'tomatoAnnouncementsFeedService'
    ];

    function TomatoAnnouncementsHomeController($scope, restService, $q, tomatoAnnouncementsFeedService) {
        var vm = this;
        vm.loading = false;
        vm.types = [];

        $q.all([
            getAnnouncements(),
            getAnnouncementOwners()
        ]).then(activateComplete);

        function activateComplete(results) {
            var formattedData = tomatoAnnouncementsFeedService.formatData(results[0]);
            vm.announcements = tomatoAnnouncementsFeedService.mapOwnerstoAnnouncements(formattedData, results[1]);
            getTypes(results[0]);
            vm.loading = false;
        }

        function getAnnouncements() {
            return restService.getAnnouncements().then(function(announcements) {
                return announcements;
            });
        }

        function getAnnouncementOwners() {
            return restService.getAnnouncementOwners().then(function(owners) {
                return owners;
            });
       }

        function getTypes(data) {
           vm.types = _.keys(_.groupBy(data, 'Type.Title'));
        } 
        
    }
})();

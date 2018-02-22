(function() {
	"use strict";

	angular
		.module("app")
		.factory("tomatoAnnouncementsFeedService", tomatoAnnouncementsFeedService);

	tomatoAnnouncementsFeedService.$inject = ["restService"];

	function tomatoAnnouncementsFeedService(restService) {
		var service = {
            mapOwnerstoAnnouncements: mapOwnerstoAnnouncements,
            formatData: formatData
		};

		return service;

        function mapOwnerstoAnnouncements(announcements, owners) {
            return _.forEach(announcements, function(announcement){
                announcement.Owner = _.find(owners, ['ID', announcement.OwnerID]);
            });
        }

        function formatData(data) {
            return _.forEach(data, function(announcement) {
                announcement.Date = {
                    'displayDate': moment(announcement.Date).format('MMM. Do, YYYY'), 
                    'orderDate': moment(announcement.Date).format('YYYY-MM-DD')
                };
            });
        }
	}
})();
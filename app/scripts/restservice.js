'use strict';


angular.module('RESTService', [])
  .controller('NewsController', function (NewsModel) {

  var newsdashboard = this;
  function getNews() {
    NewsModel.all().then(function(result) {
      newsdashboard.news = result.data;
      console.log(newsdashboard.news);
    })
  }

  newsdashboard.data = [];
  getNews();
})
  .constant('ENDPOINT_URI', 'http://localhost:8080/api/news')
  .service('NewsModel', function ($http, ENDPOINT_URI) {

    var service = this;
    var path = 'getNews/';

    function getUrl() {
      return ENDPOINT_URI + path;
    }

    service.all = function () {
      return $http.get(getUrl());
    }_

    service.create = function (news) {
      return $http.post(getUrl(), news);
    }
  })
;

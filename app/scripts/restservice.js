'use strict';

var path = '';

angular.module('RESTService', [])
  .controller('NewsController', function(NewsModel) {

  var newsdashboard = this;
  function getNews() {
    path = 'getNews/';
    NewsModel.all().then(function(result) {
      newsdashboard.news = result.data;
      console.log(newsdashboard.news);
    });
  }

  newsdashboard.data = [];
  getNews();
})
  .controller('NewsDisplayController', function ($scope, $routeParams, NewsModel) {

    //var displaydash = this;
    var newsId = $routeParams.id;

    function getNewsById() {
      path = 'getNewsById'+newsId;
      NewsModel.getNewsById().then(function (result) {
        //displaydash.news = result.data;
        $scope.news = result.data;
        console.log($scope.news);
      });
    }
  })
  .controller('CommentController', function ($scope, $routeParams, NewsModel) {

    var newsId = $routeParams.id;
    path = 'getCommentsByNewsId/'+newsId;

    NewsModel.getCommentById().then(function (result) {
      $scope.comments = result.data;
      console.log($scope.comments);
    });
  })

  .constant('ENDPOINT_URI', 'http://localhost:8080/api/news')
  .service('NewsModel', function ($http, ENDPOINT_URI) {

    var service = this;

    function getUrl() {
      return ENDPOINT_URI + path;
    }

    service.all = function () {
      return $http.get(getUrl());
    };

    service.getNewsById = function(){
      return $http.get(getUrl());
    };

    service.create = function (news) {
      return $http.post(getUrl(), news);
    };
  });

/**
 * Created by Steven on 10/19/2014.
 */

var tg = angular.module("texasgooner", ['ui.router']);

tg.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html'
        })

        .state('articles', {
            url: '/articles',
            templateUrl: 'app/articles/articles.html'
        });
});
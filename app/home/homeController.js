/**
 * Created by Steven on 10/19/2014.
 */

tg.controller('homeController', ['$scope', function($scope) {
    $scope.articles = [
        {
            "title": "An Article Title",
            "Content": "Article Content Article Content Article Content Article Content Article Content"
        },
        {
            "title": "An Article Title 2",
            "Content": "Article Content 2 Article Content 2 Article Content 2 Article Content 2 Article Content 2"
        }
    ];
}]);
var angularTodo = angular.module('angularTodo', []);

angularTodo.controller('angularTodoC', ['$scope', function ($scope) {
    // define list of items
    $scope.completionStatus = 'pending';

    $scope.items = [
        'learn how to use JQuery',
        'build a website',
        'Become a Web Developer'
    ];

    // Write code to push new item

    $scope.submitNewItem = function () {
        $scope.items.push($scope.input);
        $scope.input = "";
    };

    // Write code to complete item
    $scope.completeItem = function (index) {
        $scope.items[index].completionStatus = 'completed';
        console.log("completed");


    };

    // Write code to delete item

    $scope.deleteItem = function (index) {
        $scope.items.splice(index, 1);

    };
}]);
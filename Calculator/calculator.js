var calculatorApp = angular.module('calculatorApp', []);

calculatorObject = {
    result: 0,
    operation: "",
    left: 0,
    currentOperand: 0,
    right: 0,
    currentDisplay: "",
};


calculatorApp.controller('calculatorController', ['$scope', function ($scope) {

    $scope.calculator = calculatorObject;
    $scope.displayObj = {display : ""};

    $scope.numBtn = function(nextNumber) {
        calculatorObject.currentOperand += nextNumber;
        $scope.displayObj.display += nextNumber;
    };

    $scope.opBtn = function(op) {
        if(op === 'C'){
            reset();
        } else if (op === '='){
            calculate();
        } else setOperation(op);
    };
    reset = function() {
        calculatorObject.result = 0;
        calculatorObject.operation = "";
        calculatorObject.currentOperand = 0;
        calculatorObject.currentDisplay = "" ;
        calculatorObject.left = 0;
        calculatorObject.right = 0;
    };

     setOperation = function(op) {
        calculatorObject.operation = op;
        if(calculatorObject.currentOperand === "0") {
            $scope.displayObj.display += "0";
        }
        calculatorObject.left = calculatorObject.currentOperand;

         $scope.displayObj.display = calculatorObject.left + " " + calculatorObject.operation + " ";
        calculatorObject.currentOperand = 0;
    };
    calculate = function() {
        calculatorObject.right += calculatorObject.currentOperand;

        switch (calculatorObject.operation) {
            case "+":
                calculatorObject.result = (calculatorObject.left + calculatorObject.right);
                break;
            case "-":
                calculatorObject.result = (calculatorObject.left - calculatorObject.right);
                break;
            case "*":
                calculatorObject.result = (calculatorObject.left * calculatorObject.right);
                break;
            case "/":
                calculatorObject.result = (calculatorObject.left / calculatorObject.right);
                break;
        }
        $scope.displayObj.display = calculatorObject.result;
    };
}]);
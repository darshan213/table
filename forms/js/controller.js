var app = angular.module('costBreakdownApp', []);
app.controller('costCtrl', function($scope, $http) {
    $scope.CompanyName = "Nav Exports";
    
    $scope.ConversionUSDToINR = 65;
    $scope.Granule_Cost_KG = 0;
    $scope.Frieght_Cost_KG = 0;
    $scope.Excise_Duty_KG = 0;
    $scope.Granule_Cost_LB = $scope.Granule_Cost_KG * $scope.ConversionUSDToINR;
    $scope.Frieght_Cost_LB = $scope.Frieght_Cost_KG * $scope.ConversionUSDToINR;
    $scope.Excise_Duty_LB = $scope.Excise_Duty_KG * $scope.ConversionUSDToINR;
    
    
    function getRandomVal(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});

var app = angular.module('costBreakdownApp', []);
app.controller('costCtrl', function($scope, $http) {
    $scope.CompanyName = "Nav Exports";
    
    $scope.ConversionUSDToINR = 65;
    $scope.Granule_Cost_KG = 0;
    $scope.Frieght_Cost_KG = 0;
    $scope.Excise_Duty_KG = 0;
    $scope.Total_KG = $scope.Granule_Cost_KG + $scope.Frieght_Cost_KG + $scope.Excise_Duty_KG;
    
    
    function getRandomVal(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});

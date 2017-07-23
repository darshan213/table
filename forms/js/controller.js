var app = angular.module('costBreakdownApp', []);
app.controller('costCtrl', function($scope, $http) {
    $scope.CompanyName = "Nav Exports";
    
    $scope.ConversionRate = 65;
    $scope.ConversionLBtoKG = 2.20462;
    $scope.rate_perLB_USD_input = 0.40;
    $scope.Frieght_INR_input = 150000;
    $scope.Excise_Duty_input = 22;
    $scope.Advance_input = 30;
    $scope.itemName_input = "Plastic Granule";
    $scope.itemGrade_input = "LDPE";
    $scope.MeltIndex_input = "6.5 MFI";
    $scope.Qty_Available_LB_input = 46848;
    
    $scope.generateReport = function() {
        $scope.itemName =  $scope.itemName_input;
        $scope.itemGrade =  $scope.itemGrade_input;
        $scope.itemMeltIndex =  $scope.MeltIndex_input;
        $scope.itemAvailableQty_LB =  $scope.Qty_Available_LB_input;
        $scope.itemAvailableQty_KG =  $scope.Qty_Available_LB_input/$scope.ConversionLBtoKG;
        $scope.RatePerLB_USD = $scope.rate_perLB_USD_input;
        $scope.RatePerLB_INR = $scope.rate_perLB_USD_input * $scope.ConversionRate;
        $scope.RatePerKG_USD = $scope.rate_perLB_USD_input * $scope.ConversionLBtoKG;
        $scope.RatePerKG_INR = $scope.RatePerKG_USD * $scope.ConversionRate;
        $scope.Frieght_USD = $scope.Frieght_INR_input / $scope.ConversionRate;
        $scope.Frieght_INR = $scope.Frieght_INR_input;
    }
    function getRandomVal(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});

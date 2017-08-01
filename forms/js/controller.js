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
        $scope.itemAvailableQty_KG = $scope.Qty_Available_LB_input/$scope.ConversionLBtoKG;
        $scope.RatePerLB_USD = $scope.rate_perLB_USD_input;
        $scope.RatePerLB_INR = $scope.rate_perLB_USD_input * $scope.ConversionRate;
        $scope.RatePerKG_USD = $scope.rate_perLB_USD_input * $scope.ConversionLBtoKG;
        $scope.RatePerKG_INR = $scope.RatePerKG_USD * $scope.ConversionRate;
        $scope.Frieght_USD = $scope.Frieght_INR_input / $scope.ConversionRate;
        $scope.Frieght_INR = $scope.Frieght_INR_input;
        $scope.Granule_Cost_USD = $scope.RatePerKG_USD;
        $scope.Granule_Cost_INR = $scope.RatePerKG_INR;
        $scope.Frieght_Cost_USD = $scope.Frieght_USD / $scope.itemAvailableQty_KG;
        $scope.Frieght_Cost_INR = $scope.Frieght_INR / $scope.itemAvailableQty_KG;
        $scope.Excise_Duty_USD = $scope.RatePerKG_USD * $scope.Excise_Duty_input;
        $scope.Excise_Duty_INR = $scope.RatePerKG_INR * $scope.Excise_Duty_input;
        $scope.Total_KG_USD = $scope.Granule_Cost_USD + $scope.Frieght_Cost_USD + $scope.Excise_Duty_USD;
        $scope.Total_KG_INR = $scope.Granule_Cost_INR + $scope.Frieght_Cost_INR + $scope.Excise_Duty_INR;
        $scope.Granule_Cost_USD_LB = $scope.RatePerLB_USD;
        $scope.Granule_Cost_INR_LB = $scope.RatePerLB_INR;
        $scope.Frieght_Cost_USD_LB = $scope.Frieght_USD / $scope.itemAvailableQty_LB;
        $scope.Frieght_Cost_INR_LB = $scope.Frieght_INR / $scope.itemAvailableQty_LB;
        $scope.Excise_Duty_USD_LB = $scope.RatePerLB_USD * $scope.Excise_Duty_input;
        $scope.Excise_Duty_INR_LB = $scope.RatePerLB_INR * $scope.Excise_Duty_input;
        $scope.Total_KG_USD_LB = $scope.Granule_Cost_USD_LB + $scope.Frieght_Cost_USD_LB + $scope.Excise_Duty_USD_LB;
        $scope.Total_KG_INR_LB = $scope.Granule_Cost_INR_LB + $scope.Frieght_Cost_INR_LB + $scope.Excise_Duty_INR_LB;
        $scope.Granule_Cost_USD_Total = $scope.Qty_Available_LB_input * $scope.rate_perLB_USD_input;
        $scope.Granule_Cost_INR_Total = $scope.Qty_Available_LB_input * $scope.RatePerLB_INR;
        $scope.Frieght_Cost_USD_Total = $scope.Frieght_USD;
        $scope.Frieght_Cost_INR_Total = $scope.Frieght_INR;
        $scope.Excise_Duty_USD_Total = $scope.Granule_Cost_USD_Total * $scope.rate_perLB_USD_input;
        $scope.Excise_Duty_INR_Total = $scope.Granule_Cost_INR_Total * $scope.rate_perLB_USD_input;
        $scope.Total_KG_USD_Total = $scope.Granule_Cost_USD_Total + $scope.Frieght_Cost_USD_Total + $scope.Excise_Duty_USD_Total;
        $scope.Total_KG_INR_Total = $scope.Granule_Cost_INR_Total + $scope.Frieght_Cost_INR_Total + $scope.Excise_Duty_INR_Total;
        $scope.Advance_USD = $scope.Granule_Cost_USD_Total * $scope.Advance_input;
        $scope.Advance_INR = $scope.Granule_Cost_INR_Total * $scope.Advance_input;
        $scope.After_Loading_USD = $scope.Granule_Cost_USD_Total - $scope.Advance_USD;
        $scope.After_Loading_INR = $scope.Granule_Cost_INR_Total - $scope.Advance_INR;
    }
    function getRandomVal(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});

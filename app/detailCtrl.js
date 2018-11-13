/**
 * Created by praveen.guntoju on 3/15/2017.
 */
app.controller('detailCtrl', function($scope,$http, $location,$rootScope,$route) {
    debugger;
    $scope.displayDetail = true;
    $scope.$parent.editBtn = true;



    $scope.$on('editDetails', function (event, args) {
        debugger;
        if(args.action == 'edit'){
            $scope.action = args.action;
            $scope.displayDetail = false;
            $scope.$parent.displayBtn = true;
            $scope.$parent.editBtn = false;
            console.log($scope.action);
        }else if(args.action == 'display'){
            $scope.$parent.displayBtn = false;
            $scope.$parent.editBtn = true;
            $scope.displayDetail = true;
        }else{
            $http({
                url: '/app',
                method: "POST",
                data: { action:"deleteDetail",data:$scope.driverDetails}
            }).then(function(response) {
                alert(response.data.confirm);
                $location.path("/");
                $rootScope.register = false;
            }, function(response) {
                debugger;
            });
            }


    });
    $scope.driverDetails = '';
    $scope.init = function() {
        debugger;
       var data = $route.current.params;
        $http({
            url: '/app',
            method: "POST",
            data: { action:"getDetail",data:data.carno}
        }).then(function(response) {
            debugger;
            $scope.driverDetails = response.data.driverDetail;
            alert(response.data.confirm);
        }, function(response) {
            debugger;
        });


    }
    $scope.init();


    $scope.updateDetails = function (evt) {

        $http({
            url: '/app',
            method: "POST",
            data: { action:"updateDetail",data:$scope.driverDetails}
        }).then(function(response) {
            debugger;
            $scope.driverDetails = response.data.driverDetail;
            alert(response.data.confirm);
            $location.path("/");
            $rootScope.register = false;
        }, function(response) {
            debugger;
        });

    }


});
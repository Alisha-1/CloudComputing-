/**
 * Created by praveen.guntoju on 3/14/2017.
 */
app.controller('registCtrl',function ($scope,$http, $location,$rootScope) {
    $rootScope.register = true;

    $scope.driverDetails={
        "DRVFNAME":"",
        "DRVLNAME":"",
        "DRVAGE":"",
        "CARNUM":"",
        "CARNAME":"",
        "ADDRS1":"",
        "ADDRS2":"",
        "CITY":"",
        "ZIPCODE":"",
        "COUNTRY":"",
        "PHNO":"",
        "picFile":""
    };


    $scope.getBase64 = function(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            $http({
                url: '/app',
                method: "POST",
                data: { action:"upLoad",data:reader.result,fileName:file.name}
            }).then(function(response) {
                $scope.driverDetails.picFile  = 'app/images/' + response.data.filename;
                debugger;
                console.log($scope.driverDetails.picFile);
                window.alert(response.data.confirmed);


            }, function(response) {
                debugger;
            });


        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    ;
    console.log( document.getElementsByClassName("fileUpload"));
    debugger;
    var ele = document.getElementsByClassName("fileUpload")
        angular.element(ele).on('change',function(){
        debugger;
        var files = document.getElementsByClassName("fileUpload")[0].files;



        if (files.length > 0) {
            $scope.getBase64(files[0]);
        }
    });





    $scope.saveDetails =function (event) {
        debugger;
        $rootScope.register = false;

        console.log($scope);
        $http({
            url: '/app',
            method: "POST",
            data: { action:"create",data:$scope.driverDetails }
        }).then(function(response) {
                    // success
                    debugger;
                    alert(response.data.confirm);
                      $location.path("/");

                }, function(response) {
                   debugger;
                });
     };
    $scope.cancel =function (evnt) {
        $location.path("/");
        $rootScope.register = false;

    }


});
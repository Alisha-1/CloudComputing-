angular.module('myApp').controller("myCtrl", function($scope, $http, $location, $route, $rootScope) {
  $scope.totalData = [];
  $scope.displayBtn = false;
  //$scope.login = true;
  self =  $scope;
  
  $scope.editBtn = false;
  $scope.driverData = [];
  $scope.css = "Main_Home.css";
  $scope.activePage = 0
  $scope.images = []
  $scope.imageIndex = 0
  $scope.currentImageURL = ''
  $scope.tc = {}

  //$scope.login = angular.copy($rootScope.login)

  $scope.$watch(
    function() {
      return $route.current && $route.current.css;
    },
    function(value) {
      $scope.css = value;
      if(self.loginChecked){
         $scope.login = false;
      }
      if(self.signOut){
        $scope.login = true;
      }
    }
  );

  $scope.fileUpload = (files) => {
    var fd = new FormData();
    if ($rootScope.user)
    // Append to userId and append in file array
      fd.append('userId', userId)
    fd.append("file", files[0]);
    //Go to server.js /upload
    $http.post('/upload', fd, { headers: {'Content-Type': undefined } })
      .then((resp) => {
        //Add result ie filename to array of images
        $scope.images.push(resp.data.result)
        
        $scope.activePage += 1
        //Image URL
        $scope.currentImageURL = $scope.images[$scope.imageIndex].fileName;
        $scope.imageIndex += 1

        console.log($scope.currentImageURL, $scope.images, $scope.imageIndex)
      })
      .catch(e => console.error(e))
  }

  /*
$scope.$on('$locationChangeSuccess', function(//EDIT: remove params for jshint ) {

    var path = $location.path();
    //EDIT: cope with other path
    $scope.templateUrl = (path==='/Signin' || path==='/Login'|| path==='/Home') ? 'template/header4signin.html' : 'template/header4normal.html' ;
});
*/
  $scope.editdetail = function(evt) {
    $scope.$broadcast("editDetails", { action: "edit" });
  };
  $scope.displaydetail = function(evt) {
    $scope.$broadcast("editDetails", { action: "display" });
  };

  $scope.deletedetail = function(evt) {
    $scope.$broadcast("editDetails", { action: "delete" });
  };

  $scope.driverList = function(event) {
    $http({
      url: "/app",
      method: "post",
      data: { action: "getData" }
    }).then(
      function(response) {
        alert(response.data.confirm);
        $scope.driverData = response.data.driverData;
        // $location.path( "/details" );
      },
      function(response) {
        // optional
      }
    );
  };
  $scope.detailPage = function(drvData) {
    var carno = drvData["CARNUM"];
    $scope.editBtn = true;

    $location.path("/details/" + carno);
  };
  $scope.loginData = function(){
   
      $scope.loginChecked = true;
    $location.path("/Landing");
   

  }
  $scope.logIn = function() {
    $location.path("/Login");
  };

  $scope.home = function() {
    $location.path("/");
  };

  $scope.signUp = function() {
    $location.path("/SignUp");
  };


  $scope.navCreate1 = function() {
    $location.path("/Create");
  };

  $scope.navCreate2 = function() {
    $location.path("/Create_2");
  };

  $scope.navCancel = function() {
    $location.path("/Cancel");
  };

  $scope.navCreate3 = function() {
    $location.path("/Create_3");
  };

  $scope.navCreate4 = function() {
    $location.path("/Create_4");
  };

  $scope.navCreate5 = function() {
    $location.path("/Create_5");
  };

  $scope.navCreate6 = function() {
    $location.path("/Create_6");
  };

  $scope.navCreate7 = function() {
    $location.path("/Create_7");
  };

  $scope.navCreate8 = function() {
    $location.path("/Create_8");
  };

  $scope.navCreate9 = function() {
    $location.path("/Create_9");
  };

  $scope.navMyCapsule = function() {
    $location.path("/MyCapsule");
  };

  $scope.navEvent1 = function() {
    $location.path("/Event1");
  };

  $scope.navEvent2 = function() {
    $location.path("/Event2");
  };

  $scope.navEventUploadMore= function() {
    $location.path("/EventUploadMore");
  };

  $scope.navSignout = function() {
    $rootScope.loggedIn = false;
    $scope.signOut = true;
    $location.path("/Signout");
  };

  $scope.createData = {
    title: "",
    author: "",
    description: ""
  };


  $scope.create = function(event) {
    $location.path("/register");
  };

  $scope.saveData = function(event) {
    console.log($scope);
    $http({
      url: "/app",
      method: "POST",
      data: { action: "create", data: $scope.createData }
    }).then(
      function(response) {
        // success
        alert(response.data.confirm);
        $scope.totalData = response.data.createdData;
        // $location.path( "/details" );
      },
      function(response) {
        // optional
        // failed
      }
    );
  };

});

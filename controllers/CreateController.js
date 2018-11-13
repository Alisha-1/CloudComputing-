app.controller('CreateController', ($scope, $http, $rootScope, $location) => {

  $scope.activePage = 0
  $scope.images = []
  $scope.imageIndex = 0
  $scope.currentImageURL = ''
  $scope.tc = {}

  // let userId = null
  
  // if ($rootScope.user) {
  //   userId = $rootScope.user.UserID
  // } else {
  //   $location.path('/Login')
  // }
  
  // console.log('userId is', userId)

  $scope.nextPage = () => {
    $scope.activePage += 1
    console.log('Images are', $scope.images)
  }

  $scope.previousPage = () => {
    $scope.activePage -= 1
  }

  $scope.DonePage = () => {
    $scope.activePage -= 1
  }
  //UploadMore
  $scope.uploadMore = () => {
    $scope.imageIndex += 1
    $scope.activePage = 0
  }

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
        $scope.currentImageURL = $scope.images[$scope.imageIndex].fileName
        console.log($scope.currentImageURL, $scope.images, $scope.imageIndex)
      })
      .catch(e => console.error(e))
  }

  $scope.coverUpload = (files) => {
    var fd = new FormData();
    if ($rootScope.user)
   // Append to userId and append in file array
      fd.append('userId', userId)
    fd.append("file", files[0]);
      //Go to server.js /upload

    $http.post('/upload', fd, { headers: {'Content-Type': undefined } })
      .then((resp) => {
        //Cover Image - result ie filename
        $scope.tc.coverImage = resp.data.result.fileName
      })
      .catch(e => console.error(e))
  }

  $scope.createCapsule = (finish) => {
    //Go to server.js /capusle
    $http.post('/capsule', {
      images: $scope.images,
      date: new Date($scope.tc.date.getFullYear(), $scope.tc.date.getMonth(), $scope.tc.date.getDate(), $scope.tc.time.getHours(), $scope.tc.time.getMinutes()),
      recipient: $scope.tc.recipient,
      userId: userId,
      description: $scope.tc.description,
      name: $scope.tc.name,
      coverImage: $scope.tc.coverImage
    }).then(resp => {
      if (finish) {
        $location.path('/MyCapsule')
      } else {
        $scope.activePage += 1
        // Create capsuleID for timecapsule
        $rootScope.capsuleId = resp.data.capsuleId
      }
    }).catch(e => {
      console.error(e)
      $scope.errors = e
    })
  }

  // $scope.updateCapsule = () => {
  //   //Go to server.js patch /capsule
  //   $http.patch('/capsule', {
  //     capsuleId: $rootScope.capsuleId,
  //     closeDate: new Date($scope.tc.closeDate.getFullYear(), $scope.tc.closeDate.getMonth(), $scope.tc.closeDate.getDate())
  //   }).then(resp => {
  //     $location.path('/MyCapsule')
  //   }).catch(e => {
  //     console.error(e)
  //     $scope.errors = e
  //   })
  // }

//   $scope.nextPage =() => {
//     var GivenDate =  $scope.date;
//     var CurrentDate = new Date();
//     GivenDate = new Date(GivenDate);
  
//     if(GivenDate < CurrentDate){
//       throw('Enter valid date i.e current date or date more than current date');
//     }
//   }

})



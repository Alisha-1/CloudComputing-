app.factory('AuthService', function($http) {
  var authService = {};

  authService.login = (credentials) => {
      return $http
    // Go to server.js
          .post('/login', credentials)
          .then((response) => {
              return response.data 
          })
  }

  authService.register = (details) => {
    return $http
    // Go to server.js
          .post('/register', details)
          .then((response) => {
              return response.data 
          })
  }

  authService.glogin = () => {
    return $http.get('/gurl')
          .then((response) => {
              return response.data 
          })
  }

  return authService;
})

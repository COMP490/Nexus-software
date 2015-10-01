
(function() {

    var leagueController = function ($scope, $http) {

var champListUrl = "https://na.api.pvp.net/api/lol/na/v1.2/champion?api_key=d22b06f5-db0b-4886-a43f-86ff2d96ee76"

        
   $http.get(champListUrl).success( function(response) {
      $scope.champions =  JSON.parse(response);
       console.log($scope.champions);
   $scope.freeChamps = []; 
      
          angular.forEach($scope.champions, function(champ){
                  if(champ.freeToPlay === true){
              
                  $scope.freeChamps.push(champ.id);   
                  }
               })
  
            console.log($scope.freeChamps);
   })
    };
    
    leagueController.$inject = ['$scope', '$http'];

    angular.module('nexusApp')
      .controller('leagueController', leagueController);
    
}());
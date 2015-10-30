// JavaScript File
var app = angular.module('ballotLetters', []);
google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainCtrl', ['$scope', '$http',  function($scope, $http) {
  $http.get('/data').success(function(data){
    
  var dataArray = formatDataForView(data);



  var table = google.visualization.arrayToDataTable(dataArray, false);
  var chart = new google.visualization.ColumnChart(document.getElementById('chartdiv'));
  
  var options = {'title':'Ballot letters'}
  chart.draw(table, options);

  });
}]);

function formatDataForView(data) {
  
  
    var dataArray = [], keysArray = [];
    
    data.forEach(function(value){
        var dataEntry = [];
        for(var prop in value) {
          if (isNaN(parseInt(value[prop], 0)))
          dataEntry.push(value[prop]);
          else
          dataEntry.push(parseInt(value[prop], 0));
        }
        dataArray.push(dataEntry);
    });
    
    
     for(var prop in data[0]) {
      keysArray.push(prop);
    }
    
    dataArray.unshift(keysArray);
  
    return dataArray;
}
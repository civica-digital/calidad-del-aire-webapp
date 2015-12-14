'use strict';

/**
 * @ngdoc function
 * @name calidadDelAire.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calidadDelAire
 */
angular.module('calidadDelAire')
  .controller('MainCtrl', ['$timeout', 'Api', 'Graph', function ($timeout, Api, Graph) {
      var self = this;

      // Inititalize variables
      self.dateSelected = undefined;
      self.dateOptions = Api.dateOptions;


      self.initialize = function() {
        // Comment this when using real data
        // self.showChart = false;
        // self.data = Api.dummy_cities();

        self.drawGraph();

        // Uncomment this for real functionality
        // Api.cities().then(function successCallback(response){
        //   // Fetch graph config options
        //   // self.chartConfig = Graph.chartConfig(null);
        //   // self.showChart = true;
        // }, function errorCallback(response){
        //   console.error(response);
        //   // self.showChart = false;
        // });
      };
      $(function () {
        $('#container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: 'CO',
                align: 'center',
                verticalAlign: 'middle',
                y: 40
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white',
                            textShadow: '0px 1px 2px black'
                        }
                    },
                    startAngle: 0,
                    endAngle: 360,
                    center: ['50%', '50%']
                }
            },
            series: [{
                type: 'pie',
                name: 'Calidad',
                innerSize: '50%',
                data: [
                    ['Mala',   10.38],
                    ['Buena',       56.33],
                    ['Regular', 24.03],
                    ['Muy mala',    4.77],
                    ['Parcialmente buena',     0.91],
                    {
                        name: 'Proprietary or Undetectable',
                        y: 0.2,
                        dataLabels: {
                            enabled: false
                        }
                    }
                ]
            }]
        });
    });

      self.drawGraph = function() {
        self.showChart = true;

        // Fetch the info indicator 1 to draw the graph
        // Code here..
        // eg. Api.indicator(self.firstSelectedOption.city, self.firstSelectedOption.indicator).then(function successCallback(){
        //    success code here ....
        // }, function errorCallback(){
        //    error code here ....
        // })

        // Fetch the info indicator 2 to draw the graph
        // Code here..
        // eg. Api.indicator(self.secondSelectedOption.city, self.secondSelectedOption.indicator).then(function successCallback(){
        //    success code here ....
        // }, function errorCallback(){
        //    error code here ....
        // })

        // Give time for the container to draw
        $timeout(function(){
          // self.chartConfig = Graph.chartConfig(self.data);
          self.chartConfig = Graph.chartConfig([Api.dummy_city()[0], Api.dummy_city()[1]]);
        }, 1000);
      };

      self.initialize();
  }]);

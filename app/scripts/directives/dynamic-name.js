'use strict';

angular.module('clasherApp')
  .directive('dynamicName', function ($compile) {
    return {
        restrict:'A',
        terminal:true,
        priority:1000,
        link:function(scope,element,attrs){
          // console.log(attrs.name);
          // console.log(attrs.dynamicName);
          // console.log(scope.$eval(attrs.dynamicName));
            element.attr('name', attrs.name+scope.$eval(attrs.dynamicName));
            element.removeAttr('dynamic-name');
            $compile(element)(scope);
        }
     };
  });
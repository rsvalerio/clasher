'use strict';

angular.module('clasherApp')
  .value('unitTypeTargeted', [{
    value: 'ground',
    label: 'Ground'
  },{
    value: 'air',
    label: 'Air'
  },{
    value: 'groundair',
    label: 'Ground & Air'
  }]);

'use strict';

angular.module('clasherApp')
  .factory('Member', function Member(fbase) {
    return function (user) {

      this.user = user;
      var id = this.user.id;

      this.ref = fbase('/members/'+id);

      this.save = function () {
        this.ref.update({
          gender: user.gender,
          name: user.name,
          email: user.email,
          providerId: user.id,
          timezone: user.timezone,
          provider: user.provider,
        });
      };

    };
  });

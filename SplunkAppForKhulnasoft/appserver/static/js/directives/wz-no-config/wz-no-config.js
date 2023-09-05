/*
 * Khulnasoft app - Khulnasoft no configuration card directive
 * Copyright (C) 2015-2019 Khulnasoft, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

define(['../module'], function (directives) {
  'use strict'
  directives.directive('wzNoConfig', function (BASE_URL) {
    return {
      restrict: 'E',
      scope: {
        error: '=error',
      },
      templateUrl:
        BASE_URL +
        '/static/app/SplunkAppForKhulnasoft/js/directives/wz-no-config/wz-no-config.html',
    }
  })
})

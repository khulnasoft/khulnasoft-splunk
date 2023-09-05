/*
 * Khulnasoft app - Khulnasoft table directive helper
 * Copyright (C) 2015-2019 Khulnasoft, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
define([], function () {
  'use strict'
  return {
    setPage: async function ($scope, errorHandler, fetch) {
      try {
        $scope.error = false

        $scope.khulnasoftTableLoading = true
        const offset = $scope.itemsPerPage * $scope.currentPage

        await fetch({ offset, limit: $scope.itemsPerPage })
        $scope.khulnasoftTableLoading = false
        $scope.$applyAsync()
      } catch (error) {
        $scope.khulnasoftTableLoading = false
        $scope.error = `Error paginating table - ${error.message || error}.`
        errorHandler.showSimpleToast(
          `Error paginating table due to ${error.message || error}`
        )
      }
    },
    nextPage: async function ($scope, errorHandler, fetch) {
      if ($scope.currentPage < $scope.totalPages) {
        $scope.currentPage++
      }
      await this.setPage($scope, errorHandler, fetch)
    },

    range: (size, start, end, gap) => {
      const ret = []
      if (size < end) {
        end = size
        start = size - gap
      }
      for (let i = start; i <= end; i++) {
        ret.push(i)
      }
      return ret
    },

    prevPage: async function ($scope, errorHandler, fetch) {
      if ($scope.currentPage > 0) {
        $scope.currentPage--
      }
      await this.setPage($scope, errorHandler, fetch)
    },
  }
})

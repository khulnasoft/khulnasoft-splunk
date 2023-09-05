define(['../module'], function (module) {
  'use strict'

  class checkDaemonsService {
    constructor($rootScope, $requestService, $timeout) {
      this.rootScope = $rootScope
      this.khulnasoftIsReady = $requestService.khulnasoftIsReady
      this.tries = 10
      this.timeout = $timeout
      this.busy = false
    }

    async makePing(msg = false) {
      try {
        if (this.busy) return
        this.busy = true
        window.localStorage.setItem('khulnasoftIsReady', 'false')
        this.rootScope.notReadyMsg = msg
        this.rootScope.khulnasoftCouldNotBeRecovered = false
        this.rootScope.khulnasoftNotReadyYet = true
        let khulnasoftReady = false
        while (this.tries--) {
          await this.timeout(1200)
          try {
            const result = await this.khulnasoftIsReady()
            khulnasoftReady = result.data.ready
          } catch (error) {
            khulnasoftReady = false
          }
          if (khulnasoftReady) {
            this.tries = 10
            this.rootScope.khulnasoftNotReadyYet = false
            this.rootScope.khulnasoftCouldNotBeRecovered = false
            this.rootScope.$applyAsync()
            window.localStorage.setItem('khulnasoftIsReady', 'true')
            break
          }
        }

        if (!khulnasoftReady) {
          throw new Error('Not recovered')
        }
      } catch (error) {
        this.tries = 10
        this.rootScope.khulnasoftCouldNotBeRecovered = true
        this.rootScope.$applyAsync()
      }

      this.busy = false
    }
  }

  module.service('$checkDaemonsService', checkDaemonsService)
})

/*

👋 “Hey” from the Praxis team!

'apiConfig' is one pattern that can be used to set environment-based values at build time.
This happens by creating an environment variable REACT_APP_ENV, and then matching corresponding
keys to each environment in the 'envConfigs' object below. To learn more about how to set
REACT_APP_ENV, view the README generated with this app.


For an alternative pattern - using TAP configuration to set environment-based values at cluster initialization - see:
@praxis/component-runtime-env - https://praxis.prod.target.com/components/runtime-env

*/

import merge from 'lodash/merge'

// configurations shared between most or all environments can be stored in commonConfig
const commonConfig = {
  auth: {
    authorizationUrl:
      'https://oauth.iam.perf.target.com/auth/oauth/v2/authorize',
    logoutUrl:
      'https://logonservices.iam.perf.target.com/login/responses/logoff.html',
  },
}

const envConfigs = {
  // dev is the default development environment set by .env.development and the default pipeline in .drone.yml
  dev: {
    auth: {
      clientId:
        '< Create an non-prod ID2.0 OAuth Client ID at http://go/oauth/ >',
    },
  },
  /*
  // additional environments can be added:
  stg: {

  },
  */
  prod: {
    auth: {
      // keys in envConfigs will overwrite keys from commonConfig
      authorizationUrl: 'https://oauth.iam.target.com/auth/oauth/v2/authorize',
      logoutUrl:
        'https://logonservices.iam.target.com/login/responses/logoff.html',
      clientId:
        '< Clone your non-prod ID2.0 OAuth Client ID to a production Client ID at http://go/oauth/ >',
    },
  },
}

const appEnv = process.env.REACT_APP_ENV
const config = envConfigs[appEnv]

// commonConfig and the config for the matching REACT_APP_ENV are combined.
// Values in the environment-specific config will overwrite commonConfig keys
// if they share the same name.
const apiConfig = merge(commonConfig, config)

export default apiConfig

// The following code block is purely for demonstration purposes and can be removed.
if (process.env.NODE_ENV !== 'production') {
  console.log(`${appEnv} ENV apiConfig:`, apiConfig)
}

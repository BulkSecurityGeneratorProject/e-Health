import { AppState, Linking } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { Images } from '../shared/themes'
// import { StorybookUIRoot } from '../../storybook'

import createStore from '../shared/reducers'
import Colors from '../shared/themes/colors'
import '../config/reactotron-config'
import AccountActions from '../shared/reducers/account.reducer'

import LoginScreen from '../modules/login/login-screen'
import LaunchScreen from '../modules/home/launch-screen'
import DrawerContent from './drawer/drawer-content'
import SettingsScreen from '../modules/account/settings/settings-screen'
import ChestionarScreen from '../modules/account/chestionar/chestionar-screen'
import ObiectiveScreen from '../modules/account/obiective/obiective-screen'
import ChallengeScreen from '../modules/account/challenge/challenge-screen'
import RegisterScreen from '../modules/account/register/register-screen'
import ForgotPasswordScreen from '../modules/account/password-reset/forgot-password-screen'
import ChangePasswordScreen from '../modules/account/password/change-password-screen'
import EntitiesScreen from '../modules/entities/entities-screen'
// ignite-jhipster-navigation-import-needle

export const LOGIN_SCREEN = 'nav.LoginScreen'
export const REGISTER_SCREEN = 'nav.RegisterScreen'
export const OBIECTIVE_SCREEN = 'nav.ObiectiveScreen'
export const CHALLENGE_SCREEN = 'nav.ChallengeScreen'
export const FORGOT_PASSWORD_SCREEN = 'nav.ForgotPasswordScreen'
export const CHANGE_PASSWORD_SCREEN = 'nav.ChangePasswordScreen'
export const SETTINGS_SCREEN = 'nav.SettingsScreen'
export const CHESTIONAR_SCREEN = 'nav.ChestionarScreen'
export const LAUNCH_SCREEN = 'nav.LaunchScreen'
export const DRAWER_CONTENT = 'nav.DrawerContent'
export const ENTITIES_SCREEN = 'nav.EntitiesScreen'
// ignite-jhipster-navigation-declaration-needle

const store = createStore()

export const appStack = {
  root: {
    sideMenu: {
      left: {
        component: {
          name: DRAWER_CONTENT
        }
      },
      center: {
        stack: {
          id: 'center',
          children: [{
            component: {
              name: LAUNCH_SCREEN,
              options: {
                topBar: {
                  title: {
                    text: 'SocioPATH',
                    color: Colors.snow
                  },
                  leftButtons: [
                    {
                      id: 'menuButton',
                      icon: Images.menuIcon,
                      testID: 'menuButton',
                      color: Colors.snow
                    }
                  ]
                }
              }
            }
          }]
        }
      }
    }
  }
}

let lastAppState = 'active'
function handleAppStateChange (nextAppState) {
  if (lastAppState.match(/inactive|background/) && nextAppState === 'active') {
    refreshAccount(store)
  }
  lastAppState = nextAppState
}

function refreshAccount () {
  store.dispatch(AccountActions.accountRequest())
}
// for deep linking
function handleOpenURL (event) {
  console.tron.log(event.url)
  let splitUrl = event.url.split('/') // ['https:', '', 'domain', 'route', 'params']
  let importantParameters = splitUrl.splice(3) // ['route', 'params']
  if (importantParameters.length === 0) {
    console.tron.log('Sending to home page')
    return null
  }
  if (importantParameters.length === 1) {
    switch (importantParameters[0]) {
      case 'register':
        console.tron.log(`Sending to Register Page`)
        registerScreen()
        break
      default:
        console.tron.warn(`Unhandled deep link: ${event.url}`)
      // default code block
    }
  }
}

export function registerScreensAndStartApp () {
  Navigation.registerComponentWithRedux(LOGIN_SCREEN, () => LoginScreen, Provider, store)
  Navigation.registerComponentWithRedux(OBIECTIVE_SCREEN, () => ObiectiveScreen, Provider, store)
  Navigation.registerComponentWithRedux(CHESTIONAR_SCREEN, () => ChestionarScreen, Provider, store)
  Navigation.registerComponentWithRedux(CHALLENGE_SCREEN, () => ChallengeScreen, Provider, store)
  Navigation.registerComponentWithRedux(REGISTER_SCREEN, () => RegisterScreen, Provider, store)
  Navigation.registerComponentWithRedux(FORGOT_PASSWORD_SCREEN, () => ForgotPasswordScreen, Provider, store)
  Navigation.registerComponentWithRedux(CHANGE_PASSWORD_SCREEN, () => ChangePasswordScreen, Provider, store)
  Navigation.registerComponentWithRedux(SETTINGS_SCREEN, () => SettingsScreen, Provider, store)
  Navigation.registerComponentWithRedux(DRAWER_CONTENT, () => DrawerContent, Provider, store)
  Navigation.registerComponentWithRedux(LAUNCH_SCREEN, () => LaunchScreen, Provider, store)
  Navigation.registerComponentWithRedux(ENTITIES_SCREEN, () => EntitiesScreen, Provider, store)
  // ignite-jhipster-navigation-registration-needle

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      topBar: {
        topBar: {
          title: {
            color: Colors.snow
          }
        },
        backButton: {
          showTitle: false,
          testID: 'backButton',
          icon: Images.chevronLeftIcon,
          color: Colors.snow,
          iconColor: Colors.snow
        },
        background: {
          color: Colors.background
        }
      },
      sideMenu: {
        left: {
          enabled: false
        }
      }
    })

    Navigation.setRoot(appStack)

    // handle app state and deep links
    AppState.addEventListener('change', handleAppStateChange)
    Linking.addEventListener('url', handleOpenURL)
  })
}

export const loginScreen = () => Navigation.showModal({
  stack: {
    children: [{
      component: {
        name: LOGIN_SCREEN,
        options: {
          topBar: {
            visible: false,
            drawBehind: true
          }
        }
      }
    }]
  }
})

export const registerScreen = () => Navigation.push('center', {
  component: {
    name: REGISTER_SCREEN,
    options: {
      topBar: {
        title: {
          text: 'Sign Up',
          color: Colors.snow
        }
      }
    }
  }
})

export const obiectiveScreen = () => Navigation.push('center', {
  component: {
    name: OBIECTIVE_SCREEN,
    options: {
      topBar: {
        title: {
          text: 'Obiective',
          color: Colors.snow
        }
      }
    }
  }
})

export const challengeScreen = (goal) => Navigation.push('center', {
  component: {
    name: CHALLENGE_SCREEN,
    options: {
      topBar: {
        title: {
          text: 'Provocare',
          color: Colors.snow
        }
      }
    },
    passProps: {
      target: goal
    }
  }
})

export const forgotPasswordScreen = () => Navigation.push('center', {
  component: {
    name: FORGOT_PASSWORD_SCREEN,
    options: {
      topBar: {
        title: {
          text: 'Forgot Password',
          color: Colors.snow
        }
      }
    }
  }
})
export const changePasswordScreen = () => Navigation.push('center', {
  component: {
    name: CHANGE_PASSWORD_SCREEN,
    options: {
      topBar: {
        title: {
          text: 'Change Password',
          color: Colors.snow
        }
      }
    }
  }
})
export const settingsScreen = () => Navigation.push('center', {
  component: {
    name: SETTINGS_SCREEN,
    options: {
      topBar: {
        title: {
          text: 'Profil',
          color: Colors.snow
        }
      }
    }
  }
})
export const chestionarScreen = () => Navigation.push('center', {
  component: {
    name: CHESTIONAR_SCREEN,
    options: {
      topBar: {
        title: {
          text: 'Chestionar',
          color: Colors.snow
        }
      }
    }
  }
})

export const entitiesScreen = () => Navigation.push('center', {
  component: {
    name: ENTITIES_SCREEN,
    options: {
      topBar: {
        title: {
          text: 'Entities',
          color: Colors.snow
        }
      }
    }
  }
})

// ignite-jhipster-navigation-method-needle

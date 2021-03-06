import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Image, BackHandler } from 'react-native'
import { Navigation } from 'react-native-navigation'

import { obiectiveScreen, chestionarScreen, loginScreen, registerScreen, forgotPasswordScreen, changePasswordScreen, settingsScreen, entitiesScreen } from '../layouts'
import { connect } from 'react-redux'

import styles from './drawer-content.styles'
import { Images } from '../../shared/themes'
import DrawerButton from './drawer-button'
import LoginActions from '../../modules/login/login.reducer'
import { isLoggedIn } from '../../shared/reducers/account.reducer'

class DrawerContent extends Component {
  constructor (context, props) {
    super(context, props)
    Navigation.events().bindComponent(this)
  }

  hideSideMenu () {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: false
        }
      }
    })
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.hideSideMenu()
    })
  }

  handlePressLogin = () => {
    this.hideSideMenu()
    loginScreen()
  }
  handlePressRegister = () => {
    this.hideSideMenu()
    registerScreen()
  }
  handlePressForgotPassword = () => {
    this.hideSideMenu()
    forgotPasswordScreen()
  }
  handlePressSettings = () => {
    this.hideSideMenu()
    settingsScreen()
  }
  handlePressChangePassword = () => {
    this.hideSideMenu()
    changePasswordScreen()
  }
  handlePressEntities = () => {
    this.hideSideMenu()
    entitiesScreen()
  }

 handlePressChestionar = () => {
    this.hideSideMenu()
    chestionarScreen()
 }

  handlePressObiective = () => {
     this.hideSideMenu()
     obiectiveScreen()
  }
  handlePressLogout = () => {
    this.hideSideMenu()
    this.props.logout()
  }


  render () {
    return (
      <ScrollView style={styles.container}>
        <Image testID='drawerLogo' source={Images.logoJhipster} style={styles.logo} />
        {this.props.loggedIn && (<DrawerButton testID='settingsDrawerButton' text='Profil' onPress={this.handlePressSettings} />)}
        {this.props.loggedIn && (<DrawerButton testID='homeDrawerButton' text='Chestionar' onPress={this.handlePressChestionar} />)}
        {this.props.loggedIn && (<DrawerButton testID='homeDrawerButton' text='Obiective' onPress={this.handlePressObiective} />)}

        {!this.props.loggedIn && (<DrawerButton testID='loginDrawerButton' text='Login' onPress={this.handlePressLogin} />)}
        {!this.props.loggedIn && (<DrawerButton testID='registerDrawerButton' text='Register' onPress={this.handlePressRegister} />)}
        {!this.props.loggedIn && (<DrawerButton testID='forgotPasswordDrawerButton' text='Forgot Password' onPress={this.handlePressForgotPassword} />)}
        {this.props.loggedIn && (<DrawerButton testID='changePasswordDrawerButton' text='Change Password' onPress={this.handlePressChangePassword} />)}
        {this.props.loggedIn && (<DrawerButton testID='logoutDrawerButton' text='Logout' onPress={this.handlePressLogout} />)}

      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    loggedIn: isLoggedIn(state.account)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(LoginActions.logoutRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)

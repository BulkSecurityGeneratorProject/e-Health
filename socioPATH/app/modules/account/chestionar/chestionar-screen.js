import React from 'react'
import { Alert, ScrollView, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Navigation } from 'react-native-navigation'
import t from 'tcomb-form-native'

import ForgotPasswordActions from './forgot-password.reducer'
import styles from './forgot-password-screen.styles'

let Form = t.form.Form

class ChestionarScreen extends React.Component {
  constructor (props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      scor_ezitare: 0,
      scor_frica: 0
    }
  }
  componentWillReceiveProps (newProps) {
    // Did the update attempt complete?

  }


  }

  render () {
    return (
      <KeyboardAwareScrollView>
        <ScrollView style={styles.container}>

           <Text>"chestionar screen"</Text>
        </ScrollView>
      </KeyboardAwareScrollView>
    )
  }
}

//const mapStateToProps = (state) => {
//  return {
//    fetching: state.forgotPassword.fetching,
//    error: state.forgotPassword.error
//  }
//}

//const mapDispatchToProps = (dispatch) => {
//  return {
//    chestionarSend: (scor_frica, scor_ezitare) => dispatch(ChestionarSendActions.ChestionarSendRequest(scor_frica, scor_ezitare))
//  }
//}

export default connect(mapStateToProps, mapDispatchToProps)(ChestionarScreen)

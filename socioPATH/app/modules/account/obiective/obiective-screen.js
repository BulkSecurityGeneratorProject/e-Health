import React from 'react'
import { Alert, ScrollView, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Navigation } from 'react-native-navigation'
import t from 'tcomb-form-native'
import styles from './obiective-screen.styles'

//import ObiectiveSendActions from '../obiective/obiective.reducer'


let Form = t.form.Form

class ObiectiveScreen extends React.Component {
  constructor (props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {

    }
  }




  render () {
    return (
      <KeyboardAwareScrollView>
        <ScrollView style={styles.container}>

           <Text>"obiective screen"</Text>
        </ScrollView>
      </KeyboardAwareScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   // fetching: state.chestionar.fetching,
   // error: state.chestionar.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  //  chestionarSend: (scor_frica, scor_ezitare) => dispatch(ChestionarSendActions.ChestionarSendRequest(scor_frica, scor_ezitare))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ObiectiveScreen)

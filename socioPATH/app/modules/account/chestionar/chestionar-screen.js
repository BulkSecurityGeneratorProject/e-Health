import React from 'react'
import { Alert, ScrollView, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Navigation } from 'react-native-navigation'
import t from 'tcomb-form-native'
import styles from './chestionar-screen.styles'

import ChestionarSendActions from '../chestionar/chestionar.reducer'


let Form = t.form.Form

class ChestionarScreen extends React.Component {
  constructor (props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      scor_ezitare: 0,
      scor_frica: 0,
      questions: []
    }
  }


   componentWillMount(){
        fetch('http://192.168.0.100:8080/question/getAllQuestions')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                           questions:responseJson.questions,
                     });

              //return responseJson.tex;
            })
            .catch((error) => {
              console.error(error);
            });

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

export default connect(mapStateToProps, mapDispatchToProps)(ChestionarScreen)

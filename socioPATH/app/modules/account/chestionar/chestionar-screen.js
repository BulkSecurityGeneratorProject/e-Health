import React from 'react'
import { Alert, ScrollView, Text, TouchableHighlight, Picker } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Navigation } from 'react-native-navigation'
import t from 'tcomb-form-native'
import styles from './chestionar-screen.styles'
import {Button } from 'react-native';



let Form = t.form.Form

class ChestionarScreen extends React.Component {
  constructor (props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      scor_ezitare: 0,
      scor_frica: 0,
      questions: [],
      currentQuestion: '',
      currentIndex: 0,
      textButton: "next",
      valueSelected: ''
    }

    this.nextQuestion = this.nextQuestion.bind(this)
    this.sendDataToServer = this.sendDataToServer.bind(this)

  }

  sendDataToServer(scorFrica, scorEzitare) {

    fetch('http://192.168.0.100:8080/score/postScore', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        scor_frica: scorFrica,
        scor_ezitare: scorEzitare,

      }),
    });

  }


  nextQuestion(index) {

      if (index == this.state.questions.length - 1) {
        this.sendDataToServer(1, 3);
      }

      var newIndex = index + 1;
       this.setState({
             currentQuestion: this.state.questions[index],
             currentIndex: newIndex
       });
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
        <Text> {this.state.currentQuestion}</Text>
       <Button title="NEXT" onPress={() =>{this.nextQuestion(this.state.currentIndex)}}></Button>



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
    chestionarSend: (scor_frica, scor_ezitare) => dispatch(ChestionarSendActions.ChestionarSendRequest(scor_frica, scor_ezitare))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChestionarScreen)

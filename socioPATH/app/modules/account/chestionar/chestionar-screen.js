import React from 'react'
import {ScrollView, Text, Picker, View} from 'react-native'
import {connect} from 'react-redux'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {Navigation} from 'react-native-navigation'
import t from 'tcomb-form-native'
import styles from './chestionar-screen.styles'
import {Button} from 'react-native';
import {  settingsScreen } from '../../../navigation/layouts'

import ChestionarSendActions from '../chestionar/chestionar.reducer'


let Form = t.form.Form

class ChestionarScreen extends React.Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      scor_ezitare: 0,
      ezitare: 0,
      scor_frica: 0,
      currentQuestion: 'Start Chestionar',
      currentIndex: 0,
      textButton: "next",
      valueSelected: '',
      frica: 0,
      questions: []
    }

    this.nextQuestion = this.nextQuestion.bind(this)
    this.sendDataToServer = this.sendDataToServer.bind(this)

  }

  sendDataToServer(scorFrica, scorEzitare) {

    fetch('http://192.168.0.186:8080/score/postScore', {
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

    if (index == this.state.questions.length) {
      this.setState({
        currentQuestion: 'Multumim pentru timpul accordat! Te rugam sa accesezi pagina de Profil pentru a-ti urmari evolutia'
      });
      this.sendDataToServer(this.state.scor_frica, this.state.scor_frica);
    }

    var newIndex = index + 1;
    this.setState({
      currentQuestion: this.state.questions[index],
      currentIndex: newIndex,
      ezitare: 0,
      frica: 0
    });
  }

  updateScorEzitare = (ezitare) => {
    this.setState({
      scor_ezitare: this.state.scor_ezitare + Number(ezitare),
      ezitare: ezitare
    })
  };

  updateScorFrica = (frica) => {
    this.setState({
      scor_frica: this.state.scor_frica + Number(frica),
      frica: frica
    })
  };


  componentDidMount() {
    fetch('http://192.168.0.186:8080/question/getAllQuestions')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          questions: responseJson.questions,
        });

        //return responseJson.tex;
      })
      .catch((error) => {
        console.error(error);
      });

  }


  render() {


    return (
      <KeyboardAwareScrollView>
        <ScrollView style={styles.container}>
          <Text style={styles.sectionTextB}> {this.state.currentQuestion}</Text>
          <View style={styles.groupContainer}>
            <Text> Ezitare </Text>
            <Picker selectedValue={this.state.ezitare} onValueChange={this.updateScorEzitare}>
              <Picker.Item label="0 - Deloc" value='0'/>
              <Picker.Item label="1 - Putin" value='1'/>
              <Picker.Item label="2 - Moderat" value='2'/>
              <Picker.Item label="3 - Sever" value='3'/>
            </Picker>
            <Text> Frica </Text>
            <Picker selectedValue={this.state.frica} onValueChange={this.updateScorFrica}>
              <Picker.Item label="0 - Niciodata" value='0'/>
              <Picker.Item label="1 - Ocazional" value='1'/>
              <Picker.Item label="2 - Des" value='2'/>
              <Picker.Item label="3 - De obicei" value='3'/>
            </Picker>
          </View>
          <Button title="NEXT" onPress={() => {
            this.nextQuestion(this.state.currentIndex);
          }}/>

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

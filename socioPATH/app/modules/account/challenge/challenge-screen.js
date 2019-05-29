import React from 'react';
import { Alert, Button, ScrollView, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import t from 'tcomb-form-native';
import styles from './challenge-screen.styles';

//import ObiectiveSendActions from '../obiective/obiective.reducer'


let Form = t.form.Form

class ChallengeScreen extends React.Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      endpoint: this.props.target,
      challenge: '',
      advice: ''
    };
  }

  componentDidMount() {
    fetch('http://192.168.0.111:8080/challenge/getChallengeForTarget/' + this.state.endpoint.toLowerCase())
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          challenge: responseJson.challenge,
          advice: responseJson.advice
        });
      })
      .catch((error) => {
        console.error(error);
      });

  }


  render() {
    return (
      <KeyboardAwareScrollView>
        <ScrollView style={styles.container}>
          <Text style={styles.sectionTextB}> {this.state.challenge}</Text>
          <Button style={styles.button} title="Realizat" onPress={() => {
            // Alert.alert('Sfat', this.state.advice);
          }} />
          <Button style={styles.button} title="Sfat" onPress={() => {
            Alert.alert('Sfat', this.state.advice);
          }} />
          <Button style={styles.button} title="Azi nu" color="red" onPress={() => {
            // Alert.alert('Sfat', this.state.advice);
          }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeScreen)

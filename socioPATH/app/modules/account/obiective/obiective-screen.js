import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import t from 'tcomb-form-native';
import { challengeScreen } from '../../../navigation/layouts';
import { Images } from '../../../shared/themes';
import styles from './obiective-screen.styles';

let Form = t.form.Form

class ObiectiveScreen extends React.Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      GridListItems: [
        { key: "Comunicare" },
        { key: "Sanatate" },
        { key: "Stima de sine" },
        { key: "Interactiune" },
      ]
    };
  }

  actionSelectGoal(target) {
    challengeScreen(target);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.targetLogo} style={styles.logo} resizeMode='stretch' />
        <FlatList
          data={this.state.GridListItems}
          renderItem={({ item }) =>
            <View style={styles.GridViewContainer}>
              <Text style={styles.GridViewTextLayout} onPress={this.actionSelectGoal.bind(this, item.key)} > {item.key} </Text>
            </View>}
          numColumns={2}
        />
      </View>
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

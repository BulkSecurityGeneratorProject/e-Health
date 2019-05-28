import React from 'react'
import {ScrollView, Text, Image, View} from 'react-native'
import {Navigation} from 'react-native-navigation'

import {Images} from '../../shared/themes'
import styles from './launch-screen.styles'

export default class LaunchScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'hello world',
      text: '',
      author: ''
    };
    Navigation.events().bindComponent(this)
  }

  componentDidAppear() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          enabled: true,
          visible: false
        }
      }
    })
  }

  showSideMenu() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true
        }
      }
    })
  }

  navigationButtonPressed({buttonId}) {
    this.showSideMenu()
  }

  componentWillMount() {
    fetch('http://192.168.0.186:8080/quote/getRandomQuote')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          text: responseJson.text,
          author: responseJson.author
        });

        //return responseJson.tex;
      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    return (
      <View style={styles.mainContainer} testID='launchScreen'>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch'/>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Image source={Images.creativeLogo} style={styles.logo} resizeMode='stretch'/>
            <Text style={styles.sectionTextA}>
              {this.state.text}
            </Text>
            <Text style={styles.sectionText}>
              {this.state.author}
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

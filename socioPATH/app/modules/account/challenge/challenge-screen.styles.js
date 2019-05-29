import { StyleSheet } from 'react-native'

import { ApplicationStyles, Colors } from '../../../shared/themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    padding: 20
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    backgroundColor: Colors.jhipsterBlue,
    borderColor: Colors.jhipsterBlue,
    margin: 20,
    padding: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})

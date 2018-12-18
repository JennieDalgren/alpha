import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import LettersScreen from './src/screens/lettersScreen'

export default class App extends Component {
  render() {
    return <LettersScreen />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})

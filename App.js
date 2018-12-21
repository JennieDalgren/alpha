import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import LetterCarousel from './src/components/carousel'

export default class App extends Component {
  render() {
    return <LetterCarousel />
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

import React from 'react'
import { StyleSheet, Text, View, Link } from 'react-native'
import Letter from './src/components/letter'

export default class App extends React.Component {
  render() {
    return <Letter />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})

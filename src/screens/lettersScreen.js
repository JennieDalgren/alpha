import React from 'react'
import { StyleSheet, Text, View, Link } from 'react-native'
import LetterCarousel from '../components/carousel'
import { upperLetters, lowerLetters } from '../consts/letters'

export default class LettersScreen extends React.Component {
  constructor(props) {
    super(props)
  }
  // _checkLetter = () => {
  //   if (this._carousel) {
  //     console.log('index?', this._carousel.currentIndex)
  //   }
  //   console.log('screen')
  //   // pos === 'lower'
  //   //   ? this.setState({ lower: slideIndex })
  //   //   : this.setState({ upper: slideIndex })

  //   // console.log('upper vs lower', upper, lower)

  //   // setTimeout(() => {
  //   //   if (upper === lower) {
  //   //     console.log('ITS A MATCH')
  //   //   }
  //   // }, 500)
  // }

  render() {
    return (
      <View style={styles.container}>
        <LetterCarousel data={upperLetters} upper />
        <LetterCarousel data={lowerLetters} />
      </View>
    )
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

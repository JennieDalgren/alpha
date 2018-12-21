import React from 'react'
import { StyleSheet, Text, View, Link } from 'react-native'
import LetterCarousel from '../components/carousel'
import { upperLetters, lowerLetters } from '../consts/letters'

export default class LettersScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      upper: 0,
      lower: 0
    }
  }

  _setStates = () => {
    console.log('set states', this.main, this.state)
    if (this._carousel) {
      const theIndex = this._carousel.currentIndex
      console.log('the index', theIndex)
      if (this.props && this.props.up) {
        console.log('new upper state should be', theIndex)
        this.setState({
          upper: theIndex,
          lower: this.state.lower
        })
      } else if (this.props && this.props.down) {
        console.log('new LOWER state should be', theIndex)
        this.setState({
          lower: theIndex,
          upper: this.state.upper
        })
      }

      this._compareLetters()
    }
  }

  _compareLetters = () => {
    setTimeout(() => {
      console.log('stateeee', this.state)
      if (this.state.upper === this.state.lower) {
        console.log('ITS A MATCH')
      }
    }, 500)
  }

  render() {
    return (
      <View
        style={styles.container}
        ref={ref => {
          this.main = ref
        }}
      >
        <LetterCarousel
          data={upperLetters}
          up
          onSnapToItem={() => this._setStates('up')}
        />
        <LetterCarousel
          data={lowerLetters}
          down
          onSnapToItem={() => console.log('index', this._carousel.currentIndex)}
        />
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

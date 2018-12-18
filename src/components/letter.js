import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

import { lowerLetters, upperLetters } from '../consts/letters'

export default class Letter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      upper: upperLetters[0].l,
      upperBg: upperLetters[0].bg,
      lower: lowerLetters[0].l,
      lowerBg: lowerLetters[0].bg
    }
  }

  onSwipeRight(gestureState) {
    const idx = upperLetters.findIndex(letter => letter.l === this.state.upper)
    const newIdx = idx > 0 ? idx - 1 : 25

    this.setState({
      upper: upperLetters[newIdx].l,
      upperBg: upperLetters[newIdx].bg
    })
  }

  onSwipeLowerRight(gestureState, pos) {
    const idx = lowerLetters.findIndex(letter => letter.l === this.state.lower)
    const newIdx = idx > 0 ? idx - 1 : 25
    console.log('pos', pos)
    this.setState({
      lower: lowerLetters[newIdx].l,
      lowerBg: lowerLetters[newIdx].bg
    })
  }

  onSwipe(gestureName, gestureState, top) {
    this.setState({ gestureName })
    const { SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections
    const { upper, lower } = this.state
    const idx = top
      ? upperLetters.findIndex(letter => letter.l === upper)
      : lowerLetters.findIndex(letter => letter.l === lower)

    switch (gestureName) {
      case SWIPE_LEFT:
        const newIdx = idx < upperLetters.length - 1 ? idx + 1 : 0
        this.setState(
          top
            ? {
                upper: upperLetters[newIdx].l,
                upperBg: upperLetters[newIdx].bg
              }
            : {
                lower: lowerLetters[newIdx].l,
                lowerBg: lowerLetters[newIdx].bg
              }
        )
        break
      case SWIPE_RIGHT:
        const newIndex = idx > 0 ? idx - 1 : upperLetters.length - 1
        this.setState(
          top
            ? {
                upper: upperLetters[newIndex].l,
                upperBg: upperLetters[newIndex].bg
              }
            : {
                lower: lowerLetters[newIndex].l,
                lowerBg: lowerLetters[newIndex].bg
              }
        )
        break
    }
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 160
    }

    return (
      <View style={styles.container}>
        <GestureRecognizer
          onSwipe={(direction, state, top) =>
            this.onSwipe(direction, state, true)
          }
          config={config}
          style={[
            styles.upperContainer,
            { backgroundColor: this.state.upperBg }
          ]}
        >
          <Text>{this.state.upper}</Text>
        </GestureRecognizer>
        <GestureRecognizer
          onSwipe={(direction, state, top) =>
            this.onSwipe(direction, state, false)
          }
          config={config}
          style={[
            styles.lowerContainer,
            { backgroundColor: this.state.lowerBg }
          ]}
        >
          <Text>{this.state.lower}</Text>
        </GestureRecognizer>
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
  },
  upperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lowerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

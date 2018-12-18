import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

const screenWidth = Dimensions.get('window').width

class LetterCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upper: 0,
      lower: 0
    }
  }

  _renderLetter = ({ item, index }) => (
    <View style={[styles.container, { backgroundColor: item.bg }]}>
      <Text>{item.l}</Text>
    </View>
  )

  _setStates = () => {
    if (this._carousel) {
      if (this.props.upper) {
        console.log('new upper state should be', this._carousel.currentIndex)
        this.setState({ upper: this._carousel.currentIndex })
      } else {
        console.log('new LOWER state should be', this._carousel.currentIndex)
        this.setState({ lower: this._carousel.currentIndex })
      }

      this._compareLetters()
    }
  }

  _compareLetters = () => {
    setTimeout(() => {
      if (this.state.upper === this.state.lower) {
        console.log('ITS A MATCH')
      }
    }, 500)
  }

  render() {
    const { data, onSnapToItem } = this.props
    return (
      <Carousel
        ref={c => {
          this._carousel = c
        }}
        loop
        loopClonesPerSide={15}
        inactiveSlideScale={1}
        enableSnap
        shouldOptimizeUpdates
        data={data}
        renderItem={this._renderLetter}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={this._setStates}
      />
    )
  }
}

export default LetterCarousel

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth
  }
})

// TODO: upper state changes when lower changes! Check why?????

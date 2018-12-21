import React, { Component } from 'react'
import { StyleSheet, Image, View, Dimensions, Vibration } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { upperLetters, lowerLetters } from '../consts/letters'
import Monster from '../components/monster'

const screenWidth = Dimensions.get('window').width

class LetterCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      upper: 0,
      lower: 0,
      openModal: false
    }
  }

  _setStates = () => {
    this.setState({
      upper: this._carouselUpper.currentIndex,
      lower: this._carouselLower.currentIndex
    })

    this._compareLetters()
  }

  _compareLetters = () => {
    setTimeout(() => {
      if (this.state.upper === this.state.lower) {
        console.log('ITS A MATCH')
        Vibration.vibrate()
        this._openModal()
      }
    }, 1000)
  }

  _openModal = () => {
    this.setState({ openModal: true })
    setTimeout(() => {
      this.setState({ openModal: false })
    }, 2000)
  }

  _renderUpperLetter = ({ item, index }) => (
    <View style={[styles.upperContainer, { backgroundColor: item.bg }]}>
      <Image source={item.l} resizeMode='contain' />
    </View>
  )

  _renderLowerLetter = ({ item, index }) => (
    <View style={[styles.lowerContainer, { backgroundColor: item.bg }]}>
      <Image source={item.l} resizeMode='contain' />
    </View>
  )

  render() {
    console.log('THE STATE IS:::', this.state)
    return (
      <View style={styles.wrapper}>
        <Monster letter={this.state.upper} visible={this.state.openModal} />
        <Carousel
          ref={c => {
            this._carouselUpper = c
          }}
          loop
          loopClonesPerSide={15}
          inactiveSlideScale={1}
          enableSnap
          shouldOptimizeUpdates
          data={upperLetters}
          renderItem={this._renderUpperLetter}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          onSnapToItem={this._setStates}
        />
        <Carousel
          ref={c => {
            this._carouselLower = c
          }}
          loop
          loopClonesPerSide={15}
          inactiveSlideScale={1}
          enableSnap
          shouldOptimizeUpdates
          data={lowerLetters}
          renderItem={this._renderLowerLetter}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          onSnapToItem={this._setStates}
        />
      </View>
    )
  }
}

export default LetterCarousel

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: screenWidth
  },
  lowerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: screenWidth
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})

// TODO: upper state changes when lower changes! Check why?????

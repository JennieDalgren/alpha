import React, { Component } from 'react'
import LottieView from 'lottie-react-native'

import { StyleSheet, Image, Modal, Dimensions } from 'react-native'
import { monsters } from '../consts/monsters'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Monster extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { visible, letter } = this.props
    return (
      <Modal animationType='none' transparent={false} visible={visible}>
        <LottieView autoPlay loop source={monsters[letter]} />
        {/* <Image
          style={styles.monsterImg}
          source={this.state.monsters[letter]}
          resizeMode='contain'
        /> */}
      </Modal>
    )
  }
}

export default Monster

const styles = StyleSheet.create({
  monsterImg: {
    width: width,
    height: height
  }
})

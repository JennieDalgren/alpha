import React from 'react'
import { StyleSheet, Image, Modal, Dimensions } from 'react-native'
import { monsters } from '../consts/monsters'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Monster = ({ letter, visible }) => {
  console.log('letter', letter)
  const monster = `../../assets/monster-${letter}.jpg`

  return (
    <Modal animationType='none' transparent={false} visible={visible}>
      <Image
        style={styles.monsterImg}
        source={monsters[letter]}
        resizeMode='contain'
      />
    </Modal>
  )
}

export default Monster

const styles = StyleSheet.create({
  monsterImg: {
    width: width,
    height: height
  }
})

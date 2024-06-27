import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { secondFrameImage } from '@assets/OnBoardScreen/SecondFrameImage';
import { SvgXml } from 'react-native-svg';
import { thirdFrameIcon } from '@assets/OnBoardScreen/ThirdFrameImage';

export const Second = () => {
  return (
    <View style={styles.container}>
      <SvgXml xml={thirdFrameIcon as string} width="100%" height="100%" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'visible',
    
  },

})
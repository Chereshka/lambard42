import { StyleSheet, View } from 'react-native'
import React from 'react'

import { SvgXml } from 'react-native-svg';
import { OnBoard3, svgScale } from '@assets/OnBoard';

import wSize from '@utils/dimensions';


const { sWidth } = wSize;


export const Third = () => {
  return (
    <View style={styles.container}>

      <SvgXml xml={OnBoard3} width={sWidth * svgScale - 2} style={{ transform: [{ scale: svgScale }] }} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'visible'
  },

})
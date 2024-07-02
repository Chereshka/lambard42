import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OnBoard5, svgScale } from '@assets/OnBoard'
import { SvgXml } from 'react-native-svg'

import wSize from '@utils/dimensions';


const { sWidth } = wSize;

export const Five = () => {
  return (
    <View>
      
      <SvgXml xml={OnBoard5} width={sWidth * svgScale - 2} style={{ transform: [{ scale: svgScale }] }} />


    </View>
  )
}


const styles = StyleSheet.create({})
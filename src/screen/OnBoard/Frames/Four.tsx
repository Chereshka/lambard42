import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { OnBoard4, svgScale } from '@assets/OnBoard';

import wSize from '@utils/dimensions';


const { sWidth } = wSize;

export const Four = () => {
  return (
    <View>
      
      <SvgXml xml={OnBoard4} width={sWidth * svgScale - 2} style={{ transform: [{ scale: svgScale }] }} />

    </View>
  )
}

const styles = StyleSheet.create({})
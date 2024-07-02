import { StyleSheet, View } from 'react-native'
import React from 'react'

import { SvgXml } from 'react-native-svg';
import { Text } from '@UI/Text';


import { useTranslation } from 'react-i18next';
import { OnBoard1, svgScale } from '@assets/OnBoard';

import wSize from '@utils/dimensions';

const { sWidth, sHeight } = wSize;
// width 392*884 
export const First = () => {
  const { t } = useTranslation('auth');

  return (
    <View style={styles.container}>
      <SvgXml xml={OnBoard1} width={sWidth*svgScale-2} style={{transform:[{scale: svgScale}]}}/>      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: sWidth,
    height: sHeight,
    backgroundColor: 'red',
    
  },

})

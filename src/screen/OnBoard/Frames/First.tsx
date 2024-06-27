import { StyleSheet, View } from 'react-native'
import React from 'react'

import { firstFrameImage } from '@assets/OnBoardScreen/FirstFrameImage';
import { SvgXml } from 'react-native-svg';
import { Text } from '@UI/Text';


import { useTranslation } from 'react-i18next';

export const First = () => {
  const { t } = useTranslation('auth');

  return (
    <View style={styles.container}>
      <SvgXml xml={firstFrameImage as string} width="100%" height="100%" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})

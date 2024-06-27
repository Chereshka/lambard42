import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo } from 'react'

import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

import { COLORS } from '@styles'

import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

import { First, Second, Third, Four, Five } from './Frames'
import { CarouselRenderItemInfo } from 'react-native-reanimated-carousel/lib/typescript/types';


export const ON_BOARD_NAVIGATION_SETTINGS: NativeStackNavigationOptions = {
  headerShown: false
}

import wSize from '@utils/dimensions';

const { sWidth, sHeight } = wSize

const OnBoard = () => {

  const carouselRef: React.RefObject<ICarouselInstance> = React.createRef();

  const data = [<First />, <Second />, <Third />, <Four />, <Five />];


  const renderItem = useCallback(({ item, index }: CarouselRenderItemInfo<React.JSX.Element>) => {
    return item;
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        ref={carouselRef}
        loop={false}
        width={sWidth }
        height={sHeight}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        style={{
          overflow: 'visible'
          // width: width,
          // height: COMPONENT_HEGHT,          
        }}
        data={data}
        renderItem={renderItem}
        scrollAnimationDuration={500}
      // onSnapToItem={onIndexChanged}
      />
    </SafeAreaView>
  )
}

export default OnBoard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SUPPORTIVE_BLUE,
    justifyContent: 'center',
    alignItems: 'center'
  }
  ,
})
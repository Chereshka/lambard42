import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo } from 'react'

import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

import { First, Second, Third, Four, Five } from '../Frames'
import { CarouselRenderItemInfo } from 'react-native-reanimated-carousel/lib/typescript/types';


interface IFrameCarousel {
    items: {
        topText?: string,
        frame: string,
        bottomText?: string,
    }[]
}

const size = 1;


export const COMPONENT_WIDTH = 293 * size;
export const COMPONENT_HEGHT = 360 * size;

export const FrameCarousel: React.FC<IFrameCarousel> = ({ items }) => {

    const carouselRef: React.RefObject<ICarouselInstance> = React.createRef();

    const data = [<First/>, <Second/>, <Third/>, <Four/>, <Five/>];

    const renderItem = useCallback(({ item }: CarouselRenderItemInfo<React.JSX.Element>) => {
        return item;
      }, []);

    return (
        <View style={{backgroundColor: 'red'}}>

            <Carousel
                ref={carouselRef}
                loop={false}
                width={COMPONENT_WIDTH + 28}
                height={COMPONENT_HEGHT}
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                }}
                // style={{
                //     width: width,
                //     height: COMPONENT_HEGHT,
                //     backgroundColor: '#fff',
                // }}
                data={data}
                renderItem={renderItem}
                scrollAnimationDuration={500}
                // onSnapToItem={onIndexChanged}
            />
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({})
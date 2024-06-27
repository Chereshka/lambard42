import React, { FC } from 'react'

import { Defs, G, Path, Rect, Svg } from 'react-native-svg';

import { IBottomIcon } from './types';


export const TermsIcon: FC<IBottomIcon> = ({ size, color, ...props }) => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            {...props}>

            <G clip-path="url(#clip0_12016_915)">
                <Path d="M14.8702 1.48352H2.98804C2.30479 1.48352 1.75082 2.03739 1.75082 2.72069V19.7725C1.75082 20.4558 2.30479 21.0097 2.98804 21.0097H15.244C15.9273 21.0097 16.4812 20.4558 16.4812 19.7725V9.2774" stroke={color} stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M13.3394 7.16508H4.89267V5.18537H13.3394V7.16508Z" stroke={color} stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M5 10.7328H13.4468" stroke={color} stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M5 14H13.4468" stroke={color} stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M5 17H13.4468" stroke={color} stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M22.2491 4.9246C22.2491 7.38544 20.2545 9.38039 17.7942 9.38039C15.3339 9.38039 13.3394 7.38544 13.3394 4.9246C13.3394 2.46377 15.3339 0.468819 17.7942 0.468819C20.2545 0.468819 22.2491 2.46377 22.2491 4.9246Z" stroke={color} stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M17.7963 4.31049V7.51575" stroke={color} stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M17.8255 2.8709C17.8807 2.8709 17.9255 2.82612 17.9255 2.7709C17.9255 2.71567 17.8807 2.6709 17.8255 2.6709C17.7703 2.6709 17.7255 2.71569 17.7255 2.7709C17.7255 2.82609 17.7703 2.8709 17.8255 2.8709Z" fill={color} stroke={color} stroke-width="0.8" />
                <Path d="M19.6745 9.17348V11.5544" stroke={color} stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M19.6745 15.7924V22.294C19.6745 22.9773 19.1206 23.5312 18.4373 23.5312H6.1814C5.49806 23.5312 4.94418 22.9773 4.94418 22.294V21.1503" stroke={color} stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </G>
            
            <Defs>
                <clipPath id="clip0_12016_915">
                    <Rect width="24" height="24" fill="white" />
                </clipPath>
            </Defs>

        </Svg>
    )
}
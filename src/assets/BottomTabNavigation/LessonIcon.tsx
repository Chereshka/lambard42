import React, { FC } from 'react'

import { ClipPath, Defs, G, Mask, Path, Svg, Rect } from 'react-native-svg';

import { IBottomIcon } from './types';


export const LessonIcon: FC<IBottomIcon> = ({ size, color, ...props }) => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
            {...props}>

            <G clip-path="url(#clip0_12016_981)">
                <Mask id="mask0_12016_981" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <Path d="M0 7.05719e-05H23.9999V24H0V7.05719e-05Z" fill="white" />
                </Mask>

                <G mask="url(#mask0_12016_981)">
                    <Path d="M11.9999 8.67192V8.22394C11.9999 7.73714 12.2897 7.31972 12.7097 7.07368C13.1263 6.8296 13.4062 6.37721 13.4062 5.85943" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M13.4062 5.85942C13.4062 5.08275 12.7767 4.45317 12 4.45317C11.2233 4.45317 10.5938 5.08275 10.5938 5.85942" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M11.9999 11.6875C12.1121 11.6875 12.2031 11.5966 12.2031 11.4844C12.2031 11.3722 12.1121 11.2813 11.9999 11.2813C11.8878 11.2813 11.7968 11.3722 11.7968 11.4844C11.7968 11.5966 11.8878 11.6875 11.9999 11.6875Z" fill={color} stroke={color} />
                    <Path d="M15.75 17.1094H8.25V19.0781C8.25 19.8548 8.87958 20.4844 9.65625 20.4844H14.3437C15.1204 20.4844 15.75 19.8548 15.75 19.0781V17.1094Z" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M4.96875 7.73442C4.96875 9.39768 5.54803 10.9235 6.51468 12.1257C7.64859 13.5359 8.24999 15.2998 8.24999 17.1094H15.75C15.75 15.2998 16.3514 13.5359 17.4853 12.1257C18.4519 10.9235 19.0312 9.39768 19.0312 7.73442" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M19.0312 7.73442C19.0312 3.85117 15.8832 0.703192 12 0.703192C8.11672 0.703192 4.96875 3.85117 4.96875 7.73442" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M14.3437 20.4844H9.65625V21.8906C9.65625 22.6673 10.2858 23.2969 11.0625 23.2969H12.9375C13.7142 23.2969 14.3437 22.6673 14.3437 21.8906V20.4844Z" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M21.8906 7.73442H23.2968" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M2.10937 7.73442H0.703125" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M21.2969 4.36768L22.6183 3.88669" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M2.70304 11.1012L1.38159 11.5821" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M21.2969 11.1012L22.6183 11.5821" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M2.70304 4.36768L1.38159 3.88669" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </G>
            </G>
            
            <Defs>
                <ClipPath id="clip0_12016_981">
                    <Rect width="24" height="24" fill="white" />
                </ClipPath>
            </Defs>

        </Svg>
    )
}
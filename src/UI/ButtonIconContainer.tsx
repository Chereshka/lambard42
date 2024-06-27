import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { IBottomIcon } from '@assets/BottomTabNavigation/types';

import { Text } from './Text';
import { COLORS, OPACITY } from '@styles';
import { HOME_PAGES } from '@navigation/HomeNavigation';
import { BookIcon, LessonIcon, QuestionIcon, RubIcon, TermsIcon } from '@assets/BottomTabNavigation';


interface ButtonIconContainerProps {
    onPress: () => void;
    title: string;
    focused: boolean;
}


const ICON_SIZE = 24;

const ButtonIconContainer: FC<ButtonIconContainerProps> = ({ onPress, title, focused }) => {

    const Icon: any = (title: string, color: string) => {
        switch (title) {
            case HOME_PAGES.Book:
                return <RubIcon color={color} size={ICON_SIZE} />;

            case HOME_PAGES.Book:
                return <RubIcon color={color} size={ICON_SIZE} />;

            case HOME_PAGES.Book:
                return <RubIcon color={color} size={ICON_SIZE} />;

            case HOME_PAGES.Book:
                return <RubIcon color={color} size={ICON_SIZE} />;

            case HOME_PAGES.Book:
                return <RubIcon color={color} size={ICON_SIZE} />;

            default:
                return null;
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon title={title} size={ICON_SIZE} color={focused ? COLORS.TAB_BAR.FOCUSED : COLORS.TAB_BAR.UNFOCUSED} />
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
    },
});

export default ButtonIconContainer;

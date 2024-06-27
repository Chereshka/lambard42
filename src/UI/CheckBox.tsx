import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ICheckBoxProps } from './types';

import ReactCheckBox from '@react-native-community/checkbox';

import { Text } from './Text';
import { COLORS } from '@styles';


export const CheckBox: React.FC<ICheckBoxProps> = ({ value, onValueChange, text, textStyle }) => {

  const onChange = () => onValueChange(!value)

  return (
    <TouchableOpacity style={styles.container} onPress={onChange} activeOpacity={2}>
      <ReactCheckBox
        value={value}
        onValueChange={onValueChange}
        tintColors={{ true: COLORS.ACCENT, false: COLORS.BACKGROUND_CARDS }}
        onFillColor={COLORS.DISABLED}

      />
      <Text style={textStyle} weight='bold'>
        {text}
      </Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

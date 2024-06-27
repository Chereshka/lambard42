import React from 'react';
import { Text as ReactText, StyleSheet } from 'react-native';

import { ICustomTextProps } from './types';

import weightStyles from './weightStyles';


export const Text: React.FC<ICustomTextProps> = ({ style, children, weight, ...rest }) => {

  const combinedStyles = weight ? [styles.text, weightStyles[weight], style] : [styles.text, style];

  return (
    <ReactText style={combinedStyles} {...rest}>
      {children}
    </ReactText>
  );
};


const styles = StyleSheet.create({
  text: {
    fontFamily: 'Nunito-Regular',    
  },
});

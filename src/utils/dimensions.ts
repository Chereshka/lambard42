import { Dimensions, Platform } from 'react-native';
const _wSize = Dimensions.get('window');
export const navBarHeight = Platform.OS === 'ios' ? 64 : 54;
const wSize = {
  sHeight: _wSize.height,
  sWidth: _wSize.width,
  wHeight: _wSize.height - navBarHeight,
  wWidth: _wSize.width,
  unit: Math.min(_wSize.height / 812, _wSize.width / 375),
};

export const ON_BOARD_SIZES = {
  carousel: {
    component: {
      width: wSize.sWidth - 20,
      height: (wSize.sWidth - 20) / 390 * 725,
    }

  }
}


export default wSize;

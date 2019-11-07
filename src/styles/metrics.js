import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const metrics = {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

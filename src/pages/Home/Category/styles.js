import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../../styles';

export default StyleSheet.create({
  container: {
    paddingRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 95,
    height: 65,
    borderRadius: 5,
  },
  title: {
    fontSize: 14,
    marginTop: metrics.baseMargin,
    color: colors.dark,
  },
});

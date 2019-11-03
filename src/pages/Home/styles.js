import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.basePadding,
  },
  scroll: {
    paddingTop: metrics.basePadding,
    marginBottom: metrics.baseMargin * 2,
  },
  buttonIcon: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.darker,
  },
  titleLabel: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

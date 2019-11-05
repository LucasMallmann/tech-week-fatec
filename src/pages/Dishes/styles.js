import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.basePadding,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: metrics.baseMargin,
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 100 / 2,
  },
  title: {
    color: colors.darker,
    fontSize: 24,
    fontWeight: 'bold',
  },
  restaurantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: metrics.baseMargin,
  },
  dot: {
    backgroundColor: colors.regular,
    width: 3,
    height: 3,
    borderRadius: 3 / 2,
    marginHorizontal: metrics.baseMargin / 2,
  },
  label: {
    fontSize: 16,
    color: colors.regular,
  },
  delivery: {
    fontSize: 16,
    color: colors.darker,
  },
  statusContainer: {
    backgroundColor: colors.light,
  },
});

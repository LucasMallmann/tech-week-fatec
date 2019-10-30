import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    // flex: 1,
    marginVertical: metrics.baseMargin * 1.5,
    borderWidth: 1,
    borderColor: colors.light,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.4,
    borderStyle: 'solid',
    borderRightColor: colors.light,
    borderRightWidth: 1,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 4,
    resizeMode: 'contain',
  },
  aboutContainer: {
    paddingTop: metrics.basePadding / 2,
    paddingLeft: metrics.basePadding / 2,
    paddingBottom: metrics.basePadding / 2,
  },
  title: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 120,
    marginVertical: metrics.baseMargin / 1.5,
  },
  dot: {
    backgroundColor: colors.regular,
    width: 3,
    height: 3,
    borderRadius: 3 / 2,
  },
  label: {
    color: colors.regular,
  },
  delivery: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 200,
  },
  deliveryLabel: {
    fontSize: 14,
    color: colors.regular,
  },
  free: {
    color: colors.success,
  },
});

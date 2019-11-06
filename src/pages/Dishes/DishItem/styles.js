import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: metrics.baseMargin,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 4,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: metrics.baseMargin / 1.5,
  },

  dot: {
    backgroundColor: colors.regular,
    width: 3,
    height: 3,
    borderRadius: 3 / 2,
    marginRight: metrics.baseMargin / 2,
  },
  label: {
    marginRight: metrics.baseMargin / 2,
    color: colors.regular,
  },
  delivery: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.baseMargin / 1.5,
  },
  deliveryLabel: {
    fontSize: 15,
    color: colors.regular,
  },
  free: {
    marginLeft: metrics.baseMargin,
    color: colors.success,
    fontSize: 15,
  },
});

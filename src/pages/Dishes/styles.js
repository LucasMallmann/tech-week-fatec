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
    marginTop: metrics.baseMargin,
  },
  scroll: {
    paddingTop: metrics.basePadding,
    marginBottom: metrics.baseMargin * 2,
  },
  dishesScroll: {
    marginBottom: 10,
  },
  dishesTitle: {
    marginTop: 10,
    fontSize: 18,
    color: colors.black,
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
    marginTop: metrics.baseMargin * 1,
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: metrics.baseMargin / 1.5,
    color: colors.darker,
    borderWidth: 1,
    borderColor: colors.light,
    alignSelf: 'flex-start',
    padding: 3,
    borderRadius: metrics.baseRadius,
  },
  status: {
    marginTop: metrics.baseMargin * 2,
    backgroundColor: colors.lighter,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: metrics.baseMargin * 2,
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderColor: colors.primary,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  open: {
    color: colors.dark,
    fontSize: 18,
    marginBottom: metrics.baseMargin,
  },
  loading: {
    marginTop: metrics.baseMargin * 2.5,
  },
});

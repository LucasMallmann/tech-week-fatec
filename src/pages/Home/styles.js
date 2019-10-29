import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    paddingHorizontal: metrics.basePadding,
  },
  form: {
    paddingTop: metrics.baseMargin * 1.5,
    paddingBottom: metrics.baseMargin * 1.5,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.white,
    flex: 1,
    marginRight: metrics.baseMargin,
    height: 34,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding / 2,
    paddingTop: metrics.basePadding / 2,
    paddingBottom: metrics.basePadding / 2,
  },
  buttonIcon: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.darker,
  },
  category: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

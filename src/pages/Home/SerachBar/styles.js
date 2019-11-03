import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

export default StyleSheet.create({
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
    backgroundColor: colors.lighter,
    color: colors.dark,
    flex: 1,
    marginRight: metrics.baseMargin,
    height: 34,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding / 2,
    paddingTop: metrics.basePadding / 2,
    paddingBottom: metrics.basePadding / 2,
  },
});

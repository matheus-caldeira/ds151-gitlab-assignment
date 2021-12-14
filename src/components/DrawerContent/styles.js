import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },

  contentAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },

  contentFollwers: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  boldText: {
    fontWeight: "bold"
  },

  contentItems: {
    marginTop: 15,
  }


});

export default styles;
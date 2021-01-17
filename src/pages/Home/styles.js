import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#222831',
  },
  container: {
    marginHorizontal: 10,
  },
  searchInput: {
    color: 'white',
  },
  pickerInput: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30,
  },
  pickerPlaceholder: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  item: {
    flex: 1,
    padding: 10,
    backgroundColor: '#393e46',
    marginVertical: 8,
    shadowColor: '#eeeeee',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'column',
    marginBottom: 5,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  h1: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  desc: {
    color: 'white',
    fontSize: 14,
  },
  definitionItem: {
    marginBottom: 5,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  greyBg: {
    backgroundColor: 'grey',
  },
});

export default styles;

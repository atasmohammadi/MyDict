import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#222831',
  },
  item: {
    flex: 1,
    padding: 10,
    backgroundColor: '#393e46',
    marginVertical: 8,
    marginHorizontal: 12,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    color: 'white',
    fontSize: 14,
  },
  definitionItem: {
    marginBottom: 5,
  },
});

export default styles;

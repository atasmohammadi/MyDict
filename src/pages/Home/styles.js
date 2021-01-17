import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  container: {
    marginHorizontal: 10,
  },
  searchInput: {
    color: 'grey',
  },
  pickerInput: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'grey',
    paddingRight: 30,
  },
  pickerPlaceholder: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
  },
  item: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginVertical: 8,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'column',
    marginBottom: 5,
  },
  title: {
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold',
  },
  h1: {
    color: 'grey',
    fontSize: 28,
    fontWeight: 'bold',
  },
  desc: {
    color: 'grey',
    fontSize: 14,
  },
  definitionItem: {
    marginBottom: 5,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  greyBg: {
    backgroundColor: '#d3d3d3',
  },
});

export default styles;

import React from 'react';
import {StatusBar, SafeAreaView, FlatList, View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {useInjectSaga} from '../../utils/injectSaga';
import * as actions from './actions';
import styles from './styles';
import {languages, initialPhrases} from '../../constants';

import * as selectors from './selectors';
import saga from './saga';

function Home(props) {
  const {getDefinition, definitions, error} = props;

  useInjectSaga({key: 'Home', saga});
  const [searchQuery, updateSearchQuery] = React.useState('');
  const [language, setLanguage] = React.useState(languages.en.code);

  const definitionsArray = Object.values(definitions);

  function search() {
    if(!searchQuery) return
    getDefinition(searchQuery, language)
  }

  // Render list item ( word )
  function renderItem({item: {word, phonetics, meanings}}) {
    return (
      <View style={styles.item} key={word}>
        <>
          {word && (
            <View style={styles.row}>
              <Text style={styles.title}>{word}</Text>
            </View>
          )}

          {phonetics.length && (
            <View style={styles.row}>
              {phonetics.map((phonetic) => (
                <Text style={styles.desc}>{phonetic.text}</Text>
              ))}
            </View>
          )}

          {meanings.length && (
            <View style={styles.row}>
              {meanings.map((meaning) => (
                <View style={styles.definitionItem}>
                  <Text
                    style={styles.title}>{`(${meaning.partOfSpeech})`}</Text>
                  {meaning.definitions.map((def) => (
                    <View style={styles.definitionItem}>
                      {def.definition && (
                        <Text style={styles.desc}>{def.definition}</Text>
                      )}
                      {def.example && (
                        <Text style={styles.desc}>{def.example}</Text>
                      )}
                      {def.synonyms && (
                        <Text style={styles.desc}>
                          Synonyms: {def.synonyms.join(', ')}
                        </Text>
                      )}
                    </View>
                  ))}
                </View>
              ))}
            </View>
          )}
        </>
      </View>
    );
  }

  function searchBar() {
    return (
      <View styles={styles.searchContainer}>
        <Input
          containerStyle={{}}
          rightIcon={<Icon name="close" size={20} color="#fff" />}
          placeholder={`Enter word in ${languages[language].language}`}
          onChangeText={updateSearchQuery}
          inputStyle={{ color: 'white' }}
        />
        <RNPickerSelect
            onValueChange={setLanguage}
            value={language}
            items={Object.values(languages).map(i => ({value: i.code, label: i.language}))}
            style={{
              iconContainer: {
                top: 20,
                right: 10,
              },
              placeholder: {
                color: 'white',
                fontSize: 12,
                fontWeight: 'bold',
              },
              inputIOS: {
                fontSize: 16,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                color: 'white',
                paddingRight: 30, // to ensure the text is never behind the icon
              },
              inputAndroid: {
                fontSize: 16,
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderWidth: 0.5,
                borderColor: 'purple',
                borderRadius: 8,
                color: 'white',
                paddingRight: 30, // to ensure the text is never behind the icon
              },
            }}
        />
        <Button
          onPress={search}
          title="Search"
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#222831" />
      {searchBar()}
      {error && <Text style={styles.error}>Error: {error}</Text>}
      <FlatList
        data={definitionsArray}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.word)}
        extraData={definitionsArray}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = createStructuredSelector({
  definitions: selectors.makeSelectDefinitions(),
  loading: selectors.makeSelectLoading(),
  error: selectors.makeSelectError(),
  success: selectors.makeSelectSuccess(),
});

function mapDispatchToProps(dispatch) {
  return {
    getDefinition: (word, language = languages.en.code) =>
      dispatch(actions.getDefinition(word, language)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, React.memo)(Home);

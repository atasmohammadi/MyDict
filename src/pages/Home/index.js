import React, {useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  FlatList,
  View,
  Text,
  Keyboard,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {useInjectSaga} from '../../utils/injectSaga';
import * as actions from './actions';
import styles from './styles';
import {languages, secondLanguages} from '../../constants';

import * as selectors from './selectors';
import saga from './saga';

function Home(props) {
  const {getDefinition, definitions, error} = props;

  useInjectSaga({key: 'Home', saga});
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('en');
  const [secondLanguage, setSecondLanguage] = useState('fa');
  const definitionsArray = Object.values(definitions);

  function search() {
    if (!searchQuery) {
      return;
    }
    Keyboard.dismiss();
    getDefinition(searchQuery, language, secondLanguage);
    setSearchQuery('');
  }

  // Render list item ( word )
  function renderItem({item: {word, phonetics, meanings, translation}}) {
    return (
      <View style={styles.item} key={word.toString()}>
        {word && (
          <View style={styles.row}>
            <Text style={styles.h1}>{word}</Text>
          </View>
        )}

        {phonetics && (
          <View style={styles.row}>
            {phonetics.map((phonetic) => (
              <Text key={phonetic.text} style={styles.desc}>
                {phonetic.text}
              </Text>
            ))}
          </View>
        )}

        {translation && (
          <View style={styles.row}>
            {translation
              .filter((j) => !!j.translation)
              .map((translationItem) => (
                <Text key={translationItem.language} style={styles.desc}>
                  <Text style={styles.title}>
                    {secondLanguages[translationItem.language]}:
                  </Text>{' '}
                  {Array.isArray(translationItem.translation)
                    ? translationItem.translation.join(', ')
                    : translationItem.translation}
                </Text>
              ))}
          </View>
        )}

        {meanings && (
          <View style={styles.row}>
            {meanings.map((meaning, meaningIndex) => (
              <>
                <View style={styles.definitionItem} key={meaning.partOfSpeech}>
                  <Text
                    style={styles.title}>{`(${meaning.partOfSpeech})`}</Text>
                  {meaning.definitions.map((def, defIndex) => (
                    <>
                      <View key={def.definition} style={styles.definitionItem}>
                        {def.definition && (
                          <>
                            <Text style={styles.title}>Definition:</Text>
                            <Text style={styles.desc}>{def.definition}</Text>
                          </>
                        )}
                        {def.example && (
                          <>
                            <Text style={styles.title}>Example:</Text>
                            <Text style={styles.desc}>{def.example}</Text>
                          </>
                        )}
                        {def.synonyms && (
                          <>
                            <Text style={styles.title}>Synonyms:</Text>
                            <Text style={styles.desc}>
                              {def.synonyms.join(', ')}
                            </Text>
                          </>
                        )}
                      </View>
                      {defIndex + 1 < meaning.definitions.length && (
                        <View style={{...styles.line, ...styles.greyBg}} />
                      )}
                    </>
                  ))}
                </View>
                {meaningIndex + 1 < meanings.length && (
                  <View style={styles.line} />
                )}
              </>
            ))}
          </View>
        )}
      </View>
    );
  }

  function updateSearch(s = '') {
    setSearchQuery(s)
  }

  function searchBar() {
    return (
      <>
        <Input
          value={searchQuery}
          rightIcon={
            <Icon
              name="close"
              size={20}
              color="#fff"
              onPress={updateSearch}
            />
          }
          placeholder={`Enter word in ${languages[language]}`}
          onChangeText={updateSearch}
          inputStyle={styles.searchInput}
        />
        <View style={{display: 'flex', flexDirection: 'row', marginBottom: 5}}>
          <View
            style={{
              flex: 1,
              marginRight: 3,
            }}>
            <RNPickerSelect
              onValueChange={setLanguage}
              value={language}
              items={Object.keys(languages).map((languageKey) => ({
                value: languageKey,
                label: languages[languageKey],
              }))}
              style={{
                placeholder: styles.pickerPlaceholder,
                inputIOS: styles.pickerInput,
                inputAndroid: styles.pickerInput,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 3,
            }}>
            <RNPickerSelect
              onValueChange={setSecondLanguage}
              value={secondLanguage}
              items={Object.keys(secondLanguages).map((languageKey) => ({
                value: languageKey,
                label: secondLanguages[languageKey],
              }))}
              style={{
                placeholder: styles.pickerPlaceholder,
                inputIOS: styles.pickerInput,
                inputAndroid: styles.pickerInput,
              }}
            />
          </View>
        </View>
        <Button onPress={search} title="Search" />
      </>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#222831" />
        {searchBar()}
        {error && <Text style={styles.error}>Error: {error}</Text>}
        <FlatList
          data={definitionsArray}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.word)}
          extraData={definitionsArray}
        />
      </View>
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
    getDefinition: (word, language, secondLanguage) =>
      dispatch(actions.getDefinition(word, language, secondLanguage)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, React.memo)(Home);

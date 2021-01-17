import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  FlatList,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import * as actions from '../Home/actions';
import styles from '../Home/styles';
import {secondLanguages} from '../../constants';

import * as selectors from '../Home/selectors';

function Saved(props) {
  const {toggleSaved, savedDefinitionsArray} = props;

  // Render list item ( word )
  function renderItem({item: {saved, word, phonetics, meanings, translation}}) {
    return (
      <View style={styles.item} key={word.toString()}>
        {saved && <Icon
              name="star"
              size={20}
              color="#d3d3d3"
              onPress={() => toggleSaved(word)}
            />}
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#222831" />
        <FlatList
          data={savedDefinitionsArray}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.word)}
          extraData={savedDefinitionsArray}
        />
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = createStructuredSelector({
  savedDefinitionsArray: selectors.savedDefinitionsArray,
});

function mapDispatchToProps(dispatch) {
  return {
    toggleSaved: (word) =>
      dispatch(actions.toggleSaved(word)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, React.memo)(Saved);

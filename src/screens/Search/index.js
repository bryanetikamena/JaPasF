import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { SearchBar } from "../../components";
import {fontType, colors } from '../../assets/theme';

const Search = () => {
const [searchPhrase, setSearchPhrase] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        padding: 20    
      },
      header: {
        backgroundColor: '#fff',
        padding: 10, 
        borderRadius: 10,
        position: 'relative',
        marginBottom: 20
      },
});
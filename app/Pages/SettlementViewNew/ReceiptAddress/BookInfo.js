/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class BookInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textinput} />
        <TextInput style={styles.textinput}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/* @flow */

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

export default class RemarkText extends Component {
  render() {
    let props = this.props
    return (
      <Text
        numberOfLines={1}
        {...props}
        style={[styles.remarkText, props.style]}
        >
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  remarkText: {
    color: '#666',
    fontSize: 13,
    maxWidth: 160,
    fontFamily: 'Helvetica'
  },
});

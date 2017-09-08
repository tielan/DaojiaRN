/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import AddressText from './AddressText'

// 选择收货地址 或 新建收货地址
export default class AddressSelect extends Component {
  render() {
    let {title, isNew} = this.props
    return (
      <View style={styles.container}>
        <AddressText style={styles.title}>{title}</AddressText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 20,
    borderColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 20,
    height: 30,
    width: 180,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    lineHeight: 16,
    backgroundColor: 'transparent'
    // lineHeight: 28
  },
});

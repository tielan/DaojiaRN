/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import AddressText from './AddressText'
import IconArrow from '../IconArrow'

// 选择收货地址 或 新建收货地址
export default class AddressSelect extends Component {
  render() {
    let {title, isNew} = this.props
    return (
      <View style={styles.container}>
        {isNew ? <Text style={styles.addAddress}>＋</Text>: null}
        <AddressText style={styles.title}>{title}</AddressText>
        {!isNew ? <IconArrow></IconArrow> : null}
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    lineHeight: 16,
    backgroundColor: 'transparent'
    // lineHeight: 28
  },
  addAddress: {
    fontSize: 24
  }
});

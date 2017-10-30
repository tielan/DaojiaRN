/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RMB from './RMB'

export default class TotalMoney extends Component {
  render() {
    let {totalMoney, totalDiscount} = this.props

    return (
      <View style={styles.container}>
        {totalDiscount ? <Text>已优惠 <RMB></RMB>{totalDiscount.replace(/¥|￥/, '')}</Text> : null}
        <Text>实付金额 <RMB></RMB>{totalMoney.replace(/¥|￥/, '')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 19,
  },
});

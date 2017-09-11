/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

export default class CouponList extends Component {

  _renderItem = ({item}) => (
    <Text>{item.couponName}</Text>
  )

  render() {
    let {voucherList} = this.props
    console.log(voucherList)

    return (
      <FlatList
        horizontal={true}
        data={voucherList}
        renderItem={this._renderItem}>
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
});

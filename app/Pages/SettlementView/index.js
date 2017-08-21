import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import SettleSubmit from './SettleSubmit'
import SettleAddress from './SettleAddress'

export default class SettlementView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SettleAddress></SettleAddress>
        <SettleSubmit></SettleSubmit>
      </View>
    )
  }
}

// 样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
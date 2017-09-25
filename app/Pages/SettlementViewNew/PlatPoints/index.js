/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class PlatPoints extends Component {

  render() {
    let { platPoints } = this.props
    console.log(platPoints);
    if (!platPoints) return null

    return (
      <View style={styles.container}>
        <Image source={uri: 'https://static-o2o.360buyimg.com/daojia/new/images/icon/icon_checkbox_none.png'} style={styles.checkImage}></Image>
        <Text>{platPoints.platPointsDesc}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
});

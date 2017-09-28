/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import IconHelper from '../IconHelper'
export default class PlatPoints extends Component {

  state = {
    checked: false
  }

  render() {
    let { platPoints } = this.props
    console.log(platPoints);
    if (!platPoints) return null

    return (
      let checkURI = this.state.checked ? 'https://static-o2o.360buyimg.com/daojia/new/images/icon/icon_checked.png' : 'https://static-o2o.360buyimg.com/daojia/new/images/icon/icon_checkbox_none.png'

      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <Image source={uri: checkURI} style={styles.checkImage}></Image>
          <Text>{platPoints.platPointsDesc}</Text>
          <IconHelper></IconHelper>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
});

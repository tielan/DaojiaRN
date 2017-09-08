/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import RemarkText from './RemarkText'
import IconMark from '../../../Assets/OrderMark.png'

export default class OrderMark extends Component {
  state = {
    isEdit: false,
    modalVisible: false
  }

  render() {
    let { defaultText } = this.props
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.setState({
            modalVisible: true,
            isEdit: true
          })
        }}>
        <View style={styles.container}>
          <RemarkText style={{maxWidth: 80}}>{ defaultText }</RemarkText>
          {
            this.state.isEdit ?
            <Image source={IconMark} style={styles.iconMark}></Image>
            : null
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  iconMark: {
    width: 13,
    height: 13,
    marginLeft: 10
  }
});

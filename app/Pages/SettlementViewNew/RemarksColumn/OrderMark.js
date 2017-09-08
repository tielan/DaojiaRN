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
import AlertMark from './AlertMark'

export default class OrderMark extends Component {
  state = {
    isEdit: false,
    modalVisible: false
  }

  setModalVisible = (visible, isEdit = false) => {
    this.setState({
      modalVisible: visible,
      isEdit: isEdit
    });
  }

  render() {
    let { defaultText } = this.props
    return (
      <View>
        <AlertMark
          modalVisible={this.state.modalVisible}
          setModalVisible={this.setModalVisible}
          {...this.props}
        ></AlertMark>
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
      </View>
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

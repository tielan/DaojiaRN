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
    orderMark: '',
    modalVisible: false
  }

  setModalVisible = (visible, orderMark = '') => {
    this.setState({
      modalVisible: visible,
      orderMark: orderMark || this.state.orderMark
    });
  }

  render() {
    let { defaultText } = this.props
    return (
      <View>
        {
          this.state.modalVisible ?
          <AlertMark
            modalVisible={this.state.modalVisible}
            setModalVisible={this.setModalVisible}
            orderMark={this.state.orderMark}
            {...this.props}
          ></AlertMark>: null
        }

        <TouchableWithoutFeedback
          onPress={() => {
            this.setState({
              modalVisible: true
            })
          }}>
          <View style={styles.container}>
            <RemarkText style={{maxWidth: 80}}>
              { this.state.orderMark || defaultText }
            </RemarkText>
            {
              this.state.orderMark ?
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

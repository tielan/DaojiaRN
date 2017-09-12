/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import IconArrow from '../IconArrow'
import RemarkText from './RemarkText'
import PickerConfig from './PickerConfig'

export default class MyComponent extends Component {
  state = {
    modalVisible: false,
    selectedIndex: 0
  }

  setModalVisible = (modalVisible, selectedIndex = 0) => {
    this.setState({
      modalVisible: modalVisible,
      selectedIndex: selectedIndex
    })
  }

  render() {
    let { outOfStockConfig } = this.props
    console.log(outOfStockConfig);
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.setState({
            modalVisible: true
          })
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <PickerConfig
            modalVisible={this.state.modalVisible}
            setModalVisible={this.setModalVisible}
            {...this.props}
          ></PickerConfig>
          <RemarkText>
            {outOfStockConfig[this.state.selectedIndex]}
          </RemarkText>
          <IconArrow direction='bottom' style={styles.arrow}></IconArrow>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  arrow: {
    tintColor: '#666',
    marginLeft: 10,
    width: 13,
    height: 13
  }
});

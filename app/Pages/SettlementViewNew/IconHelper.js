import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

import Help from '../../Assets/help.png'
import AlertFreight from './AlertFreight'

export default class IconHelper extends Component {
  static propTypes = {
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
  }

  state = {
    modalVisible: false,
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  render () {
    return (
      <View>
        <AlertFreight
          modalVisible={this.state.modalVisible}
          setModalVisible={this.setModalVisible}
          {...this.props}
          ></AlertFreight>
        <TouchableWithoutFeedback onPress={() => {
          this.setModalVisible(true)
        }}>
          <Image style={styles.iconHelp} source={Help}></Image>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconHelp: {
    marginTop: 3,
    width: 16,
    height: 16,
    tintColor: '#999',
    marginHorizontal: 5,
    alignSelf: 'center'
  }
})

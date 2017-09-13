import React, { Component } from 'react'

import {Provider} from 'mobx-react/native'
import store from './SettlementStore'
import SettlementView from './SettlementView'

export default class Settlement extends Component {

  render() {
    return (
      <Provider settle={store}>
        <SettlementView></SettlementView>
      </Provider>
    )
  }
}

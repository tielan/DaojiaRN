import { action, observable } from "mobx"
import merge from "lodash/merge"


import TestData from './_TestData'

class SettlementStore {
  @observable accountData = {
    orgCode: '71472',
    storeId: 10003450,
    storeName: '华冠-亦庄店',
    openJPIndustry: 1,
    orderPayType: 'first',
    fromSource: 2,
    jingBeansNum: 0,
    source: 2,
    channelType: '0',
  }
  submitData = {

  }
  @observable accountResult = TestData.result

  @action
  updateAccountData = data => {
    console.log('updateAccountData',data);
    this.accountData = merge(this.accountData, data)
  }
}

export default new SettlementStore

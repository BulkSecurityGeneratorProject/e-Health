import { call, put } from 'redux-saga/effects'

import ChestionarActions from './chestionar.reducer'
import { callApi } from '../../../shared/sagas/call-api.saga'

// attempts to request a password change
export function * chestionarSend (api, { scor_frica, scor_ezitare }) {
  const apiCall = call(api.chestionar, scor_frica, scor_ezitare)
  const response = yield call(callApi, apiCall)
  // success?
  if (response.ok) {
    console.tron.log('ChestionarRequest - OK')
    yield put(ChestionarSendActions.ChestionarSendSuccess())
  } else {
    console.tron.log('Chestionar - FAIL')
    yield put(ChestionarActions.ChestionarSendFailure('WRONG'))
  }
}
//
//export function * chestionarRecv (api, { }) {
//  const apiCall = call(api.chestionar)
//  const response = yield call(callApi, apiCall)
//  // success?
//  if (response.ok) {
//    console.tron.log('ChestionarRequest - OK')
//    yield put(ChestionarRecvActions.ChestionarRecvSuccess())
//  } else {
//    console.tron.log('Chestionar - FAIL')
//    yield put(ChestionarActions.ChestionarRecvFailure('WRONG'))
//  }
//}
//

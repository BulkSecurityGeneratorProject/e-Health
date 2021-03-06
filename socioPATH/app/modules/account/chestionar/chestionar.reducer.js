//import { createReducer, createActions } from 'reduxsauce'
//import Immutable from 'seamless-immutable'
///* ------------- Types and Action Creators ------------- */
//
//const { Types, Creators } = createActions({
//  registerRequest: ['questions'],
//  registerSuccess: ['response'],
//  registerFailure: ['error']
//})
//
//export const RegisterTypes = Types
//export default Creators
//
///* ------------- Initial State ------------- */
//
//export const INITIAL_STATE = Immutable({
//  error: null,
//  fetching: false
//})
//
///* ------------- Reducers ------------- */
//
//// we're attempting to register
//export const request = (state) => state.merge({ fetching: true })
//
//// we've successfully registered
//export const success = (state) => state.merge({ fetching: false, error: null })
//
//// we've had a problem registering
//export const failure = (state, { error }) => state.merge({ fetching: false, error })
//
///* ------------- Hookup Reducers To Types ------------- */
//
//export const reducer = createReducer(INITIAL_STATE, {
//  [Types.CHESTIONAR_REQUEST]: request,
//  [Types.CHESTIONAR_SUCCESS]: success,
//  [Types.CHESTIONAR_FAILURE]: failure
//})
//
///* ------------- Selectors ------------- */

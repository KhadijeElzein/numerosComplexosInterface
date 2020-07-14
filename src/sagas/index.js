import {all} from 'redux-saga/effects'
import {watcherFetchNumeros} from './sagas';

export default function* rootSaga(){
    yield all([watcherFetchNumeros()]);
}
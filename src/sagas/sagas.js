import {call,put,takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {actions} from '../actions';

const API_URL= '/api/numeroscomplexos'
function* workerAdicionaNumero(action){
    try{        
        const headers = {};
        if(action.payload.realn1 !== '' && action.payload.realn1 !== undefined)
            headers['realNumeroUm'] = action.payload.realn1;
        if(action.payload.realn2 !== '' && action.payload.realn2 !== undefined)
            headers['realNumeroDois'] = action.payload.realn2;
        if(action.payload.imagn1 !== '' && action.payload.imagn1 !== undefined)
            headers['imaginariaNumeroUm'] = action.payload.imagn1;
        if(action.payload.imagn2 !== '' && action.payload.imagn2 !== undefined)
            headers['imaginariaNumeroDois'] = action.payload.imagn2;
        const response = yield call(axios.get, API_URL+'/adicionar',{
            headers:headers,
        });        
        yield put({
            type:actions.ADICIONAR_NUMERO_SUCCEEDED,
            payload: response.data,
        });
    }catch(error){
        console.log(error);
        yield put({
            type:actions.ADICIONAR_NUMERO_FAILED,
            payload: error,
        });
    }
}

function* workerMultiplicaNumero(action){
    try{        
        const headers = {};
        if(action.payload.realn1 !== '' && action.payload.realn1 !== undefined)
            headers['realNumeroUm'] = action.payload.realn1;
        if(action.payload.realn2 !== '' && action.payload.realn2 !== undefined)
            headers['realNumeroDois'] = action.payload.realn2;
        if(action.payload.imagn1 !== '' && action.payload.imagn1 !== undefined)
            headers['imaginariaNumeroUm'] = action.payload.imagn1;
        if(action.payload.imagn2 !== '' && action.payload.imagn2 !== undefined)
            headers['imaginariaNumeroDois'] = action.payload.imagn2;
        const response = yield call(axios.get, API_URL+'/multiplicar',{
            headers:headers,
        });        
        yield put({
            type:actions.MULTIPLICAR_NUMERO_SUCCEEDED,
            payload: response.data,
        });
    }catch(error){
        console.log(error);
        yield put({
            type:actions.MULTIPLICAR_NUMERO_FAILED,
            payload: error,
        });
    }
}
export function* watcherFetchNumeros(){
    yield takeEvery(actions.ADICIONAR_NUMERO_REQUESTED, workerAdicionaNumero);
    yield takeEvery(actions.MULTIPLICAR_NUMERO_REQUESTED, workerMultiplicaNumero);
}
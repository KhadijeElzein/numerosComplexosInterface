import React, {useState,useRef} from  'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../../actions';
import {Messages} from 'primereact/messages';

const Form = () => {
    let messages = useRef(null);
    const {resultado} = useSelector(store => store.reducer);
    const dispatch = useDispatch();
    const [realn1, setRealn1] = useState('');
    const [realn2, setRealn2] = useState('');
    const [imagn1, setImagn1] = useState('');
    const [imagn2, setImagn2] = useState('');
    const inputHandler1 = event => {
        setRealn1(event.target.value);
    };

    const inputHandler2 = event => {
        setImagn1(event.target.value);
    };

    const inputHandler3 = event => {
        setRealn2(event.target.value);
    };

    const inputHandler4 = event => {
        setImagn2(event.target.value);
    };

    const setFiltro = () => {
        let filter = {};
        let msg = [];
        if(realn1!== undefined && realn1!==null){
            if(isNaN(realn1)){
                msg.push({severity: 'error', summary: 'Erro', detail: 'Parte real do número 1 deve ser um número real'});
                filter["erro"] = true;
            }
            filter["realn1"] = realn1;
        }
        if(imagn1!== undefined && imagn1!==null){
            if(isNaN(imagn1)){
                msg.push({severity: 'error', summary: 'Erro', detail: 'Parte imaginária do número 1 deve ser um número real'});
                filter["erro"] = true;
            }
            filter["imagn1"] = imagn1;
        }
        if(realn2!== undefined && realn2!==null){
            if(isNaN(realn2)){
                msg.push({severity: 'error', summary: 'Erro', detail: 'Parte real do número 2 deve ser um número real'});
                filter["erro"] = true;
            }
            filter["realn2"] = realn2;
        }
        if(imagn2!== undefined && imagn2!==null)
            if(isNaN(imagn2)){
                msg.push({severity: 'error', summary: 'Erro', detail: 'Parte imaginária do número 2 deve ser um número real'});
                filter["erro"] = true;
            }
            filter["imagn2"] = imagn2;
        messages.current.show(msg);
        return filter;
        };
    const onAdicionar = () => {
        let filter = setFiltro();
        if(filter.erro === undefined)
            dispatch({
                type: actions.ADICIONAR_NUMERO_REQUESTED,
                payload: filter,
            });
    };
    const onMultiplicar = () => {
        let filter = setFiltro();
        dispatch({
            type: actions.MULTIPLICAR_NUMERO_REQUESTED,
            payload: filter,
        });
    };
    return (
        <>
        <Messages ref={messages} />
        <div className='p-grid'>
            <div className='p-col-12 p-md-6 p-lg-6'>
                <label>Parte Real número 1</label>
                <span className='p-fluid'>
                    <InputText value = {realn1} onChange = {inputHandler1}/>
                </span>
            </div>
            <div className='p-col-12 p-md-6 p-lg-6'>
                <label>Parte Imaginária número 1</label>
                <span className='p-fluid'>
                    <InputText value = {imagn1}  onChange = {inputHandler2} />
                </span>
            </div>
            <div className='p-col-12 p-md-6 p-lg-6'>
                <label>Parte Real número 2 </label>
                <span className='p-fluid'>
                    <InputText value = {realn2} onChange = {inputHandler3} />
                </span>
            </div>
            <div className='p-col-12 p-md-6 p-lg-6'>
                <label>Parte Imaginária número 2</label>
                <span className='p-fluid'>
                    <InputText value = {imagn2} onChange = {inputHandler4} />
                </span>
            </div>
        </div>
         <div className='p-grid p-justify-center'>
         <div className='p-col-12 p-md-6 p-lg-2'>
             <Button  label="Adicionar Números Complexos" onClick = {onAdicionar} />
         </div>
         <div className='p-col-12 p-md-6 p-lg-2'>
             <Button  label="Multiplicar Números Complexos" onClick = {onMultiplicar}/>
         </div>
     </div>
     <div className='p-grid'>
            <div className='p-col-12 p-md-12 p-lg-12'>
                <label>Resultado</label>
                <span className='p-fluid'>
                    <InputText value={resultado} readOnly/>
                </span>
            </div>
        </div>
     </>
    );
};
export default Form;
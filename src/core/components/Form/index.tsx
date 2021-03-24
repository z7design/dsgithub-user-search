import React from 'react';
import BaseForm from '../BaseForm';
import './styles.scss';

const Form = () => {
    return (
        <BaseForm title="Encontre um perfil Github">
            <input type="text" className="inputForm"/>
        </BaseForm>
    );
}

export default Form;
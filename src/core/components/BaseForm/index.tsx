import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../Button';
import './styles.scss';

type Props = {
    title: string;
    children: React.ReactNode;
}

const BaseForm = ({ title, children }: Props) => {
    const history = useHistory();

    const handleEncontrar = () => {
        history.push('../');
    }

    return (
        <div className="search-form">
            <h1  className="title-search">
                {title}
            </h1>
          {children}
           <button className="btn-base" onClick={handleEncontrar}> 
                Encontrar
           </button>
           
        </div>
    );
}

export default BaseForm;
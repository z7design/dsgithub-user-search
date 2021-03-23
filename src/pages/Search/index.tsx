import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/Button';

const Search = () => (
<div className="serach-container">
    <h1  className="title-seach">
        Encontre um perfil Github
    </h1>
    <input type="text"/>

  <Link to="/result">
    <Button text="Encontrar"/>
  </Link>

</div>
)
export default Search;


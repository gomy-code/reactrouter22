import React from 'react';
import {Link} from 'react-router-dom';
function Accueil() {
    return (
        <div>
<ul style={{listStyle:'none'}}>
    <Link to="/">
         <li>Accueil</li>
         </Link>
         <Link to="/Category">
         <li>Category</li>
         </Link>
         <Link to="/Desproduits">
         <li>Desproduits</li>
         </Link>
         <Link to="/Admin">
         <li>Zone d'administration</li>
         </Link>
</ul>
        </div>
    )
}
export default  Accueil
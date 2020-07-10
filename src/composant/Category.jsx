import React from 'react'
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';
function Category() {
    return (
        <div>
            <Router>
        <ul style={{listStyle:'none'}}>
            <Link to="/Deschaussures">
            <li>Des chaussures</li>
            </Link>
            <Link to="/Bottes">
            <li>Bottes</li>
            </Link>
            <Link to="/chaussures">
            <li>chaussures</li>
            </Link>
        </ul>
        <Switch>
        <Route path="/chaussures" component={()=> <div>chaussures</div>} />    
        <Route path="/Deschaussures" component={()=> <div>Des chaussures</div>} />    
        <Route path="/Bottes" component={()=> <div>Bottes</div>} />
        </Switch>
        </Router>
        </div>
    )
}
export default Category

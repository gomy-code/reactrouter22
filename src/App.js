import React from 'react';
import Accueil from './composant/Accueil';
import Category from './composant/Category';
import Accueilqqq from './composant/Accueilqqq';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Desproduits from './composant/Desproduits';
function App() {
  return (
    <div className="App">
      <Router>
      <Accueil />
      <Switch>
      <Route path="/" exact component={Accueilqqq} />
      <Route path="/Category" component={Category} />
      <Route path="/Desproduits" component={Desproduits} />
      </Switch  >

      </Router>
    </div>
  );
}

export default App;

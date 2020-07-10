import React from 'react';
import './Produit.css';
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom'
function Desproduits() {
    return (
      <>
      <Router>
      <div>
          <div className="produit">
              <div className="produit2" >
                  <h3> Products</h3>
                  <ul className="produit3">
                      <li>
                          <Link to="/NIKELiteforceBlueSneakers">
                          NIKE Lite force Blue Sneakers
                          </Link>     
                          </li>
                          <li>
                              <Link to="/Polo">
                              U.S. POLO ASSN. Slippers
                              </Link>
                          </li>
                          <li>
                              <Link to="/Adidas">
                            ADIDAS Adispree Running Shoes
                              </Link>
                          </li>
                          <li>
                              <Link to="/LeeCooper">
                              Lee Cooper Mid Sneakers
                              </Link>
                          </li>
                          </ul>     
                                </div>
                                      </div>
                          <center>
                          Please select a product.
                          </center>
                              <Switch>
                              <Route path="/NIKELiteforceBlueSneakers" component={()=> <div className="bbm">
    <h3>NIKE Liteforce Blue Sneakers</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.</p>
    <hr></hr>
    <h4>Avaible</h4>
                              </div>} />
                              <Route path="/Polo" component={()=> <div className="bbm">
                                  <h3>U.S. POLO ASSN. Slippers</h3>
                                  <p>Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.</p>
                                  <hr></hr>
                                  <h4>Avaible</h4>
                                  </div>} />
                                  <Route path="/LeeCooper" component={()=> <div className="bbm">
                                      <h3>Lee Cooper Mid Sneakers</h3>
                                      <p>Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.</p>
                                      <hr></hr>
                                      <h4>Out of stock</h4>
                                  </div>}/>
                                  <Route path="/Adidas" component={()=> <div className="bbm">
                                      <h3>ADIDAS Adispree Running Shoes</h3>
                                 <hr></hr>    
                                      <p>Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.</p>
                                     <h4>Avaible</h4>
                                  </div>}/>
                                  </Switch>
                                            </div>
                                            </Router>
      </>
    )
}
export default Desproduits
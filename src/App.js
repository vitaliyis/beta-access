import React, {useState} from 'react';
import {Navbar} from './components/Navbar/Navbar';
import {Page1} from './components/pages/Page1/Page1';
import {Page2} from './components/pages/Page2/Page2';
import {Home} from './components/pages/Home/Home';
import {Route, Switch} from 'react-router-dom';
import {BetaAccess} from './components/pages/BetaAccess/BetaAccess';
import {WithAuthRedirect} from './components/WithAuthRedirect/WithAuthRedirect';

export const MyContext = React.createContext();

function App() {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <>
    <MyContext.Provider value={{isLogged, setIsLogged}}>
      <Navbar/>
      <div className="container">
          <Switch>
            <Route path="/" exact>
              <WithAuthRedirect>
                <Home />
              </WithAuthRedirect>

            </Route>
            <Route path="/page1">
              <WithAuthRedirect>
                <Page1 />
              </WithAuthRedirect>
            </Route>
            <Route path="/page2">
              <WithAuthRedirect>
                <Page2 />
              </WithAuthRedirect>
            </Route>
            <Route path="/beta">
              <BetaAccess/>
            </Route>
            <Route>
              <BetaAccess/>
            </Route>
          </Switch>
      </div>
    </MyContext.Provider>
    </>
  );
}

export default App;

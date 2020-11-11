import {Navbar} from './components/Navbar/Navbar';
import {Page1} from './components/pages/Page1/Page1';
import {Page2} from './components/pages/Page2/Page2';
import {Home} from './components/pages/Home/Home';
import {Route, Switch} from 'react-router-dom';
import {BetaAccess} from './components/pages/BetaAccess/BetaAccess';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/page1"  component={Page1}/>
          <Route path="/page2"  component={Page2}/>
          <Route component={BetaAccess} />
        </Switch>
      </div>
    </>
  );
}

export default App;

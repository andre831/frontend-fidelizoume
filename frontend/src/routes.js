import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Layout/Navbar';

import Home from './pages/Home';
import Filter from './pages/Filter';

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home } /> 
                <Route exact path="/filters" component={ Filter } /> 
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { Switch, Route, Redirect } from 'react-router-dom';


const AppRouter = () => {
    return (
        <div className="routing">
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
}

export default AppRouter;
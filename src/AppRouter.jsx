import SinglePage from './Components/SinglePage/SinglePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutPage from './Components/AboutPage/AboutPage';


const AppRouter = () => {
    return (
        <div className="routing">
            <Switch>
                <Route path="/home" component={SinglePage} />
                <Route path="/about" component={AboutPage} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
}

export default AppRouter;
import SinglePage from './Components/SinglePage/SinglePage';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutPage from './Components/AboutPage/AboutPage';
import Tour from './Components/Tour/Tour';


const AppRouter = () => {
    return (
        <div className="routing">
            <Switch>
                <Route path="/home" component={SinglePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/tour" component={Tour} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
}

export default AppRouter;
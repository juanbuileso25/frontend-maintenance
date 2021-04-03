
import {
    Switch,
    Route
} from "react-router-dom";

import Inspection from "../components/inspection/Inspection";
import RegisterInspection from "../components/inspection/RegisterInspection";
import SearchInspection from "../components/inspection/SearchInspection";
import Home from "../components/layuot/Home";

export default function AppRouter() {
    return (

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/inspection" component={Inspection} />
            <Route exact path="/register-inspection" component={RegisterInspection} />
            <Route exact path="/search-inspection" component={SearchInspection} />
        </Switch>

    );
}
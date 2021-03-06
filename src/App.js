import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import ReactNotification from 'react-notifications-component'

import Home from './components/layuot/Home';
import Inspection from './components/inspection/Inspection';
import Sidebar from "./components/layuot/Sidebar";
import SearchInspection from "./components/inspection/SearchInspection";
import WorkOrder from "./components/workOrder/WorkOrder";
import SearchWorkOrder from "./components/workOrder/SearchWorkOrder";



function App() {
  return (
    <Fragment>

      <Router>
        <Sidebar />
        <div className="page-content p-2 content">
          <ReactNotification />
          <Switch>
            <Route exact path="/search-inspection/:id" component={SearchInspection} />
            <Route exact path="/search-work-order/:id" component={SearchWorkOrder} />
            <Route exact path="/work-order" component={WorkOrder} />
            <Route exact path="/inspection" component={Inspection} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>

      </Router>



    </Fragment>

  );
}

export default App;

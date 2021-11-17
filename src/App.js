import "./App.css";
import MainNavigation from "./components/layout/MainNavigation";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EmployeeListService from "./services/EmployeeListService";
import SignUpService from "./services/SignUpService";
import LeaveTrackerService from "./services/LeaveTrackerService";
import InterviewTrackerService from "./services/InterviewTrackerService";
import InterviewAnalysis from "./pages/InterviewAnalysis";
import UpdateEmployee from "./components/UpdateEmployee";
import LeaveAnalysisByMonth from "./pages/LeaveAnalysisByMonth";
import InterviewAnalysisByMonth from "./pages/InterviewAnalysisByMonth";
import LeaveAnalysis from "./pages/LeaveAnalysis";
import AuthPage from "./pages/AuthPage";
import AuthContext from "./components/context/auth-context";
import { useContext } from "react";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <MainNavigation />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" component={SignUpService} />
          {!authCtx.isLoggedIn && <Route path="/auth" component={AuthPage} />}
          {authCtx.isLoggedIn && (
            <div>
              <Route path="/employees" component={EmployeeListService} />
              <Route path="/leave-tracker" component={LeaveTrackerService} />
              <Route
                path="/interview-tracker"
                component={InterviewTrackerService}
              />
              <Route path="/UpdateEmployee/:id" component={UpdateEmployee} />

              <Route
                path="/leave-analysis/:month/:year"
                exact
                component={LeaveAnalysisByMonth}
              />
              <Route path="/leave-analysis" exact component={LeaveAnalysis} />
              <Route path="/interview-analysis" component={InterviewAnalysis} />
              <Route
                path="/interview-analysis/:month"
                component={InterviewAnalysisByMonth}
              />
            </div>
          )}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

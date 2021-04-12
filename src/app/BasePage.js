import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import MyLog from "./pages/MyLog";
import Dashboard from "./pages/Dashboard";
import UserOverview from "./pages/UserOverview";
import ProjectsTable from "./pages/Projects";
import MyProfile from "./pages/MyProfile";
import LogReport from "./pages/LogReport";
import Team from "./pages/Team";
import ToDo from "./pages/Todo";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);
const ProfileOverview = lazy(() =>
  import("./modules/UserProfile/ProfileOverview")
);
export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          // <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/myLog" component={MyLog} />
        <ContentRoute path="/team" component={Team} />
        <ContentRoute path="/todos" component={ToDo} />
        <ContentRoute path="/logReport" component={LogReport} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/team" component={Dashboard} />
        <ContentRoute path="/my-page" component={UserOverview} />
        <ContentRoute path="/projects" component={ProjectsTable} />
        <ContentRoute path="/user-profile" component={UserProfilepage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        {/* <Route path="/profile-overview" component={ProfileOverview} /> */}
        <ContentRoute path="/" component={Dashboard} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}

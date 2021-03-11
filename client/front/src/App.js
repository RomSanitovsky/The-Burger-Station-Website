import BackToTop from "./components/web-sections/back-top";
import { Login, useStore } from "./components/authentication/Login";
import Footer from "./components/web-sections/footer";
import MainPage from "./main-page";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./components/authentication/SignUp";
import CreateMenuItem from "./components/menu/create-menu-item";
import EditMenuItem from "./components/menu/edit-menu-item";
import EditUser from "./components/user/edit-user";
import EditBranchItem from "./components/branch/edit-branch-item";
import CreateBranchItem from "./components/branch/create-branch-item";
import create from "zustand";
import { useCookies } from "react-cookie";
import PrivateRoute from "./PrivateRoute";
import { useEffect } from "react";
import Permissions from "./components/utils/Permissions";
import BranchView from "./components/branch/branch-view";
export default function App() {
  // console.log("cookies", cookies.user.status === "success");
  const { setUserData, userData } = useStore();
  console.log("userData", userData);
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  console.log(isEmpty(userData));
  const [cookies] = useCookies();
  // console.log("cookies", cookies.user.data.user.role);
  return (
    <dev>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          {/* <Route path="/premissions" /> */}
          <PrivateRoute path="/home">
            <MainPage />
          </PrivateRoute>
          <Route path="/signup">
            <SignUp />
          </Route>
          {userData.role === "admin" && (
            <PrivateRoute admin path="/createitem">
              <CreateMenuItem />
            </PrivateRoute>
          )}
          {userData.role === "admin" && (
            <PrivateRoute path="/edititem/:id/:name/:price/:type">
              <EditMenuItem />
            </PrivateRoute>
          )}
          <PrivateRoute path="/edituser/:id">
            <EditUser />
          </PrivateRoute>

          {userData.role === "admin" && (
            <PrivateRoute path="/edititem/">
              <EditMenuItem />
            </PrivateRoute>
          )}
          {userData.role === "admin" && (
            <PrivateRoute path="/editbranch/:id">
              <EditBranchItem />
            </PrivateRoute>
          )}
          {/* {userData.role === "admin" ? (
            <PrivateRoute path="/editbranch/:id">
              <EditBranchItem />
            </PrivateRoute>
          ) : (
            <PrivateRoute path="/home">
              <MainPage />
            </PrivateRoute>
          )} */}

          <PrivateRoute path="/branchview/:id">
            <BranchView />
          </PrivateRoute>

          {/* {userData.role === "admin" ? (
            <PrivateRoute path="/createbranch">
              <CreateBranchItem />
            </PrivateRoute>
          ) : (
            <PrivateRoute path="/home">
              <MainPage />
            </PrivateRoute>
          )} */}

          {userData.role === "admin" && (
            <PrivateRoute admin path="/createbranch">
              <CreateBranchItem />
            </PrivateRoute>
          )}
        </Switch>
        {isEmpty(userData) && (
          <div>
            <Footer />
            <BackToTop />
          </div>
        )}
      </BrowserRouter>
    </dev>
  );
}

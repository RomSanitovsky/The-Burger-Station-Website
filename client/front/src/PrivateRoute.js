import React, { useContext, createContext, useState } from "react";
import { useCookies } from "react-cookie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  const [cookies] = useCookies();
  let location = useLocation();

  return (
    <Route
      {...rest}
      render={
        ({ location }) =>
          cookies.user ? (
            // admin ? (
            //   cookies.user.data.user.role === "admin" ? (

            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        //   ) : (
        //     <Redirect
        //       to={{
        //         pathname: "/home",
        //         state: { from: location },
        //       }}
        //     />
        //   )
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: "/",
        //       state: { from: location },
        //     }}
        //   />
        // )
      }
    />
  );
}

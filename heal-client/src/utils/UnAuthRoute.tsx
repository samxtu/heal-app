import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useMeQuery } from "../generated/graphql";

const UnAuthRoute = ({ component: Component, location, ...rest }: any) => {
  const [{ data, fetching }] = useMeQuery();
  useEffect(() => {
    console.log("Checking if not authenticated.");
  }, [data, fetching]);

  return (
    <Route
      {...rest}
      render={(props: JSX.IntrinsicAttributes) =>
        data?.me?.id ? (
          <Redirect
            to={
              location.search.includes("next=")
                ? location.search.split("next=")[1]
                : "/"
            }
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default UnAuthRoute;

import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useMeQuery } from "../generated/graphql";
import { Wrapper } from "../components/Wrapper";

interface IUARProps {
  exact?: boolean;
  location?: any;
  path: string;
  component: React.FC;
}

const AuthRoute: React.FC<IUARProps> = ({
  component: Component,
  location,
  ...rest
}: any) => {
  const [{ data, fetching }] = useMeQuery();
  useEffect(() => {
    console.log("Checking if authenticated.");
  }, [data, fetching]);
  return (
    <Route
      {...rest}
      render={(props: JSX.IntrinsicAttributes) =>
        data?.me?.id ? (
          <Wrapper me={data.me}>
            <Component {...props} />
          </Wrapper>
        ) : (
          <Redirect
            to={`/login${
              location.pathname === "/" ? "" : "?next=" + location.pathname
            }`}
          />
        )
      }
    />
  );
};

export default AuthRoute;

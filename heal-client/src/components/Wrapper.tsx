import React, { createContext, ReactNode } from "react";
import { MeQuery, User } from "../generated/graphql";

interface IWrapperProps {
  me: MeQuery["me"];
  children: ReactNode;
}

export const MeContext = createContext<MeQuery["me"] | undefined>(undefined);

export const Wrapper: React.FC<IWrapperProps> = ({ me, children }) => {
  return (
    <MeContext.Provider value={me}>
      {/* <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          margin: 0,
          padding: 0,
        }}
      > */}
      {/* <div style={{ flex: 1 }}> */}
      {children}
      {/* </div> */}
      {/* </div> */}
    </MeContext.Provider>
  );
};

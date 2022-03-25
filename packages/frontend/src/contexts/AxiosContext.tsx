import axios, { AxiosInstance } from "axios";
import React, { createContext, FC, ReactElement } from "react";
import config from "../config/config";
export const AxiosContext = createContext<{axios?: AxiosInstance}>({});
const AxiosContextWrapper: FC = ({ children }): ReactElement => {
  // Multiple axios instances with different configs can be created,
  // and passed to the underlying child components.
  const instance = axios.create({
    baseURL: config.axios.baseURL,
    timeout: config.axios.timeout
  });
  return (
    <AxiosContext.Provider value={{ axios: instance }}>
      {children}
    </AxiosContext.Provider>
  );
};
export default AxiosContextWrapper;

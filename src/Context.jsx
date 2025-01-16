import { createContext } from "react";
import PropTypes from 'prop-types';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"Hello from context"}>
      {children}
    </AppContext.Provider>
  );
};


AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };

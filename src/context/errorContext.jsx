import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import { errorReducer, initErorrState } from '../reducers/errorReducer';

export const ErrorContext = createContext();

export function ErrorProvider({ children }) {
  const [error, errorDispatch] = useReducer(errorReducer, initErorrState);

  const value = useMemo(() => ({
    error,
    errorDispatch,
  }), [error]);
  return (
    <ErrorContext.Provider value={value}>
      {children}
    </ErrorContext.Provider>
  );
}
ErrorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useError = () => useContext(ErrorContext);

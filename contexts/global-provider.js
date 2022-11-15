import * as Auth from './auth-provider'

export const GlobalProvider = (props) => {
  return (
    <Auth.Provider>
      {props.children}
    </Auth.Provider>
  );
};

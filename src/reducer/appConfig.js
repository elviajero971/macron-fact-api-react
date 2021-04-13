import {useReducer} from 'react';

const baseURL = "http://macronfact.antonin-dev.fr/factjson";
const config = [
  {
    name: "author",
    viewUrl: `${baseURL}/list`,
    navBarData: []
  },
  {
    name: "fact",
    viewUrl: `${baseURL}`,
    navBarData: []
  }
];

const initialValue = {
  config,
  baseURL
};

const reducer = (state) => {
      return state;
}

const AppConfigReducer = () => {
  const [reducerState, reducerAction] = useReducer(reducer, initialValue);
  return [reducerState, reducerAction];
}

export default AppConfigReducer;
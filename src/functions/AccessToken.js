import queryString from "query-string";

const getAccessToken = () => {
  const { access_token } = queryString.parse(window.location.hash);

  return access_token;
};

export default getAccessToken;

const utils = {
  resolveServerURI: function resolveServerAddress() {
    //TODO:make more versatile
    const prodEndpoint = "";
    const apiURI = window.location.href.includes("localhost")
      ? "http://localhost:8000/"
      : prodEndpoint;
    return apiURI;
  },
};
export default utils;

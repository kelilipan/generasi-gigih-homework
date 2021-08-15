module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    css: {
      loaderOptions: () => {
        //i had to do this because CRA hashing my assets in css files
        //this is just DUMB
        //https://github.com/facebook/create-react-app/issues/9870
        return { url: false };
      },
    },
  },
};

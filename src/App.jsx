import React from "react";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aucdev Academy</title>
        <link rel="canonical" href="http://aucdev.com/example" />
        <meta name="description" content="Helmet application" />
      </Helmet>
      Hello world
    </div>
  );
};

export default App;

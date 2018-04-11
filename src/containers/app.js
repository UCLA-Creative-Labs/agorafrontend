import React from "react";
import { Route } from "react-router-dom";

import Home from "./home.js";

const App = () => (
	<div>
		<Route exact path="/" component={Home} />
	</div>
);

export default App;
import React from "react";
import { render } from "react-dom";
import App from "./containers/app.js";

import "./styles/index.css";

const target = document.querySelector("#root");

render(
	<div>
		<App />
	</div>,
	target
);

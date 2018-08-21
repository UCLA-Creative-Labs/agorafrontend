/**
 * Add a description about this file here.
 *
 * @flow
 *
 */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { store, history } from "./reducers/store";

import AppAdmin from "./containers/admin/app-admin";
import "./styles/index.css";

const target = document.querySelector("#root");

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<AppAdmin />
			</div>
		</ConnectedRouter>
	</Provider>,
	target
);

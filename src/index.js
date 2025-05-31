import React from "react";
import { createRoot } from "react-dom/client";
import 'tachyons';
import App from './containers/App'


const container = document.getElementById("root");
const root = createRoot(container);

//root.render(<Hello add={"addt=ition of numbers"} />);
root.render(<App/>);

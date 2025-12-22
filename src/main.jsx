import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// polyfill for promisify in the browser
if (typeof window.promisify === "undefined") {
	window.promisify = (fn) => {
		return (...args) => {
			return new Promise((resolve, reject) => {
				fn(...args, (err, result) => {
					if (err) reject(err);
					else resolve(result);
				});
			});
		};
	};
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

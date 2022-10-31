import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};

	console.log(mode);
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#161618";
			document.body.style.color = "#E4E6EB";
			showAlert("Dark mode has been enabled", "success");
		} else {
			setMode("light");
			document.body.style.backgroundColor = "#fff";
			document.body.style.color = "#161618";
			showAlert("Light mode has been enabled", "success");
		}
	};
	return (
		<div className="App">
			<Navbar logoName="Texter" mode={mode} toggleMode={toggleMode}></Navbar>
			<Alert alert={alert}></Alert>
			{/* <Navbar></Navbar> */}
			<TextForm
				title="Text Upper Case Converter"
				mode={mode}
				toggleMode={toggleMode}
				alert={showAlert}
			></TextForm>
		</div>
	);
}

export default App;

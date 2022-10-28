import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
	const [mode, setMode] = useState("light");
	console.log(mode);
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#161618";
			document.body.style.color = "#E4E6EB";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "#fff";
			document.body.style.color = "#161618";
		}
	};
	return (
		<div className="App">
			<Navbar logoName="Texter" mode={mode} toggleMode={toggleMode}></Navbar>
			{/* <Navbar></Navbar> */}
			<TextForm
				title="Text Upper Case Converter"
				mode={mode}
				toggleMode={toggleMode}
			></TextForm>
		</div>
	);
}

export default App;

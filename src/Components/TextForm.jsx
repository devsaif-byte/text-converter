import React, { useState } from "react";

export default function TextForm(props) {
	const [text, setText] = useState("Type here");
	const { mode, toggleMode } = props;

	const handleConvert = () => {
		// console.log("clicked");
		const conv = text.toUpperCase();
		setText(conv);
	};
	const handleLoText = () => {
		const conv = text.toLowerCase();
		setText(conv);
	};
	const handleOnchange = (e) => {
		console.log("clicked onchange");
		setText(e.target.value);
	};
	const clipboardCopy = async () => {
		const textarea = document.querySelector("#floatingTextarea2");
		const extractedText = await navigator.clipboard.writeText(textarea.value);
		// console.log(extractedText);
		return extractedText;
	};

	return (
		<>
			<div className="container mt-5">
				<div className={`card text-bg-${mode}`}>
					<h5 className="card-header">{props.title}</h5>
					<div className="card-body">
						<p className="card-text text-danger">
							Convert Your text many forms to click the buttons down below.
						</p>

						<div className="form-floating">
							<textarea
								value={text}
								onChange={handleOnchange}
								className={`form-control my-3 bg-${mode} text-${
									mode === "dark" ? "light" : "dark"
								}`}
								placeholder="Leave a comment here"
								id="floatingTextarea2"
								style={{ height: "200px" }}
							></textarea>
						</div>

						<button
							className={`btn btn-${
								mode === "dark" ? "secondary" : "dark"
							} mx-2`}
							onClick={handleConvert}
						>
							Convert Uppercase
						</button>
						<button
							className={`btn btn-${
								mode === "dark" ? "secondary" : "dark"
							} mx-2`}
							onClick={handleLoText}
						>
							Convert Lowercase
						</button>
						<button
							className={`btn btn-${
								mode === "dark" ? "secondary" : "dark"
							} mx-2`}
							onClick={clipboardCopy}
						>
							Copy to clipboard
						</button>
					</div>
				</div>
			</div>
			{/* --------  Summary    ---- */}
			<div className="container my-3">
				<h3>Your text summary</h3>
				<p>
					{text.split(" ").length} Words and {text.length} Characters
				</p>
				<p>{0.008 * text.split(" ").length} Minutes to read</p>
				<h2>Preview</h2>
				<p className="badge text-bg-secondary">{text}</p>
			</div>
		</>
	);
}

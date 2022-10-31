import PropTypes from "prop-types";
import React from "react";

export default function Navbar(props) {
	const { logoName, mode, toggleMode } = props;
	return (
		<>
			<nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
				<div className="container">
					<a className="navbar-brand" href="/">
						{logoName}
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									About
								</a>
							</li>
						</ul>

						{/* toggle dark mode */}
						<div className="form-check form-switch">
							<input
								className={`form-check-input bg-${
									mode === "dark" ? "success" : ""
								}`}
								type="checkbox"
								role="switch"
								onClick={toggleMode}
								id="flexSwitchCheckDefault"
							/>
							<label
								className="form-check-label"
								htmlFor="flexSwitchCheckDefault"
							>
								Dark mode
							</label>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

Navbar.propTypes = {
	logoName: PropTypes.string,
};
Navbar.defaultProps = {
	logoName: "Set Logo Name",
};

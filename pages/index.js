import React, { ReactDOM, Component } from "react"

function Button(props) {
	return (
		<div className='container mx-auto '>
			<button className="non-active" >
				{props.number} button
			</button>
		</div>
	)
}

export default class Component extends Component() {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
		this.handleClick = this.handleClick.bind(this);

		handleClick() {
			this.setState(prevState => ({
				isToggleOn: !prevState.isToggleOn
			}));
		}

		render() {
			return (
				<div>
					<Button
						onClick={this.handleClick}
						number={'First'} />
					<Button
						onClick={this.handleClick}
						number={'Second'} />
					<Button
						onClick={this.handleClick}
						number={'Third'} />
					<Button
						onClick={this.handleClick}
						number={'Fourth'} />
					<Button
						onClick={this.handleClick}
						number={'Fifth'} />
				</div>
			);
		}
	}
}
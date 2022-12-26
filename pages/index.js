import React, { Component } from "react"

function Button(props) {
	return (
		<div className='container mx-auto '>
			<button className="non-active" >
				{props.number} button
			</button>
		</div>
	)
}

export default class ActiveButtons extends React.Component() {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		return (
			<div>
				<Button
					className={this.state.isToggleOn ? 'active' : 'non-active'}
					onClick={this.handleClick}
					number={'First'} />
				<Button
					className={this.state.isToggleOn ? 'active' : 'non-active'}
					onClick={this.handleClick}
					number={'Second'} />
				<Button
					className={this.state.isToggleOn ? 'active' : 'non-active'}
					onClick={this.handleClick}
					number={'Third'} />
				<Button
					className={this.state.isToggleOn ? 'active' : 'non-active'}
					onClick={this.handleClick}
					number={'Fourth'} />
				<Button
					className={this.state.isToggleOn ? 'active' : 'non-active'}
					onClick={this.handleClick}
					number={'Fifth'} />
			</div>
		);
	}
}

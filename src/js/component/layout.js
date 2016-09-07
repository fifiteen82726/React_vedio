import React from "react";
import Header from "./header";
import Footer from "./footer";

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			title: "Will"
		};
	}
	changeTitle(title) {
    this.setState({title});
  }
	render() {
		const title = "Use props title!"
		return (
			<div>
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
				<Footer />
			</div>
		);
	}
}
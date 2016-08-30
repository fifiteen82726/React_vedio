import React from "react"
import ReactDOM from "react-dom"

class Layout extends React.Component{
	constructor() {
		super();
		this.name = "coda"
	}
	getVal(){
		return "will" 
	}
	render() {
		return (
			<div>It's {this.name}</div>
		);
	}
}

const app = document.getElementById('app')
ReactDOM.render(<Layout/>, app);
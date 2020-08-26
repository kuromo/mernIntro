import React from 'react'
import Prism from 'prismjs';
import Test from './tutorials/Test'
import Test2 from './tutorials/Test2'

class Tutorial extends React.Component {
	 render() { return (
	    <div>
	    	<h1>Tutorials</h1>
	    	<h3>Part 1:</h3>
	    	<Test/>
	    	<h3>Part 2:</h3>
	    	<Test2/>
	    </div>
	)}
	componentDidMount() {
	    Prism.highlightAll();
	}
}

export default Tutorial
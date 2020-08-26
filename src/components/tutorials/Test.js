import React from 'react'

const Test = () => (
    <div>
    	<pre>
			<code className="language-javascript">
			{`				
onSubmit(e) {
	e.preventDefault();
	const job = {
		title: 'Developer',
		company: 'Facebook' 
	};
}
	  		`}
		  </code>
		</pre>
    </div>
)

export default Test
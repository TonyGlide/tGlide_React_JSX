import React from "react";
import { useState } from "react";


const Home = () => {
const [counter, setCounter] =useState(0);
const [userInput, setUserInput] = useState("");
let number = 1 *3
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Count: {counter}</h1>
			<button onClick={() => setCounter(counter + number)}> + </button>
			<button onClick={() => setCounter(counter -1)}> - </button>
			<button onClick={() => setCounter(0)}> Reset </button>

<div>
             <h1>You name is: {userInput ? userInput : "NULL"}</h1>


<input 
type="text"
value={userInput}
placeholder="Enter firstname"
onChange={(e) => setUserInput(e.target.value)}
/>
</div>
</div>
	);
};

export default Home;

// ****************************
// import React from "react";
// import { useState } from "react";


// const Home = () => {
// const [counter, setCounter] =useState(0);
// let number = 1 *3
// 	return (
// 		<div className="text-center">
// 			<h1 className="text-center mt-5">Count: {counter}</h1>
// 			<button onClick={() => setCounter(counter + number)}> + </button>
// 			<button onClick={() => setCounter(counter -1)}> - </button>
// 			<button onClick={() => setCounter(0)}> Reset </button>

// 		</div>
// 	);
// };

// export default Home;


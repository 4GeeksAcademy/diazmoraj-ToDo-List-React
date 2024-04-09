import React, {useState} from "react";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([]);

	return (
		<div className="container">
			<h3>To Do List</h3>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(enter) => {
							if (enter.key == "Enter"){
								setTodos(todos.concat([inputValue]));
								setInputValue("");
							}
						}}
						placeholder="What do you need to do"></input>
				</li>
					{todos.map((item, index) => (
						<li>
							{item}<i class="fa-solid fa-xmark" 
							onClick={()=> setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
						</li>
					))}
			</ul>
			<div>{todos.length} <strong></strong>Task</div>
		</div>
	);
};

export default Home;

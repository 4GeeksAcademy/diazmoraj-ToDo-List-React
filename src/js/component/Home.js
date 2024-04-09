import React, {useState}from "react";

//create your first component
const Home = () => {

	const [todo, setTodo] = useState("")
	return (
		<div className="text-center mt-5 container">
			<div className="input-group mb-3">
				<div className="input-group-pretend">
					<span className="input-group-text" id="basic-addon1">To Do</span>
				</div>
				<input type="text" className="form-control" placeholder="Ingrese una Tarea" 
					aria-label="Username" aria-describedby="basic-addon1"
					value={todo}
					onChange={(e) =>{
						setTodo(e.target.value);
					}}></input>
				<h3>El To Do es: <br>{todo}</br></h3>
				<button className="btn btn-danger" onClick={() => {
					setTodo("")
				}}>Clear</button>
			</div>
		</div>
	);
};

export default Home;

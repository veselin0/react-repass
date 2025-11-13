import "./App.css";
import Student from "./Student";

function App() {
	return (
		<div className="App">
			<Student name="Spongebob" age={30} isStudent={true} />
			<Student name="Patrick" age={42} isStudent={false} />
			<Student name="Squidward" age={50} isStudent={false} />
			<Student name="Sandy" age={27} isStudent={true} />
			<Student />
		</div>
	);
}

export default App;
// PropTypes = A mechanism that ensures that the passed value
// is of the correct datatype.
// age: PropTypes.number

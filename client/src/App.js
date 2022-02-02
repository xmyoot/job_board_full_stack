import './App.css';
import Typography from '@mui/material/Typography';
import Jobs from './Jobs.js';

const mockJobs = 
[
    {"title" : "SWE 1", "company" : "Google"},
    {"title" : "SWE 2", "company" : "Facebook"},
    {"title" : "SWE 3", "company" : "Twitter"}
]

function App() {
  return (
    <div className="App">
        <Jobs jobs = {mockJobs} />
    </div>  
  );
}

export default App;

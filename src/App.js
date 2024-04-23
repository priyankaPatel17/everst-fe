import logo from './logo.svg';
import TaskList from './TaskList';
import './App.css';
import './styles.css';

const tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Temp content',
    history: [
      { date: '4th April 2024', title: 'Task', description: 'Description' },
      { date: '2nd March 2024' , title: 'Taskk', description: 'Description was added' },
    ]
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'T2 content',
    history: [
      { date: '2nd April 2024', title: 'TR', description: 'Description'},
      { date: '1st April 2024', title: 'T2', description: 'Description added' },
    ]
  }
];

function App() {
  return (
    <div className="App">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Task List</h1>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;

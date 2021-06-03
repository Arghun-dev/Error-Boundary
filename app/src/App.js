import ErrorBoundary from './components/ErrorBoundary';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
}

export default App;

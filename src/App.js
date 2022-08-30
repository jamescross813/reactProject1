import './App.css';
import List from "./List";

function App() {
  return (
    <main>
      <section className="container">

        <h3>0 birthdays today</h3>
        <List/>
        <button>Clear</button>
      </section>
    </main>
  );
}

export default App;

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <h1>Home</h1>;}
function About() { return <h1>About</h1>;}
export default App;

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>The requested URL was not found.</p>
    </div>
  );
}
```
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Home works ✅</h1>
      <Link to="/education" className="text-primary underline">
        Go to Education
      </Link>
    </div>
  );
}

function Education() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Education works ✅</h1>
      <Link to="/" className="text-primary underline">
        Go Home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </div>
  );
}
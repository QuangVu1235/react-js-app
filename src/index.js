import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetworkSecurity from './pages/Security';
import GraphicDesign from './pages/GraphicDesign';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NetworkSecurity />} />
          <Route index element={<NetworkSecurity />} />
          <Route path="/design" element={<GraphicDesign />} />
          <Route path="/software" element={<SoftwareDevelopment />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();

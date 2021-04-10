import './App.scss';
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

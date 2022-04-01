import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.scss";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import "swiper/swiper.min.css"
import './assets/boxicons-2.0.7/css/boxicons.min.css';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;

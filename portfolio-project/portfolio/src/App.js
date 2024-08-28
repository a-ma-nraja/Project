
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import axios from "axios";
import { useEffect } from "react";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading, ReloadData } from "./redux/rootSlice";
import Admin from "./Pages/Home/Admin/index";
import AdminLogin from "./Pages/Home/Admin/AdminLogin";

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get('api/portfolio/get-portfolio-data');
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());

    } catch (error) {
      // console.log(error);
      dispatch(HideLoading());
    }
  }

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, []);

  useEffect(() => {
    console.log(portfolioData);
  }, [portfolioData]);

  useEffect(() => {
    if (ReloadData) {
      getPortfolioData();
    }
  }, [ReloadData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
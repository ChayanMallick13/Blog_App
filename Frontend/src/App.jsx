import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Form from "./components/Form";
import UserPost from "./pages/UserPost";
import AllPost from "./pages/AllPost";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import ShowPost from "./pages/ShowPost";

const App = () => {
  const { fetchblogs, fetchUser, ApiValueChangeTracker, userschangeTracker } = useContext(AppContext);
  

  useEffect(() => {
    fetchblogs();
    fetchUser();
    // eslint-disable-next-line
  }, [ApiValueChangeTracker, userschangeTracker]);

  return (
    <div className="bg-slate-300 min-h-[100vh] overflow-x-hidden flex flex-col justify-between ">


      <div className="  h-full flex flex-col justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/showPost/:id" element={<ShowPost />} />

          <Route path="/userPost/:username" element={<UserPost />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createBlog" element={<Form />} />
          <Route path="/allPost" element={<AllPost />} />

        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;

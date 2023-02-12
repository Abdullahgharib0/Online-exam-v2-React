import Header from "../comp/header";
import Footer from "../comp/footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Header/>

  <contact>
    <div className="img">
      <div className="bg">
        <h1 className="des text-white"> أختبارات قصيرة</h1>
        <p className="pp text-white ">أختبارات قصيرة لتقيم الطلاب</p>
      </div>
    </div>
    <button>
      <NavLink to="/desc" className="tt ">
        لمعرفة المزيد
      </NavLink>
    </button>
  </contact>
  
  <Footer/>

</>  
  );
}

export default Home;

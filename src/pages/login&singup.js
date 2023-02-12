import Header from "../comp/header";
import Footer from "../comp/footer";





  const LoginSingup = () => {
    
  return (
    <>
  
  
  <Header/>
  
  <contact>
  <div className="login1 mb-5 mt-5 d-flex justify-content-center">
    <button
      type="button"
      className="btn1 m-3 p-2"
      onclick="div1()"
      value="div 1"
    >
      تسجيل دخول
    </button>
    <button
      type="button"
      className="btn2 m-3 p-2"
      onclick="div2()"
      value="div 2"
    >
      انشاء حساب
    </button>
  </div>
  <div id="div1">
    <form id="signup-form">
      <h1 className="dd text-white">انشاء حساب</h1>
      <input
        id="name1"
        type="text"
        placeholder="Username"
        defaultValue=""
        required=""
      />
      <input
        id="email1"
        type="email"
        placeholder="E-mail"
        defaultValue=""
        required=""
      />
      <input
        id="pass1"
        type="password"
        placeholder="password"
        defaultValue=""
        required=""
      />
      <input
        id="pass1"
        type="password"
        placeholder="Re-Password"
        defaultValue=""
        required=""
      />
      <br />
      <input id="signup_btn" type="submit" defaultValue="Signup" />
    </form>
  </div>
  <div id="div2">
    <form id="login-form">
      <h1 className="dd text-white">تسجيل دخول</h1>
      <input
        id="name2"
        type="text"
        placeholder="Username"
        defaultValue=""
        required=""
      />
      <input
        id="pass2"
        type="password"
        placeholder="Password"
        defaultValue=""
        required=""
      />
      <br />
      <button
        id="login_btn"
        type="submit"
        value="moveto window"
        onclick="movetowin()"
      >
        Login
      </button>
    </form>
  </div>
  </contact>

    <Footer/>
    
      
    </>


  );

}



export default LoginSingup;

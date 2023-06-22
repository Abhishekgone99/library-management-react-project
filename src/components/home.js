import "../styling/home.css";
import logo4 from "../images/logo4.jpg";
import pngegg1 from "../images/pngegg1.png";
import { Button } from "react-bootstrap";
import admin from "../images/admin.png";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import back4 from "../images/back4.jpg";

const Homepage = () => {
  const myStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.62),rgba(0,0,0,0.62)),url(${back4})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="home">
      <div className="body" style={myStyle}>
        <div className="navbar">
          <img src={logo4} alt="" height={"40px"} />
          <h1>Kavi Narmad Library </h1>
        </div>

        <div className="mainLogo">
          <img src={pngegg1} alt="" width={"300px"} height={"300px"} />
          <h1>A Reservoir of Knowledge</h1>
        </div>
        <div className="mainContent">
          <div id="admincard">
            <img
              src={admin}
              alt=""
              width={"150px"}
              height={"150px"}
              style={{ borderRadius: "50%" }}
            />
            <Link to="/AdminLoginPage">
              <Button variant="outline-secondary">Admin Login</Button>
            </Link>
          </div>
          <div id="usercard">
            <img
              src={user}
              alt=""
              width={"150px"}
              height={"150px"}
              style={{ borderRadius: "50%" }}
            />
            <Link to="/UserLoginPage">
              <Button variant="outline-secondary">User Login</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="about">
        <h1>About Us</h1>
        <p>
          Kavi Narmad Central Library is a public library in Surat built by the
          Surat Municipal Corporation in 1991 at Ghod Dod Road. The library is
          the largest in the city with 2,26,391 books and a membership of
          46,855. The library premises have a total area of 6158 sq. m. and was
          built at the cost of ₹ 4.03 crore. The library also houses a reading
          room and a newspaper section open to public. It is named after Veer
          Narmad the famous Gujarati poet from Surat and was opened to public on
          his 158th birth anniversary.
        </p>
        <p>
          This is an e-library of the physical entity where you can search the
          books and bookmark them for later.
        </p>
      </div>

      <div className="gallery">
        <img
          src="https://th.bing.com/th/id/OIP.6s0_B8R5hbwHSq2ZRhgBbgHaE8?pid=ImgDet&rs=1"
          alt=""
        />
        <img
          src="https://free4kwallpapers.com/uploads/originals/2019/03/14/the-library-wallpaper.jpg"
          alt=""
        />
        <img
          src="https://th.bing.com/th/id/R.efd35a6d841953060a0c4b10f763f08c?rik=CJ9NMgFci1tVmg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2ff%2f8%2f4%2f888661-beautiful-library-background-images-1920x1080-iphone.jpg&ehk=4sDpXGMv3dZdR6sK7WCIqhrxrVTpmPIyg8Nr3dm9nl0%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <img
          src="https://th.bing.com/th/id/OIP._S_rD5krU4T5VuPMVxHacQHaLX?pid=ImgDet&rs=1"
          alt=""
        />
        <img
          src="https://th.bing.com/th/id/OIP.1yvwQC3Em8Tj0NhzuV8RLwHaL1?pid=ImgDet&rs=1"
          alt=""
        />
        <img
          src="https://1.bp.blogspot.com/-wiWpjFXQVgA/UVwidxD_cDI/AAAAAAAAEeI/Im4lMRy3YQ4/s1600/new+harry+potter+cover.jpg"
          alt=""
        />
        <img
          src="https://th.bing.com/th/id/R.734f18101a00af1b9c5ca2fbd096378f?rik=bYwDsUWi%2fSbQgg&riu=http%3a%2f%2fimages.gr-assets.com%2fbooks%2f1490669332l%2f1611097.jpg&ehk=EMWJwUjw23rONE5SscJghfL0enpxERVMuR0ehM0rXMQ%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <img src="https://i.imgur.com/DqQtgSl.jpg" alt="" />
        <img
          src="https://schoolreadinglist.co.uk/wp-content/uploads/2020/10/britannicacoverfull.jpg"
          alt=""
        />
        <img
          src="https://gs-blog-images.grdp.co/gate-exam/wp-content/uploads/2016/10/25131512/th2.jpeg"
          alt=""
        />
        <img
          src="https://media.karousell.com/media/photos/products/2020/01/30/atomic_habits_book_by_james_clear_hardcover_1580348986_aeec926e.jpg"
          alt=""
        />

        <img
          src="https://cdn.theculturetrip.com/images/56-3690413-paulo2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Homepage;

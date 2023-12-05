import Footer from "../componeten/Footer";
import Nav from "../componeten/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="home">
        <img className="homeimg" src="./img/Pawlos.png" alt="" />
        <div className="homeitems">
          <h2>
            Hello,
            <br /> <span>I</span> AM
          </h2>
          <h2>
            <span>Pawlos</span> Abraham
          </h2>
          <p className="secondtext">A Frontend Developer</p>
        </div>
      </div>
      <div className="button">
        <button className="buttonitem">
          <a target="blank"
            className="buttonlink"
            href="./img/Pawlos Abraham CV..pdf"
            download
          >
            Download CV{" "}
          </a>
        </button>
      </div>
      <div className="button1">
        <button className="buttonitem1">
          <a href="https://www.instagram.com/p.abraham__/" target="blank">
            <img className="buttonimg" src="./img/instagram.jpg" alt="" />
          </a>
        </button>
        <button className="buttonitem1">
          <a href="https://github.com/PawlosMusei" target="blank">
            <img className="buttonimg" src="./img/github.png" alt="" />
          </a>
        </button>
        <button className="buttonitem1">
          <a href="https://www.linkedin.com/in/pawlos-abraham-88b008263/" target="blank">
            <img className="buttonimg" src="./img/linkdin.png" alt="" />
          </a>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

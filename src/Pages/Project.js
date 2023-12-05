import Footer from "../componeten/Footer";
import Nav from "../componeten/Nav";

const Project = () => {
  return (
    <div>
      <Nav />
      <h1>
        <span>Pro</span>jects
      </h1>
      <div className="container">
        <div class="containeritem">
          <div>
            <a href="./img/webshopjaar1.png" target="blank" download>
              <img class="block blck1" src="./img/webshopjaar1.png" alt="" />
            </a>
          </div>
          <div>
            <a href="./img/huskytrippage.png" target="blank" download>
              <img class="block blck2" src="./img/huskytrippage.png" alt="" />
            </a>
          </div>
          <div>
            <a href="./img/Project Gamesite.png" target="blank" download>
              <img
                class="block blck3"
                src="./img/Project Gamesite.png"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="./img/potfoliojaar1.png" target="blank" download>
              <img class="block blck4" src="./img/potfoliojaar1.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <h3 className="title">
        Ski<span>lls</span>
      </h3>
      <div>
        <section className="skillsitems">
          <div>
            <img src="./img/html.png" alt="" className="skillsimg" />
            <p>
              <br />
              HTML <br /> <br /> Progression
            </p>
            <div className="progression">
              <div className="progressionitem1"></div>
            </div>
          </div>
          <div>
            <img src="./img/css.webp" alt="" className="skillsimg" />
            <p>
              <br />
              CSS <br /> <br /> Progression
            </p>
            <div className="progression">
              <div className="progressionitem2"></div>
            </div>
          </div>
          <div>
            <img src="./img/javascript.png" alt="" className="skillsimg1" />
            <p>
              <br />
              Javascript <br /> <br /> Progression
            </p>
            <div className="progression">
              <div className="progressionitem3"></div>
            </div>
          </div>
          <div>
            <img src="./img/react.png" alt="" className="skillsimg1" />
            <p>
              <br />
              React <br /> <br /> Progression
            </p>
            <div className="progression">
              <div className="progressionitem4"></div>
            </div>
          </div>
        </section>
        <section className="skillsitems1">
          <div>
            <img src="./img/mysql.png" alt="" className="skillsimg" />
            <p>
              <br />
              MySQL <br /> <br /> Progression
            </p>
            <div className="progression">
              <div className="progressionitem5"></div>
            </div>
          </div>
          <div>
            <img src="./img/canvas.jpg" alt="" className="skillsimg" />
            <p>
              <br />
              Canvas <br /> <br /> Progression
            </p>
            <div className="progression">
              <div className="progressionitem6"></div>
            </div>
          </div>
          <div>
            <img src="./img/bootstrap.png" alt="" className="skillsimg1" />
            <p>
              <br />
              Bootstrap <br /> <br /> Progression
            </p>
            <div className="progression">
              <div className="progressionitem7"></div>
            </div>
          </div>
          <div>
            <img src="./img/tailwind.png" alt="" className="skillsimg1" />
            <p>
              <br />
              Tailwind <br /> <br /> Progression
            </p>
            <div className="progression">
              <div className="progressionitem8"></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Project;

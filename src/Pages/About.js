import Nav from "../componeten/Nav";
import Footer from "../componeten/Footer";

const About = () => {
  return (
    <div className="allitmes">
      <Nav />
      <h1>
        About <span>Me</span>
      </h1>
      <section>
        <h3>Per<span>so</span>nal <span>In</span>fo</h3>
        <article>
          I am Pawlos Abraham, a 17-year-old boy from Rotterdam. I am known as a
          motivated, eager to learn and hardworking student. I am always willing
          to learn new things and I am fully committed to your schoolwork. But
          that is not everything! I am also a sporty boy and like to be active.
        </article>
      </section>
      <section>
        <h3>
          My School <span>Journey</span>
        </h3>
        <div>
          <div class="time-bar">
            <p>2018</p>
            <p>2019</p>
            <p>2022/Present</p>
            <p>Future Planning</p>
          </div>
          <ul class="progress-bar">
            <li></li>
            <li></li>
            <li></li>
            <li class="stop"></li>
          </ul>
          <div class="text-bar">
            <p className="p">
              I went to secondary school here from primary school but I didn't
              do well there, so I ended up in the first year have failed.
            </p>
            <p className="p">
              This year I started doing kader. In the third year I had to chose
              for BWI, but in the end I didn't like it so I decided to do
              something wanted to do differently.
            </p>
            <p className="p">
              This year I got my grades up so I had to choose an MBO4 school and
              I didn't know what to do exactly wanted. I thought a lot and
              finally came up with software developer (Creative Media
              Technology).
            </p>
            <p className="p">
              Later I want to start my own company. an International software
              deliverer company.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h3>
          TEAC<span>HERS</span>
        </h3>
        <div className="reactionsbox">
          <div>
            <div className="reaction">
              <img
                className="reactionimg"
                src="./img/jasonvanschaik.png"
                alt=""
              />
              <p className="reactionname">
                Jason van <span>Schaik</span>
              </p>
              <br />
            </div>
            <div className="reactions">
              Pawlos is a hardworking student, very polite and always standing
              open to feedback. Pawlos is good with HTML/CSS/Javascript and is
              well on my way to mastering React.
            </div>
          </div>
          <div>
            <div className="reaction">
              <img
                className="reactionimg1"
                src="./img/pascal rebin.png"
                alt=""
              />
              <br />

              <p>
                Pascal<span> Rebin</span>
              </p>
            </div>
            <br />
            <div className="reactions">
              Pawlos, a student who always enters the classroom with a smile and
              is always friendly. Very pleasant in dealing with the teachers but
              also with his classmates. In addition to his friendliness, Pawlos
              is also a very enthusiastic and motivated student. Enthusiastic
              and motivated to learn and participate in classes and always
              participates well. All in all a top student! 
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;

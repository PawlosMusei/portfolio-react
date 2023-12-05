import Footer from "../componeten/Footer";
import Nav from "../componeten/Nav";

const Contact = () => {
  return (
    <>
      <Nav />
      <h3 className="title">
        Contact <span>From</span>
      </h3>
      <form target="_blank" action="https://formspree.io/f/xeqwqwpj" method="POST">
        <label htmlFor="nameInput">
           <p className="reactionname"> Enter your <span>Name</span></p>
          <input type="text" id="nameInput1" name="nameInput" className="nameInput" required placeholder="Your Name*"/>
        </label>
        <label>
          <p className="reactionname">
            Enter your<span> Company Name</span>
          </p>
          <input type="text" id="nameInput" name="nameInput" className="nameInput" required placeholder="Your Company Name*"/>
        </label>
        <label htmlFor="emailInput" className="srOnly">
          <p>
            Enter your<span> Mail</span>
          </p>
          <input type="email" id="emailInput" name="emailInput" className="emailInput" required placeholder="Your Email*"/>
        </label>
        <p className="comment">
          Write a <span>comment</span>
        </p>
        <textarea className="messageInput" name="messageInput" id="messageInput" required placeholder="Your Message" />
        <input type="submit" className="formSend" target="_blank"  rel="noopener noreferrer" placeholder="SEND"/>
      </form>
     
      <Footer />
    </>
  );
};

export default Contact;

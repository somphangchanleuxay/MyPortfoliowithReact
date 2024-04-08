import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        {/* Placeholder for your photo */}
        <img src="../src/assets/images/IMG_3807.JPG" alt="Picture of Somphang Chanleuxay" style={imageStyle} />
      </div>
      <div style={textContainerStyle}>
        <h2>About Page</h2>
        <p>
          <strong>About Me</strong><br />
          Hey there! I'm Pang, currently diving into the world of coding through the Minnesota University coding bootcamp. It's been a whirlwind of learning, but I'm loving every bit of it and hungry for more.<br /><br />
          
          <strong>What I've Been Up To</strong><br />
          In the bootcamp, we've covered a ton of ground – from wrangling with JavaScript and crafting cool interfaces with CSS and HTML, to building dynamic web apps using React and Node.js. I've even dipped my toes into databases with SQL, MongoDB, and GraphQL, and got my head around server-side APIs and object-oriented programming.<br /><br />
          
          <strong>My Learning Journey</strong><br />
          Honestly, it's been a bit of a rollercoaster, but in the best possible way. I've learned to embrace the challenges and celebrate the victories, no matter how small. The fast pace keeps me on my toes, but I'm excited to keep pushing myself and exploring new horizons.<br /><br />
          
          <strong>Let's Connect and Collaborate</strong><br />
          I'm all about learning through collaboration, so if you're working on something cool or just want to chat tech, hit me up! Whether it's swapping coding tips or teaming up on a project, I'm game.<br /><br />
          
          Feel free to shoot me an email at [Somphang.Chanleuxay@gmail.com] or connect with me on [LinkedIn, GitHub, or other social platforms]. Let's geek out together!
        </p>
        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: 'flex',
  border: '2px solid #ccc',
  borderRadius: '5px',
  padding: '20px',
  marginTop: '300px'
  
};

const imageContainerStyle = {
 
};

const imageStyle = {
  width: '100%', 
  borderRadius: '10%', 
  
};

const textContainerStyle = {
  flex: '3',
  marginLeft: '20px',
};

export default About;
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About page content.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default About;
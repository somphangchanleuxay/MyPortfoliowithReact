function Portfolio() {
  
  return (
    <div style={containerStyle}>
    <div>
      <h3>Portfolio</h3>
      <div style={rowStyle}>
        <div style={columnStyle}>
          <div style={{ ...projectStyle, ...project1Style }}>
            <h3>Project 1</h3>
            <h2>Flavor Fusion</h2>
            <div>
              <a href="https://github.com/somphangchanleuxay/FlavorFusion">GitHub Repository</a>
              <a href="https://somphangchanleuxay.github.io/FlavorFusion/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
            </div>
          </div>
        </div>
        <div style={columnStyle}>
          <div style={{ ...projectStyle, ...project2Style }}>
            <h3>Project 2</h3>
            <h2>Employee Tracker</h2>
            <div>
              <a href="https://github.com/somphangchanleuxay/EmployeeTracker">GitHub Repository</a>
              <a href="https://somphangchanleuxay.github.io/EmployeeTracker/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
            </div>
          </div>
        </div>
        <div style={columnStyle}>
          <div style={{ ...projectStyle, ...project3Style }}>
            <h3>Project 3</h3>
            <h2>Thought Share</h2>
            <div>
              <a href="https://github.com/somphangchanleuxay/ThoughtShare">GitHub Repository</a>
              <a href="#" target="_blank" rel="noopener noreferrer">No Deployment for this</a>
            </div>
          </div>
        </div>
        <div style={columnStyle}>
          <div style={{ ...projectStyle, ...project4Style }}>
            <h3>Project 4</h3>
            <h2>Note Take</h2>
            <div>
              <a href="https://github.com/somphangchanleuxay/notetake">GitHub Repository</a>
              <a href="https://somphangchanleuxay.github.io/notetake/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
            </div>
          </div>
        </div>
        <div style={columnStyle}>
          <div style={{ ...projectStyle, ...project5Style }}>
            <h3>Project 5</h3>
            <h2>Weather Please</h2>
            <div>
              <a href="https://github.com/somphangchanleuxay/WeatherPlease">GitHub Repository</a>
              <a href="https://somphangchanleuxay.github.io/WeatherPlease/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
            </div>
          </div>
        </div>
        <div style={columnStyle}>
          <div style={{ ...projectStyle, ...project6Style }}>
            <h3>Project 6</h3>
            <h2>README Generator</h2>
            <div>
              <a href="https://github.com/somphangchanleuxay/READMEGenerator">GitHub Repository</a>
              <a href="https://somphangchanleuxay.github.io/READMEGenerator/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

const containerStyle = {
  maxWidth: '800px',
  marginTop: '350px',
  // margin: '0 auto', // Center horizontally
};

const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap', // Allow items to wrap to the next line if necessary
};

const columnStyle = {
  flex: '0 0 50%', // Each column takes 50% of the available width
  padding: '0 15px',
  marginBottom: '20px',
};



const projectStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '20px',
  boxSizing: 'border-box',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const project1Style = {
  backgroundImage: "url('https://wallpaperaccess.com/full/1111983.jpg')",
};

const project2Style = {
  backgroundImage: "url('https://wallpapercave.com/wp/wp1828901.jpg')",
};

const project3Style = {
  backgroundImage: "url('https://wallpaperaccess.com/full/1119441.jpg')",
};

const project4Style = {
  backgroundImage: "url('https://wallpapercave.com/wp/wp1828943.jpg')",
};

const project5Style = {
  backgroundImage: "url('https://wallpapercave.com/wp/wp7685936.jpg')",
};

const project6Style = {
  backgroundImage: "url('https://wallpaperaccess.com/full/314785.jpg')",
};

export default Portfolio;
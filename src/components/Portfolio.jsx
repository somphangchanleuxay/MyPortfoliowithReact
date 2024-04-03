
function Portfolio() {
    return (
      <div>
        <h2>Portfolio</h2>
        <div style={projectStyle}>
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
          <a href="#">Link to Project 1</a>
        </div>
        <div style={projectStyle}>
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
          <a href="#">Link to Project 2</a>
        </div>
        <div style={projectStyle}>
          <h3>Project 3</h3>
          <p>Description of Project 3</p>
          <a href="#">Link to Project 3</a>
        </div>
      </div>
    );
  }
  
  const projectStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
  };
  
  export default Portfolio;
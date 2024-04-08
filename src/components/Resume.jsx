function Resume() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', marginTop: '150px' }}>
      <h2 style={{ textAlign: 'center' }}>Resume</h2>
      <p style={{ textAlign: 'center' }}>Download my resume:</p>
      <div style={{ textAlign: 'center' }}>
        <a href="https://docs.google.com/document/d/1Gn6gyyCpU-vsiu8u-DvjIyUJpastxoi5qhH2WmIXKa0/export?format=pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '4px', fontSize: '16px' }}>Download Resume (PDF)</a>
      </div>

      <h3 style={{ marginTop: '30px' }}>Proficiencies</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>GraphQL</li>
        <li>Server-side APIs</li>
        <li>Object-oriented programming</li>
      </ul>
    </div>
  );
}

export default Resume;
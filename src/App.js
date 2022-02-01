import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header">
        <a href="#app">404 not found</a>
      </div>

      <div class="page-content">
        <div className='page-illustration'><img src="/Scarecrow.png" alt='hero'/></div>
        <div className='hero-content'>
          <h1>I have bad news for you</h1>
          <p>The page you are looking for might be removed or is temporarily unavailable</p>
          <a href='#back' className='back_btn'>Back to Home</a>
        </div>

       
        </div>
        <div className='footer'>
          <p>created by <strong>sumit</strong> - devChallenges.io</p>
        </div>
    </div>
  );
}

export default App;

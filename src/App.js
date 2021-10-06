import './App.css';
import imageInSrc from "./imageInSrc.jpg"


function App() {
  return (
  <div>
    <div className='App' style={{border:"solid 1 black",max_width:'100vw'}}>
      <h1 className='title red'>Your name here</h1>
      <br/>
      <img src={imageInSrc} className="imagesrc" alt="imageInSrc" />
      <br/>
      <img src="/imageInPublic.jpg" className="imagepublic" alt="imageInPublic" />
    </div>  
      <video width="320" height="240" controls>
      <source src="myVideo.mp4" type="video/mp4" />
      </video>
  </div>
  );
}

export default App;

import "./App.css"
//component names should always start with a capital letter (JSX)

function FirstButton(){
  return(
    <button>Creating my first button in react</button>
  );
};

//

function AboutThisPage(){
  return(
    <>
      <h1 className="about">About</h1>
      <p>Hello this my First "P" tag in React <br/> I hope this runs..!!</p>
    </>
  );
};



function App() {
 
  return (
    <>
      <h1>My first React App using Vite</h1>
      <FirstButton/>
      <AboutThisPage></AboutThisPage>
    </> //only one component can be returned
  ); 
};

export default App;

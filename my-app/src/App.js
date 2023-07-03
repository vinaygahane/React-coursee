import './App.css';

let name="Harry";
function App() {
  return (
     <>
     <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
     </nav>
     <div className='container'>
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eius recusandae inventore illo consequatur possimus, facilis tempore 
        doloribus quia exercitationem, nesciunt magnam temporibus nisi harum alias
         pariatur officiis ipsam libero molestiae? Deserunt praesentium ratione quis.</p>

     </div>
     </>
     
  );
}

export default App;

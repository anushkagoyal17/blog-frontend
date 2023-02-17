// import {useState} from "react";
import './App.css';
import LiveBlogs from './components/LiveBlogs';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";

// import About from './components/About';
// import Home from './components/Home';
// import axios from "axios";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from 'react-router-dom';

import React, { Component } from 'react';


export default class App extends Component {
    render()
    {
      return(
        // <Navbar/>
        <LiveBlogs/>
      // <Routes>
      //   <Route exact path='/' element={<Navbar />}></Route>
      //   <Route exact path='/liveblogs' element={<LiveBlogs />}></Route>
      // </Routes>
    )
  }
}











// class App extends Component {
//   state = {
//     account: []
//   };
// /* 
//    This is where the magic happens
// */
//   async componentDidMount() {
//     try {
//       const res = await fetch('127.0.0.1:8000/api/user'); // fetching the data from api, before the page loaded
//       const account = await res.json();
//       this.setState({
//         account
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   render() {
//     const [theme, setTheme] = useState('light');

//     const toggleTheme = ()=>{
//       if(theme==='light'){
//         setTheme('dark');
//         document.body.style.backgroundColor='grey';
//         document.body.style.color='white';
//       }
//       else{
//         setTheme('light')
//         document.body.style.backgroundColor='white';
//         document.body.style.color='black';

//       }
//     }
//     return (
//       <Router>
//         <div className="App" >
//           <Navbar title='Jotter' about='About us' theme={theme} toggleTheme={toggleTheme} />
//           <div className='container my-3'>
//           {/* <LiveBlogs heading='TextArea: '/>
//           <About/> */}
//           <Routes>
//           {/* <Route path='/' element={< Home heading="enter a text"/>}></Route>   */}
//           {/* <Route path='/' element={< Home/ >}></Route> */}
//           <Route exact path='/about' element={< About/ >}></Route>
//           <Route exact path='/liveblogs' element={< LiveBlogs/ >}></Route>
//           </Routes>
//           </div>
//         </div>
//      </Router>
//     );
//   }
// }

// export default App;












// import {useState} from "react";
// import './App.css';
// import LiveBlogs from './components/LiveBlogs';
// import Navbar from './components/Navbar';
// import About from './components/About';
// // import Home from './components/Home';
// // import axios from "axios";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from 'react-router-dom';


// function App(){
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = ()=>{
//     if(theme==='light'){
//       setTheme('dark');
//       document.body.style.backgroundColor='grey';
//       document.body.style.color='white';
//     }
//     else{
//       setTheme('light')
//       document.body.style.backgroundColor='white';
//       document.body.style.color='black';

//     }
//   }
//   return (
//     <Router>
//     <div className="App" >
//       <Navbar title='Jotter' about='About us' theme={theme} toggleTheme={toggleTheme} />
//       <div className='container my-3'>
//       {/* <LiveBlogs heading='TextArea: '/>
//       <About/> */}
//       <Routes>
//       {/* <Route path='/' element={< Home heading="enter a text"/>}></Route>   */}
//       {/* <Route path='/' element={< Home/ >}></Route> */}
//       <Route exact path='/about' element={< About/ >}></Route>
//       <Route exact path='/liveblogs' element={< LiveBlogs/ >}></Route>
//       </Routes>
//       </div>
//     </div>
//     </Router>
//   );
// }

// export default App;
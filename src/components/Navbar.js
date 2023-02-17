import React, { Component } from 'react'
// import {Link} from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    )
  }
}

export default Navbar

// import React, {useState} from "react";
// // import PropTypes from 'prop-types';
// // import {Link} from 'react-router-dom';
// // import jotter from 


// // export default class Navbar extends Component {
// //   render() {
// //       return(
// //         <h1>Hola</h1>

// //         )
// //         }
// //     }

// export default function Navbar(props){
//     render() 
//     {
//       return(
//         <h1>Hola</h1>

//         );
//         }
//       }
//   //   const [theme, setTheme] = useState({
// //     color : 'white',
// //     backgroundColor : 'black'
// //   })

// //   const [themeButtonText, setThemeButtonText] = useState('Dark Mode')

// //   const toggleTheme = ()=>{
// //     if(theme.color=='white'){
// //       setTheme({
// //         color : 'black',
// //         backgroundColor : 'white'
// //       })
// //       setThemeButtonText('Dark Mode')
// //     }
// //     else{
// //       setTheme({
// //         color : 'white',
// //         backgroundColor : 'black'
// //       })
// //       setThemeButtonText('Light Mode')

// //     }
// //   }
// //   return(
// //     <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
// //       <div className="container-fluid">
// //         <Link className="navbar-brand" to="/">{props.title}</Link>
// //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
// //           <span className="navbar-toggler-icon"></span>
// //         </button>
// //         <div className="collapse navbar-collapse" id="navbarScroll">
// //           <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
// //             <li className="nav-item">
// //               <Link className="nav-link active" aria-current="page" to="/liveblogs">Home</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link className="nav-link" to="/about">{props.about}</Link>
// //             </li>
// //             {/* <li className="nav-item dropdown">
// //               <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
// //                 Link
// //               </a>
// //               <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
// //                 <li><a className="dropdown-item" href="/">Action</a></li>
// //                 <li><a className="dropdown-item" href="/">Another action</a></li>
// //                 <li><hr className="dropdown-divider" /></li>
// //                 <li><a className="dropdown-item" href="/">Something else here</a></li>
// //               </ul>
// //             </li> */}
// //             {/* <li className="nav-item">
// //               <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Link</a>
// //             </li> */}
// //           </ul>
// //           <form className="d-flex">
// //             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
// //             <button className="btn btn-outline-success" type="submit">Search</button>
// //           </form>
// //           {/* <button className="btn btn-outline-primary" onClick={toggleTheme} type="submit">Dark Mode</button> */}
// //           <div className={`form-check form-switch text-${props.theme==='light'?'dark':'light'}`}>
// //             <input className="form-check-input" onClick={props.toggleTheme} type="checkbox" id="flexSwitchCheckDefault" />
// //             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Theme</label>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //     )
// // }

// // Navbar.propTypes = {
// //                     title: PropTypes.string.isRequired,
// //                     about: PropTypes.string.isRequired,
// //                   }

        
// // Navbar.defaultProps = {
// //                     title: 'Default Title',
// //                     about: 'Default About',
// //                   }
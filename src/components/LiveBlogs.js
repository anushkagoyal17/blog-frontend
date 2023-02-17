import React, {Component} from 'react';
import BlogItem from './BlogItem';

export class LiveBlogs extends Component {
    // constructor(){
    //     super();
    //     console.log('Holaa');
    //     this.state = {
            
    //     }
    // }
    render() 
    {
      return(
        <div className='container my-3'>
        <h1>Blogs</h1>
        <div className='row'>
            <div className="col-md-3">
            <BlogItem title='Apple' content='Dummy content' imgUrl="https://images7.alphacoders.com/411/411820.jpg"/>
            </div>
            <div className="col-md-3">
            <BlogItem title='Samsung' content='Dummy content'/>
            </div>
            <div className="col-md-3">
            <BlogItem title='Oppo' content='Dummy content'/>
            </div>
            <div className="col-md-3">
            <BlogItem title='One Plus' content='Dummy content'/>
            </div>
        </div>
        </div>
        );
        }
      }

export default LiveBlogs

// export default function  LiveBlogs(props) {
//     const handleUpClick = ()=>{
//         // console.log('UpperCase');
//         let newText = text.toUpperCase();
//         setText(newText);
//     }

//     const handleClearClick = ()=>{
//         setText('');
//     }
    
//     const handleOnChange = (event)=>{
//         // console.log('On Change ');
//         setText(event.target.value);

//     }

//     const [text, setText] = useState('Default text');
//   return (
//     <div>
//         <div className="container">
//             <h1>{props.heading}</h1>
//             <div className="mb-3">
//                 <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="10"></textarea>
//             </div>
//             <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
//             <button className="btn btn-primary" onClick={handleClearClick}>Clear</button>
//         </div>
//         <div className="container my-3">
//             <h1>Text Summary:</h1>
//             <p>{text.split(" ").length} words {text.length} characters</p>
//         </div>
//         <br/>
//         </div>
//             )
//         }


// {/* export default class LiveBlogs extends Component {
//     render() {
//         return(
//             <div className="list-group" >
//                 <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
//                     <div className="d-flex w-100 justify-content-between">
//                     <h5 className="mb-1">List group item heading</h5>
//                     <small>3 days ago</small>
//                     </div>
//                     <p className="mb-1">Some placeholder content in a paragraph.</p>
//                     <small>And some small print.</small>
//                 </a>
//                 <a href="#" className="list-group-item list-group-item-action">
//                     <div className="d-flex w-100 justify-content-between">
//                     <h5 className="mb-1">List group item heading</h5>
//                     <small className="text-muted">3 days ago</small>
//                     </div>
//                     <p className="mb-1">Some placeholder content in a paragraph.</p>
//                     <small className="text-muted">And some muted small print.</small>
//                 </a>
//                 <a href="#" className="list-group-item list-group-item-action">
//                     <div className="d-flex w-100 justify-content-between">
//                     <h5 className="mb-1">List group item heading</h5>
//                     <small className="text-muted">3 days ago</small>
//                     </div>
//                     <p className="mb-1">Some placeholder content in a paragraph.</p>
//                     <small className="text-muted">And some muted small print.</small>
//                 </a>
//             </div>
//             )
//         }
//     } */}
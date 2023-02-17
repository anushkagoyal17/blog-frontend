import React, {Component} from 'react';
import BlogItem from './BlogItem';

export class LiveBlogs extends Component {
    
    blogs = [
      {
          "id": 1,
          "blog_title": "sample blog 12 sample blog 12 sample blog 12",
          "blog_image": "/assets/images.jpeg",
          "blog_content": "1 sample content sample content sample content1 sample content sample content sample content1 sample content sample content sample content1 sample content sample content sample content1 sample content sample content sample content",
          "is_published": "Yes",
          "blog_url": "/",
          "created_at": "2023-02-09T09:08:14.581519Z",
          "updated_at": "2023-02-09T09:08:14.581531Z",
          "published_at": "2023-02-09T09:08:14.579817Z",
          "user": 1
      },
      {
          "id": 4,
          "blog_title": "Renamed sample blogRenamed sample blogRenamed sample blogRenamed sample blog",
          "blog_image": "/assets/images.jpeg",
          "blog_content": "2 sample content sample content sample content2 sample content sample content sample content2 sample content sample content sample content2 sample content sample content sample content2 sample content sample content sample content",
          "is_published": "No",
          "blog_url": "/",
          "created_at": "2023-02-09T09:36:21.933037Z",
          "updated_at": "2023-02-09T11:39:31.668841Z",
          "published_at": null,
          "user": 1
      },
      {
          "id": 5,
          "blog_title": "sample blog 2sample blog 2sample blog 2sample blog 2sample blog 2",
          "blog_image": "../assets/images.jpeg",
          "blog_content": "3 sample content sample content sample content3 sample content sample content sample content3 sample content sample content sample content3 sample content sample content sample content3 sample content sample content sample content3 sample content sample content sample content",
          "is_published": "No",
          "blog_url": "/",
          "created_at": "2023-02-09T09:50:41.676834Z",
          "updated_at": "2023-02-09T09:50:41.676846Z",
          "published_at": null,
          "user": 1
      }
  ]
  constructor(){
    super();
    this.state = {
        blogs: this.blogs,
        loading: false
      }
}  
  
  render() 
    {
      return(
        <div className='container my-3'>
        <h1>Blogs</h1>
        <div className='row'>
        {this.state.blogs.map((element)=>{
            return <div className="col-md-3" key={element.id}>
            <BlogItem title={element.blog_title.slice(0,30)} content={element.blog_content.slice(0,50)} imgUrl={element.blog_image} blogUrl={element.blog_url} />
            </div>
        }
        )}
        
            
            {/* <div className="col-md-3">
            <BlogItem title='Samsung' content='Dummy content'/>
            </div>
            <div className="col-md-3">
            <BlogItem title='Oppo' content='Dummy content'/>
            </div>
            <div className="col-md-3">
            <BlogItem title='One Plus' content='Dummy content'/>
            </div> */}
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
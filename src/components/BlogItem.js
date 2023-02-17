import React, { Component } from 'react'

export class BlogItem extends Component {

  render()
  {
    let {title, content, imgUrl, blogId} = this.props;
    return (
        <div className='my-3'>
            <div className="card" style={{width: '18rem'}}>
              <img src={imgUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href="/blogdetail/" className="btn btn-sm btn-primary">Open</a>
              </div>
            </div>
        </div>
    )
  }
}

export default BlogItem;
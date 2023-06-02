import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, source } = this.props;
        return (
            <>
                <div className='my-3'>
                    <div className="card" style={{ width: "20rem", height: "550px" }}>
                        <img src={!imageUrl ? "https://media.istockphoto.com/id/1219838743/vector/breaking-news-banner-template.jpg?s=612x612&w=0&k=20&c=wzjJJyLd5JpWcuSIJVAB794_rJPlDTWqS4o96MRuVyU=" : imageUrl} className="card-img-top" alt="..." style={{ height: "180px" }} />
                        <div className="card-body">
                            <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>
                                {source.name}
                                <span className="visually-hidden">unread messages</span>
                            </span> </h5>
                            <p className="card-text">
                                {description}
                            </p>
                            <p className='card-text'><small className='text-muted'>By {!author ? "unkonown" : author} </small></p>
                            <a href={newsUrl} className="btn btn-primary btn-sm">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem

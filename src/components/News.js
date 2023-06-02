import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general'
      };
    
    
      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
      };

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=61e00cf27b3d4ccea77405a82361e00c&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });
    }

    handlePrevClick = async () => {


        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=61e00cf27b3d4ccea77405a82361e00c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });

        this.setState({
            page: this.state.page - 1
        })

    }

    handleNextClick = async () => {
        // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
        //   return; 
        // }
      
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=61e00cf27b3d4ccea77405a82361e00c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
      
        this.setState({
          page: this.state.page + 1
        });
      }
      

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center my-5'>NewsFlix Top Headlines</h1>
                
                <div className='row'>
                    {this.state.articles.map((element, index) => {

                        return <div className='col-md-4' key={index}>

                            <NewsItem
                                key={element.url}
                                // title={element.title ? element.title.slice(0, 50) : ""}
                                title={element.title}
                                description={element.description ? element.description.slice(0, 80) : ""}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                                author={element.author} 
                                source={element.source}
                            />

                        </div>
                    })}
                </div>

                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News

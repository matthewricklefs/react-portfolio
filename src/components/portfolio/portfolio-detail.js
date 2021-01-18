import React, { Component } from 'react'
import axios from 'axios'

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioItem: {}
        }
    }

    componentWillMount() {
        this.getPortfolioItem()
    }

    getPortfolioItem() {
        axios
            .get(`https://ricklefsmatthew.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
             {withCredentials: true})
            .then(response => {
                this.setState({
                    getPortfolioItem: response.data.portfolio_item
                });               
            })
            .catch(error => {
                console.log('getPortfolioItem error', error);
            })
    }

    render() {

        const {
            banner_image_url,
            category,
            description,
            id,
            logo_url ,
            name,
            position,
            thumb_image_url,
            url,
        } = this.state.portfolioItem

        return (
            <div>
                <h2>{name}</h2>
                <p>{description}</p>


            </div>
        )
    }
}

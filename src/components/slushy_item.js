import React, { Component } from 'react';

export default class SlushyItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: this.props.selected
        }
        this.selectedChange = this.selectedChange.bind(this);
    }
    selectedChange = () => {
        this.setState({
            selected: !this.state.selected
        })
        console.log(this.state.selected);
    }
    render() {
        // const initial_state = {
        //     name: '',
        //     address: '',
        //     credit_info: '',
        // }
        // function changeState() {
        //     this.setState(prevState => ({
        //         check: !prevState.check
        //       }));
        //     }
        return (
            <button className='slushy_item' onClick={this.selectedChange}>
                <img src={this.props.picture} className='image' alt='slushy image'/>
                <div className='title'>{this.props.name}</div>
                <div className='subtitle'>{this.props.flavor}</div>
                <div className="price">${this.props.price}</div>
            </button>
        );
    }
}


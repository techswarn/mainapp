import React from 'react'

export default class Likes extends React.Component {
    constructor() {
        super();
        this.state = {
            like : 100,
            dislike : 25,
            likeActive: false,
            disLikeActive: false,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
      }

    increment() {
        console.log("increment")

        if(this.state.likeActive){
            this.setState(previousValue => ({
                like: previousValue.like + 1,
                dislike: previousValue.like - 1,
            }));
        }
    }

    decrement() {
        console.log("decrement")

        if(this.state.disLikeActive){
            this.setState(previousValue => ({
                dislike: previousValue.dislike + 1,
                like: previousValue.like - 1,
              }));
        }
    }

    render() {
      return (
        <div className="shopping-list">
            <button onClick={this.increment} className="btn space">
            <span>Likes | {this.state.like}</span>
            </button> 

            <button onClick={this.decrement} className="btn space">
            <span>Dislikes | {this.state.dislike}</span>
            </button>   
        </div>
      );
    }
  }

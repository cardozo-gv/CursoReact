import React, { Component } from 'react'


class MemeGenerator extends Component{
  constructor(){
    super();
    this.state = {
      topText : "",
      bottomText : "",
      randomImg : 'http://i.imgflip.com/1bij.jpg',
      allMemeImg : []
    }
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        console.log(memes[0])
        this.setState({
          allMemeImg : memes
        })
      })
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const {name, value} = event.target;
    this.setState({
      [name] : value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const min = 0;
    const max = this.state.allMemeImg.length;
    const rand = min + Math.round(Math.random() * (max - min));
    const img = this.state.allMemeImg[rand].url;
    console.log(img);
    console.log(rand);
    this.setState({
      randomImg : img
    })
  }

  render(){
    return(
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Top text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg}/>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator;

/* State */

class Counter extends React.Component{
  constructor(){
    super();
    this.state = {
      count:0
    }
    this.upCounter = this.upCounter.bind(this);
    this.downCounter = this.downCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  upCounter(e){
    e.preventDefault();
    this.setState(function(prevState){
      return {
        count: prevState.count + 1
      }
    })
  }

  downCounter(e){
    e.preventDefault();
    if(this.state.count > 0){
      this.setState(function(prevState){
        return {
          count: prevState.count - 1
        }
      })
    }

  }

  resetCounter(e){
    e.preventDefault();
    this.setState({
      count: 0
    })
  }



 render(){
   return(
     <div className="counter">
       <div className="count">{this.state.count}</div>

       <div className="changeCount">
         <a href="#" className="upCounter" onClick={this.upCounter}>UP </a>
         <a href="#" className="downCounter" onClick={this.downCounter}>DOWN </a>
         <a href="#" className="resetCounter" onClick={this.resetCounter}>RESET </a>
       </div>

     </div>
   )
 }

}

ReactDOM.render(<Counter/>, document.getElementById('app'));

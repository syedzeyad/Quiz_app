 import React, { Component } from 'react'
 import dataSet from '../api/dataSet' ;
 import QuizArea from './QuizArea';
  import ScoreArea from './ScoreArea';


class Questionnaire extends Component {
  constructor(){
    super();
    this.state = {
      current : 0,
      dataSet:dataSet,
      correct:0,
      incorrect:0,
     /* isFinished:false,*/
      IsPassed:false,
      IsFailed:false
    }
    this.handleClick = this.handleClick.bind(this);

  }

  // handleClick(choice){
  //   if(choice===this.state.dataSet[this.state.current].correct){
  //     this.setState({correct:this.state.correct+1})
  //   }
  //   else{
  //     this.setState({incorrect:this.state.incorrect+1})
  //   }
  //   /*this.setState({isFinished:true})*/
  //     if(this.state.current=== this.state.dataSet.length-1){
  //       if(this.state.correct===2) { 
  //         this.setState({IsPassed:true})
  //       }
  //       else if(this.state.incorrect===2){ 
  //         this.setState({IsFailed:true})
  //       }
  // }
  //   else{
  //       this.setState({current:this.state.current+1})
  //   }   
  // }
  handleClick(choice){
    console.log(this.state.current);
    if(choice===this.state.dataSet[this.state.current].correct){
      this.setState(preState => {
        return {...preState, correct:preState.correct+1}
      })
    } else{
      this.setState(preState => {
        return {...preState, incorrect:preState.incorrect+1}
      })
    }
    /*this.setState({isFinished:true})*/
    if(this.state.current=== this.state.dataSet.length-1)
      {
        if(this.state.correct>1) { 
          console.log("reached true")
          this.setState(preState => {
        return {...preState, IsPassed: true}
        })
          
        } else if(this.state.incorrect>1){ 
          this.setState({IsFailed:true})
        }
  } 
  else{
        console.log("increasing current");
        this.setState(preState => {
          return {...preState, current: preState.current+=1}
        })
    }   
  }
  
     render() {
         return (
             <div>
               <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} IsPassed={this.state.IsPassed} IsFailed={this.state.IsFailed}/>
               <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />  
             </div>
         )
     }
 }
 
 export default Questionnaire;
 

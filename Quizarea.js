import React from 'react'
import Question from './Question';
import AnswerList from './AnswerList';
// import UserGreeting from './UserGreeting';
import IsPassed from './IsPassed';
import IsFailed from './IsFailed';

function Quizarea(props) {
  // if(props.isFinished){
  //   return <UserGreeting />
  // }
  if(props.IsPassed){
    return <IsPassed />
  }
  if(props.IsFailed){
    return <IsFailed />
  }
    return (
        <div>
          <Question dataSet={props.dataSet}/>
          <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
        </div>
    )
}

export default Quizarea;    
  

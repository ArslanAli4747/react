import React, { useEffect, useState } from 'react';
import './App.css';
import { QuestionsState,Difficulty,fetchQuizQuestions } from './API';
import Questions from './components/Questions';
const TOTAL_QUESTIONS = 10;
type USER={
  question:string;
  answer:string;
  qnumber:number;
  correct_answer:string;
}
function App() {
  const [questions, setQuestions] = useState<QuestionsState[]>([]);const [score,setScore] = useState<number>(0);
  const [qnumber,setQnumber] = useState<number>(0)
  const [loading,setLoading] = useState<boolean>(false)
  const [userAnswers,setUserAnswers] = useState<USER[]>([]);
  const [done,setDone] = useState<boolean>(true)

  const startQuiz = async()=>{
    setScore(0)
    setQnumber(0)
    setUserAnswers([])
    setLoading(true)
    setDone(true)
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setDone(false);
    setLoading(false);
    

  }
  const checkAnswer = (e:string)=>{

    if(!done){
      const ans = e
      console.log(ans);
      
      const correct = questions[qnumber].correct_answer === ans;
      if(correct){
        setScore((pre)=>pre+1)

      }
      const answerObject = {
        question:questions[qnumber].question,
        answer:ans,
        qnumber:qnumber+1,
        correct_answer:questions[qnumber].correct_answer
      };
      setUserAnswers((prev)=>[...prev,answerObject])
    }
    
  }
  const nextQuestion = ()=>{
    const next = qnumber + 1
    if (next === TOTAL_QUESTIONS){
      setDone(true)
    }else{
      setQnumber(next)
    }
    
  }


  return (
    <div className="App">
      
      <div className=" flex justify-center font-bungee font-black text-xl text-slate-800 p-2">
              <h2>Quiz APP</h2>
      </div>

        <div className="main bg-slate-500 p-2">
         
          <div className="w-full">
          {
          done || userAnswers.length === TOTAL_QUESTIONS ? (
            <button className="block mr-auto ml-auto mb-3 mt-4 bg-slate-50 pt-3 pb-3 pl-6 pr-6 active:shadow-lg rounded-xl"  onClick={startQuiz}>Start Quiz</button>
          ):null
          }
          {
            loading ? <p className="loading font-bungee font-bold">loading....</p>:null
          }
        
        
            {
              !done && userAnswers.length<=TOTAL_QUESTIONS-1 && !loading && (
            
             <Questions
              qnumber={qnumber+1}
              question = {questions[qnumber].question}
              userAnswer = {userAnswers ? userAnswers[qnumber]:undefined}
              callback={checkAnswer}
              total={TOTAL_QUESTIONS}

              answers = {questions[qnumber].answers}
              score = {score}

              /> 
             )
             }
             {
              !done && userAnswers.length===qnumber+1 && !loading && qnumber!==TOTAL_QUESTIONS ?(
            <button onClick={nextQuestion} className= "w-96 mt-6 ml-auto mr-auto block rounded-lg p-3 hover:bg-amber-700 active:shadow-xl bg-teal-500 font-press">next Question</button>
              ):null
             }
          </div>
      </div>
    </div>
  );
}

export default App;

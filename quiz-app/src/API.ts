export const api = 10;
// export type Question = {
//   category: string;
//   correct_answer: string;
//   difficulty: string;
//   incorrect_answers: string[];
//   question: string;
//   type: string;
// };

// export enum Difficulty {
//   EASY = "easy",
//   MEDIUM = "medium",
//   HARD = "hard",
// }

// export type QuestionsState = Question & { answers: string[] };

// export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
//   const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
//   const data = await (await fetch(endpoint)).json();
//   return data.results.map((question: Question) => ({
//     ...question,
//     answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
//   }))
// };

export type Question = {
    catagory:string;
    type:string;
    difficulty:string;
    question:string;
    correct_answer:string;
    incorrect_answers:string[];
}
export enum Difficulty{
    EASY="easy",
    MEDIUM="medium",
    HARD = "HARD",
} 
export type QuestionsState = {
    answers:string[];
    category:string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers:string[];
    question:string;
    type:string;
}

function suffleArray(array:any[]){
    return [...array].sort(()=>Math.random()-0.5)
}

export const fetchQuizQuestions = async (amount:number,difficulty:Difficulty):Promise<QuestionsState[]>=>{

    const api =  `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    
    // const d = await fetch(api)
    // const c = await d.json()
    // console.log(c);
    let data = await(await fetch(api)).json();
    // console.log(data);
    
    
    return data.results.map((question:Question)=>(
        {
            ...question,
           answers: suffleArray([...question.incorrect_answers,question.correct_answer])
        }
    ))
}

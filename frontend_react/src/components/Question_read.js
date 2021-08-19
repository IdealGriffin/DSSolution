import {useState, useEffect} from "react";
import axios from "axios";

const Question_read = ({match}) =>{
    const {id} = match.params;
    const [question, setQuestion] = useState({
        title:"",
        contents:"",
        author:"",
        date:""
    });
    
    const getQnA = ()=>{
        axios.get('http://localhost:8000/qna/'+id)
        .then(response => setQuestion(response.data));
    }
    
    useEffect(getQnA,[]);
    return(
        <div>
            <div>{question.title}</div>
            <div>{question.contents}</div>
            <div>{question.author}</div>
            <div>{question.date}</div>
        </div>
    )
}

export default Question_read;

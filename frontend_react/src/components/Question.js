import {useState} from "react";
import { Link , useHistory} from "react-router-dom";
import axios from 'axios';
import '../css/Question.css'
import Moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";


const Question = () =>{
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const history=useHistory();

    let writer="admin"

    const updateAnswer = ()=>{
        alert(title+"\n"+contents)
        
        axios
        .post('http://localhost:8000/qna/',{
            title:title,
            contents:contents,
            writer:writer,
            date:Moment(new Date()).format("YYYY-MM-DD"),
        })
        .catch(e => {
            console.error(e);
        })
        history.push("/qna")
    }
    return(
            <div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={title} onChange={e=>setTitle(e.target.value)}></textarea>
                    <label for="floatingTextarea">제목</label>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={contents} onChange={e=>setContents(e.target.value)}></textarea>
                    <label for="floatingTextarea2">내용</label>
                </div>
                <button onClick={updateAnswer}>제출</button>
            </div>
    )
}

export default Question;
import {Component} from "react";
import axios from 'axios';
import Pagination from './Pagination'
import "../css/Notice.css"

class Notice extends Component{
    state={
        currentPage:1,
        perPage:15,
        boardList:{
            count : 4,
            next : null,
            previous : null,
            results:[
                {
                    id: 1,
                    title: "타이틀1",
                    contents: "컨텐츠!@!@",
                    date: "2021.03.07",
                },
                {
                    id: 2,
                    title: "타이틀2",
                    contents: "컨텐츠!@!@",
                    date: "2021.03.08",
                },
                {
                    id: 3,
                    title: "타이틀3",
                    contents: "컨텐츠!@!@",
                    date: "2021.03.09",
                },
                {
                    id: 4,
                    title: "타이틀4",
                    contents: "컨텐츠!@!@",
                    date: "2021.03.10",
                },
            ]
        },
        importantList:[
                {
                    id: 1,
                    title: "타이틀1",
                    contents: "컨텐츠!@!@",
                    date: "2021.03.07",
                },
                {
                    id: 2,
                    title: "타이틀2",
                    contents: "컨텐츠!@!@",
                    date: "2021.03.08",
                },
                {
                    id: 3,
                    title: "타이틀3",
                    contents: "컨텐츠!@!@",
                    date: "2021.03.09",
                },
                {
                    id: 4,
                    title: "타이틀4",
                    contents: "컨텐츠!@!@",
                    date: "2021.03.10",
                },
        ],
        important:false
    }
    getNotice(){
        axios.get('http://localhost:8000/notice/?page='+this.state.currentPage)
        .then(response => this.setState({
            boardList:response.data
         }));
    }
    getImportant(){
        axios.get('http://localhost:8000/notice/important/')
        .then(response => this.setState({
            importantList:response.data
         }));
    }
    checkImportant = ()=>{
        this.state.important=!this.state.important;
    }
    CreateNotice = (e)=>{
        e.preventDefault();
        const title   =e.target[2].value;
        const contents =e.target[3].value;
        const today = new Date();
        
        const formData = new FormData();
        formData.append("important",this.state.important);
        formData.append("title",title);
        formData.append("date",today.toJSON());
        formData.append("contents",contents);
        formData.append("enctype","multipart/form-data");
    
        axios({
            method: "post",
            url: "http://localhost:8000/notice/",
            data: formData,
            headers:{
                "Content-Type":"multipart/form-data",
            }
        }).then(response=>{
            console.log(response)
        });
        window.location.href = "/notice";
    }
    componentDidMount() { //컴포트가 실행될때 처음에 실행되는 함수.
        this.getNotice();
        this.getImportant();
    }

    render(){
        return(
            <div class="Notice">
                <div class="headline">
                    <h2 class="headline-title">
                        공지사항
                        <button type="button" class="btn btn-primary edit_button" data-bs-toggle="modal" data-bs-target="#notice">
                            Edit
                        </button>        
                    </h2>                
                    <div class="modal fade" id="notice" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                        <div class="modal-dialog">
                            <form class="modal-content" onSubmit={this.CreateNotice} >
                            <div class="modal-header">
                                글쓰기        
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" onClick={this.checkImportant}/>
                                    <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp; 중요 공지
                                    </label>
                                </div>
                                <input class="form-control form-check" type="text" placeholder="제목" aria-label="제목"/>
                                <textarea class="form-control form-check" placeholder="내용" rows="3"></textarea>

                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                                <button type="submit" class="btn btn-primary" >저장</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* 테이블 출력부분 */}
                <div class="board-list"> 
                        {this.state.importantList.map((item)=>{
                            return(
                                <div class="important">
                                <a id="board-router" href={"/notice/"+item.id}>
                                    <span class="board-id">{item.id}</span>
                                    <span class="board-title">{item.title}</span>
                                    <span class="board-date">{item.date}</span>
                                </a>
                                </div>
                            )
                            })}
                        {this.state.boardList.results.map((item)=>{
                            return(
                                <div>
                                <a id="board-router" href={"/notice/"+item.id}>
                                    <span class="board-id">{item.id}</span>
                                    <span class="board-title">{item.title}</span>
                                    <span class="board-date">{item.date}</span>
                                </a>
                                </div>
                            )
                            })}
                    </div>
                {/* 페이지네이션 */}
                <Pagination
                    pnt={this}
                    currentPage={this.state.currentPage}
                    total={this.state.boardList.count}
                    perPage={15}
                />
            </div>
        )
    }
}
export default Notice;
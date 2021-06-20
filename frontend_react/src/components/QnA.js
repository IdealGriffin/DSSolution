import {Component} from "react";
import axios from 'axios';
import Pagination from './Pagination'
import "../css/QnA.css"

class QnA extends Component{
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
    }
    getQnA(){
        axios.get('http://localhost:8000/qna/?page='+this.state.currentPage)
        .then(response => this.setState({
            boardList:response.data
         }));
    }


    componentDidMount() { //컴포트가 실행될때 처음에 실행되는 함수.
        //this.getQnA();
    }

    render(){
        return(
            <div class="QnA">
                <div class="headline">
                    <h2 class="headline-title">QnA</h2>
                </div>

                {/* 테이블 출력부분 */}
                <div class="board-list">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end Padding">
                        <button type="button" class="btn btn-secondary">1대1 문의올리기</button>
                    </div>
                    {this.state.boardList.results.map((item)=>{
                        return(
                            <div>
                            <a id="board-router" href={"/QnA/"+item.id}>
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
export default QnA;
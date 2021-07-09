import {Component} from "react";
import axios from 'axios'
import Pagination from './Pagination'
import "../css/FaQ.css"

class FaQ extends Component{

    state = { //변수를 저장하는 곳
        table_kind: "/TOP10",
        currentPage: 1,
        search_value: "",
        boardList:{
            
            count:4,
            results:[{
                id: 1,
                kind: "교환 및 환불",
                top10: 3,
                title: "어떻게 교환환불을 할 수 있나요?",
                contents: "~~으로 전화 안내후 ~~주소로 택배보내주시면 교환환불 친절하게 도와드리겠습니다.",
            },
            {
                id: 2,
                kind: "고장",
                top10: 2,
                title: "긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트긴타이틀 테스트",
                contents: "컨텐츠!@!@",
            },
            {
                id: 3,
                kind: "교환 및 환불",
                top10: 0,
                title: "타이틀3",
                contents: "컨텐츠!@!@",
            },
            {
                id: 4,
                kind: "교환 및 환불",
                top10: 1,
                title: "타이틀4",
                contents: "컨텐츠!@!@",
            },
          ]
        }
    }

    getSearch = (event) => {
        axios
        .get('http://localhost:8000/faq/?search='+event.target.value+'&&page='+this.state.currentPage)
        .then(response => this.setState({
            boardList:response.data
        }))
        .catch(e => {
        console.error(e);
        })
    }
    getFaQ(table_kind){
        axios
        .get('http://localhost:8000/faq'+table_kind+'/?page='+this.state.currentPage)
        .then(response => this.setState({
            boardList:response.data
        }))
        .catch(e => {
        console.error(e);
        })
    }
    componentDidMount() { //컴포트가 실행될때 처음에 실행되는 함수.
        this.getFaQ('/top10');
    }
    render(){
        
        return(
            <div class="FaQ">
                <div class="headline">
                    <h2 class="headline-title">자주 묻는 질문</h2>
                </div>
                <div>
                    <nav class="nav nav-pills flex-column flex-sm-row justify-content-center">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#none" type="button" role="tab" onClick={this.getFaQ.bind(this,'/top10')}>Top10</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#none" type="button" role="tab" onClick={this.getFaQ.bind(this,'')}>전체</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#none" type="button" role="tab" onClick={this.getFaQ.bind(this,'/고객지원')}>고객지원</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#none" type="button" role="tab" onClick={this.getFaQ.bind(this,'/고장')}>고장</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#none" type="button" role="tab" onClick={this.getFaQ.bind(this,'/교환 및 환불')}>교환 및 환불</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#none" type="button" role="tab" onClick={this.getFaQ.bind(this,'/기타')}>기타</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" onClick={this.getFaQ.bind(this,'')}>검색</button>
                            </li>
                        </ul>
                    </nav>
                    <div class="tab-content nav flex-column flex-sm-row justify-content-end" id="myTabContent">
                        <div class="tab-pane fade show active" id="none"></div>
                            <div class="tab-pane fade" id="profile">
                                <input type="text" class="form-control" placeholder="검색" aria-label="search" value={this.search_value} onChange={this.getSearch}/>
                            </div>
                    </div>

                    <div class="accordion padding-15">
                        
                        { this.state.boardList.results.map((c,index)=>{
                        return(
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#accordion"+index} aria-expanded="false">
                                    {c.kind} {c.title}
                                </button>
                                </h2>
                                <div id={"accordion"+index} class="accordion-collapse collapse" aria-labelledby="flush-headingOne">
                                <div class="accordion-body">{c.contents}</div>
                                </div>
                            </div>
                        )
                        })}
                    </div>
                    
                    <Pagination
                        pnt={this}
                        currentPage={this.state.currentPage}
                        total={this.state.boardList.count}
                        perPage={1}
                    />
                </div>
            </div>
     )
    }
}

export default FaQ;
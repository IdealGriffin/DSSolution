import {Component} from "react";
import axios from 'axios';
import '../css/MenuBar.css'
import logo from '../media/logo.png';

class MenuBar extends Component{
    state={

    }

    render(){
        return(
            <div id='menu'>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/"><img id="logo" alt="로고" src={logo}/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a id="menu-router" class="nav-link" href="/company">회사소개</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/introduce" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span id="menu-router"> 제품소개 </span>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/product/1">제품1</a></li>
                                    <li><a class="dropdown-item" href="/product/2">제품2</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="/product/3">제품3</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span id="menu-router"> 고객지원 </span>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/faq">자주묻는질문</a></li>
                                    <li><a class="dropdown-item" href="/qna">1대1 문의</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="/support">고객지원</a></li>
                                    <li><a class="dropdown-item" href="/news">뉴스</a></li>
                                </ul>
                            </li>
                            
                            <li class="nav-item">
                                <a id="menu-router" class="nav-link" href="/notice">공지사항</a>
                            </li>

                     <button class="btn btn-outline-success" type="submit">Login</button>
                     <button class="btn btn-outline-success" type="submit">회원가입</button>                     
                        </ul>
                     </div>
                </nav>

            </div>
        )
    }
}
export default MenuBar;
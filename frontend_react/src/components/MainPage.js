import {Component} from "react";
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react' 
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import '../css/MainPage.css'



class MainPage extends Component{
    state = { //변수를 저장하는 곳
        banner : [
            {
              id : 1,
              name : "기본 배너",
              location : "https://picsum.photos/1024/480/?image=52",
            },
            {
              id : 2,
              name : "기본 배너2",
              location : "https://picsum.photos/1024/480/?image=52",
            },
            {

              id : 3,
              name : "기본 배너3",
              location : "https://picsum.photos/1024/480/?image=52",
            },
            {
              id : 4,
              name : "기본 배너4",
              location : "https://picsum.photos/1024/480/?image=52",
            },
        ],
        latestNews : {
          title : "최근 뉴스 제목 기본 값",
          contents : "최근 뉴스 컨텐츠 기본 값",
          image_url : "https://www.flaticon.com/svg/vstatic/svg/3892/3892387.svg?token=exp=1617807030~hmac=7130147e145469bcca4319fb37920ab9",
          link_url : ""
        },
        latestNotice : {
          title : "최근 공지 제목 기본 값",
          contents : "최근 공지 컨텐츠 기본 값",
          image_url :"https://www.flaticon.com/svg/vstatic/svg/3892/3892387.svg?token=exp=1617807030~hmac=7130147e145469bcca4319fb37920ab9",
        },
        groups : [
            {
              name : "기본 이미지",
              image_url : "https://www.flaticon.com/svg/vstatic/svg/1786/1786971.svg?token=exp=1617804450~hmac=ffc3c263fae13afe7bf02256e0f2655a",
            },
        ],
        cooporate : [
            {
              name : "기본 이미지",
              image_url : "https://www.flaticon.com/svg/vstatic/svg/1786/1786971.svg?token=exp=1617804450~hmac=ffc3c263fae13afe7bf02256e0f2655a",
            },
            {
              name : "기본 이미지2",
              image_url : "https://www.flaticon.com/svg/vstatic/svg/1786/1786971.svg?token=exp=1617804450~hmac=ffc3c263fae13afe7bf02256e0f2655a",
            },
            {
              name : "기본 이미지3",
              image_url : "https://www.flaticon.com/svg/vstatic/svg/1786/1786971.svg?token=exp=1617804450~hmac=ffc3c263fae13afe7bf02256e0f2655a",
            },
            {
              name : "기본 이미지4",
              image_url : "https://www.flaticon.com/svg/vstatic/svg/1786/1786971.svg?token=exp=1617804450~hmac=ffc3c263fae13afe7bf02256e0f2655a",
            },
            {
              name : "기본 이미지5",
              image_url : "https://www.flaticon.com/svg/vstatic/svg/1786/1786971.svg?token=exp=1617804450~hmac=ffc3c263fae13afe7bf02256e0f2655a",
            },
          ],
    }
    loadtable=() => axios.get('http://localhost:8080/api/posts') //백엔드 주소 GET 하겠다.
                    .then(response => this.setState({
                        posts:response.data.data
                    }))
                    .catch(e => {
                    console.error(e);
                    })
    componentDidMount() { //컴포트가 실행될때 1번 처음에 실행되는 함수.
        this.loadtable();
    }

    render(){
        return(
            <div class="MainPage">
                
                {/* 캐러셀 적용 */}
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    {this.state.banner.map((b, index) =>{
                        return(<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} class={index===0?"active":""} aria-label="Slide"></button>)
                    })}
                </div>
                
                <div class="carousel-inner">
                    {this.state.banner.map((b, index) => {
                        return (<div class={"carousel-item"+(index===0?" active":"")}>
                                    <img src={b.location} class="d-block w-100" alt="carousel"/>
                                </div>);
                    })}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                
                {/* 뉴스 및 공지 카드 적용 */}
                <div class="card-group" style={{padding:"30px"}}>
                    <div class="card" id="left-news">
                        <img src={this.state.latestNews.image_url} class="card-img-top" alt="최신뉴스"/>
                        <div class="card-body">
                        <h5 class="card-title">{this.state.latestNews.title}</h5>
                        <p class="card-text">{this.state.latestNews.contents}</p>
                        <a href="#/news" class="btn btn-primary">더보기</a>
                        </div>
                    </div>
                    <div class="card" id="right-notice">
                        <img src={this.state.latestNotice.image_url} class="card-img-top" alt="최신공지"/>
                        <div class="card-body">
                        <h5 class="card-title">{this.state.latestNotice.title}</h5>
                        <p class="card-text">{this.state.latestNotice.contents}</p>
                        <a href="#/notice" class="btn btn-primary">더보기</a>
                        </div>
                    </div>
                </div>
                
                {/* 제품들 */}
                <Swiper
                    class="swiper-container"
                    loop={false}
                    pagination={{
                        clickable: false
                    }}
                    navigation= {{ 
                        nextEl: '.swiper-button-next', 
                        prevEl: '.swiper-button-prev' 
                    }}
                    breakpoints={{ 
                        // 화면의 넓이가 320px 이상일 때 
                        320: { slidesPerView: 1.5, spaceBetween: 20 }, 
                        // 화면의 넓이가 640px 이상일 때 
                        640: { slidesPerView: 2.5, spaceBetween: 30 } 
                    }}
                >
                { this.state.groups.map((g,index)=>{
                    return(
                    <SwiperSlide> <a href="#/product/1"><img id="cooporate-img" src={g.image_url} alt={g.name}/> </a> </SwiperSlide>
                    );
                })}
                </Swiper>

                {/* 협력사 */}
                <div id="cooporate">
                <h2>Cooporate</h2>

                    <Swiper
                        class="swiper-container"
                        loop={true}
                        pagination={{
                            clickable: false
                        }}
                        breakpoints={{ 
                            // 화면의 넓이가 320px 이상일 때 
                            320: { slidesPerView: 2.5, spaceBetween: 20 }, 
                            // 화면의 넓이가 640px 이상일 때 
                            640: { slidesPerView: 5, spaceBetween: 30 } 
                        }}
                    >
                    { this.state.cooporate.map((c,index)=>{
                     return(
                        <SwiperSlide> <img id="cooporate-img" src={c.image_url} alt={c.name}/> </SwiperSlide>
                     );
                    })}
                    </Swiper>
                </div>
            </div>
        );
    }
}
export default MainPage;
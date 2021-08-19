import {Component} from "react";
import axios from 'axios';
import '../css/BottomBanner.css'
import bottom_logo from '../media/bottom_logo.png'

class BottomBanner extends Component{
    state={
        bottominfo:{
            line1:"상호 : (주)DS솔루션 대표 장진영 사업자등록번호 123-12-12345",
            line2:"주소 : 경기도 수원시 영통구 영통로237,  5층 507호 (에이스 하이엔드) TEL : 010-3090-9876 FAX : 031-546-6700"
        }
    }

    render(){
        return(
            <div class='Bottom-banner'>
                <img id='bottom-logo' alt='하단로고' src={bottom_logo} />
                <div class="company-info">
                    <div>{this.state.bottominfo.line1}</div>
                    <div>{this.state.bottominfo.line2}</div>
                    <div>copyright(c) DS솔루션 All rights reserved</div>
                </div>
            </div>
        )
    }
}
export default BottomBanner;
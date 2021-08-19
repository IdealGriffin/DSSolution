import {useState,useEffect} from "react";
import axios from 'axios';
import Moment from 'moment';
import "../css/Photos.css"

const Photos = ({kind}) =>{
    const [photoList, setPhotoList] = useState(
    [
        {
            image:"https://picsum.photos/1024/480/?image=52",
            name:"1"
        },
        {
            image:"https://picsum.photos/1024/480/?image=52",
            name:"2"
        }
    ]
    );

    const getPhotoList=() => axios.get("http://localhost:8000/"+kind)
                                .then(result=>setPhotoList(result.data))
                                .catch(e => {
                                console.error(e);
                                })
    const uploadModule= async (e)=>{
        e.preventDefault();
        const name=e.target[0].value;
        const upload_file = e.target[1].files[0];

        const formData = new FormData();
        formData.append("name",name);
        formData.append("image",upload_file);
        formData.append("enctype","multipart/form-data");

        axios({
            method: "post",
            url: "http://localhost:8000/"+kind,
            data: formData,
            headers:{
                "Content-Type":"multipart/form-data",
            }
        }).then(response=>{
            console.log(response)
        })
        getPhotoList();
        window.location.href = "";
    }
    useEffect(getPhotoList,[])
    return(
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-2">
                {photoList.map((p,index)=>{
                    return(
                        <div class="col">
                            <div class="card">
                                <img src={p.image} class="card-img-top" alt={p.name}/>
                            </div>
                        </div>
                    )
                })}

                <div class="col">
                    <div class="card">
                        <form onSubmit={uploadModule} class="match_width">
                            <input type="text" name="name" class="match_width"/>
                            <br/>
                            <input type="file" name="image" accept=".gif, .jpg, .png" class="match_width"/>
                            <input type="submit" value="제출"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photos;
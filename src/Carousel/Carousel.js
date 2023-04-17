import React, {useEffect, useState} from "react";
import axios from "axios";



const Carousel =() =>{

    const [imgCat,setImgCat ]=useState([])
    const [picked,pickedImg] = useState({})
    const [slide,setSlide] = useState({})


    useEffect(() =>{
        axios.get(` https://api.thecatapi.com/v1/images/search?limit=10`)
            .then(({data}) =>{
                setImgCat(data)
                console.log(data)
            })
    },[])


     const next =()=>{

     setSlide(imgCat.indexOf(picked) +1)
      pickedImg(imgCat[slide])
         console.log(imgCat[slide])
     }
     const prev =()=>{
        setSlide(imgCat.indexOf(picked) - 1)
         pickedImg(imgCat[slide])
     }


    return(
        <div className={'wrapper'}>
            <div className={'wr-main-img'}>
                <button onClick={() => prev(picked)} >prev</button>
                <img className={'main-img'} src={picked.url} alt=""/>
                 <button   onClick={() => next(picked)} >next</button>
            </div>
            <div className={'wrap-cat'}>
                {
                    imgCat.map((cat,index) =>{
                            return(
                                <div
                                    className={'inner-cat'} key={cat.id}
                                    onClick={() =>pickedImg(cat)}>
                                    <div>
                                        <img className={'img-under'} src={cat.url} alt=""/>
                                    </div>
                                    
                                </div>
                            )
                        }
                    )
                }
            </div>

        </div>
    )
}
export default Carousel
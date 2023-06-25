import { useEffect } from "react"
import { useState } from "react"

const Home = ({category}) => {

    const[photos,setPhotos]=useState([])
    const [page,setPage]=useState(1)

    const url=`https://api.unsplash.com/search/photos?query=${category}&client_id=ghCeuYTCO1sv6jsQIKXYA-kvYtaKxgJ8hcY1P6beAPc&page=${page}&per_page=20`
    
    const getPhotos=async()=>{
    try {
      let res=await fetch(url);
      let data= await res.json()
      
      // setPhotos((old)=>[...old,data.results])
      setPhotos(data.results)
    } catch (error) {
      console.log(error)
    }
    }
    useEffect(()=>{
      getPhotos();
    },[url])
    
const handleMore=()=>{
setPage((prev)=>prev+1)
}
  return (
    <div >
    <h3 className="title">{category} Wallpapers</h3>
     <div className="main__section">
     {photos.map((photo)=>{
      const{id}=photo;
      
    
      return <a href={photo.urls.regular}  key={id} className="card">
    <img src={photo.urls.regular} className="photos shadow" alt="..."/>
  <div className="card-body">
     <div>
     <img src={photo.user.profile_image?.small} className="user__img" alt="" />
     <p className="card-text">{photo.user.name}</p>
     </div>
    <a 
    download
    href={photo.links.download} 
    className="download__btn" data-bs-toggle="tooltip" data-bs-placement="top"
    title="Download"
     >
    <i className="fa-solid fa-eye"></i>
  
    </a>
  </div>
</a>
  })}
  
   </div>
   <button onClick={handleMore} className="more__btn">More</button>
  </div>
  )
}

export default Home

import { useState,useEffect } from "react"

const SearchPhotos = () => {
    
  const[searchPhotos,setSearchPhotos]=useState([])
  const[searchData,setSearchData]=useState('')
  const [page,setPage]=useState(1)
  const [show,setShow]=useState(false)

  const url=`https://api.unsplash.com/search/photos?query=${searchData}&client_id=ghCeuYTCO1sv6jsQIKXYA-kvYtaKxgJ8hcY1P6beAPc&page=${page}&per_page=20`
  
  const getPhotos=async()=>{
  try {
    let res=await fetch(url);
    let data= await res.json()
    setSearchPhotos(data.results)
  } catch (error) {
    console.log(error)
  }
  }
  useEffect(()=>{
    getPhotos();
  },[url])

const handleSubmit=(e)=>{
e.preventDefault()
setShow(true)
console.log(searchData)

}
const handleChange=(e)=>{
setSearchData(e.target.value)
}
const handleBack=()=>{
  setShow(false)
  setSearchData("")
}
  return (
    <>
      
   <div className="search" onClick={()=>{setShow(false)}}>
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={handleChange} value={searchData} name="search" id="search__bar" placeholder="Search" required />
      <button className="search__btn" type="submit">Search</button>
    </form>
   </div>
 
   {show && (
    <>
    <div className="search__body">
    <button className="back_btn" onClick={handleBack}>&larr;Back</button>
     <h3 className="title">{searchData || "No Search"} Wallpapers</h3>
     <div className="main__section">
     {searchPhotos.map((photo)=>{
      return <a href={photo.urls.regular} key={photo.id} className="card">
    <img src={photo.urls.regular} className="photos" alt="..."/>
  <div className="card-body">
     <div>
     <img src={photo.user.profile_image?.small} className="user__img" alt="" />
     <p className="card-text">{photo.user.name}</p>
     </div>
    <a download={photo.urls.regular} href="#" className="download__btn" >    <i className="fa-solid fa-eye"></i>
</a>
  </div>
</a>
  })}
  </div>
     
     <button className="more__btn" onClick={()=>setPage((prev)=>prev+1)}>More</button>
    </div>
    </>
   )}
    </>
  )
}

export default SearchPhotos

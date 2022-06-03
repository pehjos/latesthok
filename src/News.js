
import React, { useEffect ,useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './news.css'

import { useDispatch, useSelector } from 'react-redux';
import ApiNews from './ApiNews';

function useQuery1() {
  return new URLSearchParams(useLocation().search);
}
function News(setCurrentId) {
  const history = useHistory() 
  let news="stories"
  let country=JSON.parse(localStorage.getItem("country"))


  const home=()=>{
    history.push("/")
    window.location.reload(false)
    }
  



// FETCH POST
  const query = useQuery1();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const user = JSON.parse(localStorage.getItem('profile'));
const {posts,isLoading}=useSelector((state)=>state.posts)
// console.log(posts)
const recommendedPosts = posts?.filter(({ tags }) => tags== 'trend');
// console.log(recommendedPosts)
// // stories
console.log(recommendedPosts)

if(!posts?.length && !isLoading){
  return <div className="no_search">

<div className="search__header__result"> 
        <h3>No Result Found</h3>
        <img src="https://img.icons8.com/ios/50/000000/search-property.png"/>
    <a><h3 onClick={home}>Back To Home</h3></a>  
       </div> 

  </div>
}
return (
<div className="news">
  
<ApiNews/>
 
  <div>
   <div className="stories">
  <div className="stories1">

 
     </div>

    </div>
    


</div>

<div className="ap">
<div className="Page__div">
</div>

  <div className="apis">

</div>
</div>


</div>

)
}

export default News

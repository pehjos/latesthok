import React,{useState,useEffect} from 'react'
import './news.css'
import {  useQuery } from 'react-query'

import { useDispatch, useSelector } from 'react-redux';
import Card from  './Card'
import ScienceApi from './ScienceAPI'
import CardPost from  './CardPost'
import Paginate from './Pagination';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import {getPostsBySearch,getPost} from './actions/Post'
function useQuery1() {
  return new URLSearchParams(useLocation().search);
}
function Science(setCurrentId) {
 
// FETCH POST

const { DtaLoading, error, data } = useQuery('scienct', () =>
fetch('https://saurav.tech/NewsAPI/top-headlines/category/science/us.json').then(res =>
  res.json()

)
)
  const query = useQuery1();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

const {posts,isLoading}=useSelector((state)=>state.posts)

// filter
const { tag} = useParams();
const dispatch=useDispatch();
useEffect(() => {
  dispatch(getPost(tag));
}, [tag]);
const recommendedPosts = posts.filter(({ tags }) => tags== 'science');

if(!recommendedPosts.length && !isLoading){
  return 'no Post'
}
return (
<div className="news">
{/* {
isLoading?("Loading"):
(<div> */}
{/* {recommendedPosts.map((post)=>(  
<CardPost post={post} setCurrentId={setCurrentId} key={post._id}
newsrc={post.name}
newtype={post.accountType}
newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
Url="url"
newimage={post.image}
video={post.video}
title={post.title}
description={post.description}
tag={post.tags}
seeMore="see more..."
articlebody={post.description}
ProviderUrl="url"
time={post.createdAt}
share="100"
love={post.likeCount}
comment="79"
/>
))} */}
{/* </div>)
} */}
<div className="Page__div">

{/* <ScienceApi/> */}
{recommendedPosts.map((post,index)=>(  
    
    index<3&&(
      
      // post.tags!=="Local News"?"":(
<CardPost post={post} setCurrentId={setCurrentId} key={post._id}
newsrc={post.name}
newtype={post.accountType}
newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
Url="url"
newimage={post.image}
video={post.video}
title={post.title}
description={post.description}
tag={post.tags}
seeMore="see more..."
articlebody={post.description}
ProviderUrl="url"
time={post.createdAt}
share=""
photo={post.photo}
love={post.likeCount}
comment={post.comments.length}
_id={post._id}
/>

  )))}
</div>
{ data && data.articles.map(post1 => (
<Card

photo="{post.photo}"
newsrc={post1.source.name}
newtype="MH"
newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
Url="url"
newimage={post1.urlToImage}
// video={post1.video}
title={post1.title}
tag="local"
description={post1.description}
seeMore="see more..."
articlebody={post1.content}
rank="view"
src="#news"
ProviderUrl={post1.url}
time={post1.publishedAt}
_id={post1._id}
share=""
Clicks="@news"




/>
))} 
</div>

)
}

export default Science

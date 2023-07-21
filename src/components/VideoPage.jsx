import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineLike,AiOutlineDislike } from 'react-icons/ai';
import {BiCommentDetail} from 'react-icons/bi';
import '../styles/VideoPage.css'
const VideoPage = () => {
    let link=localStorage.getItem('link');
    let pic=localStorage.getItem('pic');
    let name=localStorage.getItem('name');
    let like=localStorage.getItem('like');
    let comment=localStorage.getItem('comment');
  return (
    <div>
        <div className='arrow'>
        <Link to='/'>
        <img src='https://cdn-icons-png.flaticon.com/512/109/109618.png' />
        </Link>
         </div>
         <div className='video'>
         <video src={link} controls autoPlay/>
         </div>
         <div className='channel1'>
            <img src={pic} alt="Img Not Found" />
            <p>{name}</p>
         </div>
         <div className='likes'>
            <AiOutlineLike className='like'/>{like}<AiOutlineDislike className='dislike'/>0
         </div>
         <div className='comments'>
            <p>
            {comment}
            </p>Comments<BiCommentDetail className='comment'/>
         </div>
    </div>
  )
}

export default VideoPage

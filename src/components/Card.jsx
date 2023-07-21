import React, { useState } from 'react';
import '../styles/Card.css';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ video }) => {
    const navigate=useNavigate();
  const onClickHandler = (e) =>{
    e.preventDefault();
    localStorage.setItem('link',video.submission.mediaUrl);
    localStorage.setItem('pic',video.creator.pic);
    localStorage.setItem('name',video.creator.name);
    localStorage.setItem('like',video.reaction.count);
    localStorage.setItem('comment',video.comment.count);
    navigate('/video');
  }
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
      setIsHovered(true);
    };
  
    const handleMouseOut = () => {
      setIsHovered(false);
    };
  return (
    <Link onClick={onClickHandler} className='link'>
    <div className='main-container'>
        <div className='thumbnail' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {isHovered ?  <video src={video.submission.mediaUrl} controls autoPlay/> :  <img src={video.submission.thumbnail} alt='Img Not Found'/>}
        </div>
        <div className='channel'>
        <img src={video.creator.pic} alt='Img Not Found' />
        <h4>{video.submission.title}</h4>
        </div>
        <div className='about'>
        <p>{video.creator.name}</p>
        </div>
        <div className='about'>
        <p>{video.reaction.count} views</p>
        </div>
    </div>
    </Link>
  );
};

export default Card;

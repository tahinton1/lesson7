import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function VideoSidebar({likes, shares, messages}) {
  const [liked,SetLiked] =useState(false);

  return (
    <div className='videoSidebar'>
        <div className='videoSidebar_button'>
          {liked ?(
            <FavoriteIcon 
            fontSize='large'
            onClick={(e) => SetLiked(false)}
            />
          ):(
            <FavoriteBorderIcon
            fontSize='large'
            onClick={(e) => SetLiked(true)}/>
          )}
          
          <p>{liked ? likes +1 : likes}</p>
        </div>

        <div className='videoSidebar_button'>
          <MessageIcon fontSize='large'/>
          <p>{messages}</p>
        </div>

        <div className='videoSidebar_button'>
          <ShareIcon fontSize='large'/>
          <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar
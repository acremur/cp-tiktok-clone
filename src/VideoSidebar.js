import React, { useState } from 'react'
import './VideoSidebar.css'
import { Favorite, Message, Share, FavoriteBorder } from '@material-ui/icons'

function VideoSidebar({ likes, messages, shares }) {

    const [linked, setLinked] = useState(false)
    
    return (
        <div className='videoSidebar'>
            <div className="videoSidebar__button">
                {linked ? (
                    <Favorite
                        className='favIcon'
                        fontSize='large' 
                        onClick={e => { 
                            setLinked(false)
                        }}
                    />
                    ) : (
                        <FavoriteBorder
                        className='favIcon' 
                        fontSize='large' 
                        onClick={e => { 
                            setLinked(true)
                        }}
                    />
                    )}        
                <p>{linked ? `${likes+1}` : `${likes}`}</p>
            </div>
            <div className="videoSidebar__button">
                <Message fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <Share fontSize='large' />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
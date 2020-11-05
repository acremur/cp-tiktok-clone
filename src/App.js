// Trasneconomico -> https://snaptik.app/dl.php?token=aHR0cHM6Ly92MTZtLnRpa3Rva2Nkbi5jb20vZjc1NTkxMzJkMjVmYjY2MDRmYmM0NzBlMGZiYWZiMmEvNWZhMjIzOTcvdmlkZW8vdG9zL2FsaXNnL3Rvcy1hbGlzZy1wdmUtMDAzN2MwMDEvZjI4MmQzY2MwYmM3NDAwYjg1MGQ2MTIzMDQwYzFkZjkvP2E9MTIzMyZicj0xNzMyJmJ0PTg2NiZjcj0wJmNzPTAmY3Y9MSZkcj0wJmRzPTYmZXI9Jmw9MjAyMDExMDMyMTQzMzEwMTAxMTUwMDQwNTMxRjQ5QzAyNyZscj1hbGwmbWltZV90eXBlPXZpZGVvX21wNCZxcz0wJnJjPWFtdzNOMmRsZURrMGR6TXpOamN6TTBBcFBEVm5ObWcxTldRM04yWTNhR1kxTTJkc0xtcHJMVzB0TW5OZkxTMHZNVFJ6YzE4ek5GOHpZMkJpWGpOaFlERmVMakU2WXclM0QlM0Qmdmw9JnZyPQ%3D%3D&name=elchicofitness1&id_video=6880957862714166530
// Hairstyle -> https://snaptik.app/dl.php?token=aHR0cHM6Ly92MjEudGlrdG9rY2RuLmNvbS92aWRlby90b3MvdXNlYXN0MmEvdG9zLXVzZWFzdDJhLXZlLTAwNjhjMDA0Lzc4ZGZhZDg1MWI0MjQxOTZhZjg2MTRhZDlmMzIyNWY2Lz9WRXhwaXJhdGlvbj0xNjA0NDYxNjM5JlZTaWduYXR1cmU9ZjczY2I0ZjMwZTMzNmQ0ZTY0MGU2MGIzMjlmYmRiOTAmYT0xMjMzJmJyPTIyOTgmYnQ9MTE0OSZjcj0wJmNzPTAmY3Y9MSZkcj0wJmRzPTYmZXI9Jmw9MjAyMDExMDMyMTQ3MDMwMTAyMzQxMDkyMDAyOTQ4RjdFMCZscj1hbGwmbWltZV90eXBlPXZpZGVvX21wNCZxcz0wJnJjPWFtbzhiMlk2YkhBemVETXpOemN6TTBBcGFEWTdOV2d6T21RNU56dzBPR1l6WkdkaFptMW9hRFZoYzJOZkxTMWlNVFp6Y3pBdk1DNWhZVEJnTTE4eU1UVXpObUk2WXclM0QlM0Qmdmw9JnZyPQ%3D%3D&name=animalampampclub&id_video=6889961946834128134

// import React, { useState, useEffect } from 'react'
import './App.css';
import Video from './Video'
// import axios from './axios'

import hairstyle from './data/hairstyle.mp4'
import transeconomico from './data/transeconomico.mp4'

function App() {

  // const [videos, setVideos] = useState([])

  // useEffect(() => {
  //   async function fetchPosts() {
  //     const response = await axios.get('/v2/posts')
  //     setVideos(response.data)

  //     return response
  //   }

  //   fetchPosts()
  // }, [])
  
  return (
    <div className="app">
      <div className="app__videos">
        {/* {videos.map(({ _id, url, channel, description, song, likes, messages, shares }) => (
          <Video 
            key={_id}
            url={url} 
            channel={channel}
            description={description}
            song={song}
            likes={likes} 
            messages={messages} 
            shares={shares} 
          />
        ))} */}

        <Video 
          url={hairstyle}
          channel="acremur" 
          description="A haircut's cute dog" 
          song="Gangnanm Style" 
          likes={250} 
          messages={100} 
          shares={12} 
        />
        <Video 
          url={transeconomico}
          channel="acremur" 
          description="Man recording himself telling jokes" 
          song="No Music" 
          likes={453} 
          messages={426} 
          shares={47} 
        />
      </div>
    </div>
  );
}

export default App;
import React,{ useState, useEffect }  from 'react';
import axios from 'axios';
import Card from './Card';
import '../styles/VideoList.css'

const VideoList = ({page}) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
      // Function to fetch data using Axios
      const fetchVideos = async () => {
        try {
          const response = await axios.get(`https://internship-service.onrender.com/videos?page=${page}`);
          setVideos(response.data.data.posts); // Update the state with fetched data
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchVideos().then(console.log(videos));
       // Call the fetchVideos function when the component mounts
    }, [page]);
  return (
    <div className='videos'>
    {videos.map((video) => (
      <div key={video.postId}>
        <Card video={video}/>
      </div>
    ))}
  </div>
  )
}

export default VideoList

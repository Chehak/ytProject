import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { YT_SEARCH_RESULTS } from '../utils/constants';
import VideoCard from './VideoCard';

const SearchResults = () => {
  const [videos,setVideos] = useState([]);
  const [searchParam] = useSearchParams();
  const search_query = searchParam.get("search_query");
  console.log(search_query,"search_query");

  useEffect(()=>{
    fetchResults();
  },[search_query]);

  const fetchResults = async()=>{
    const data = await fetch(YT_SEARCH_RESULTS+search_query);
    const json = await data.json();
    setVideos(json.items)
  }
  return (
    <div className="ml-36">
     {videos.map((video) => (
        <Link to={"/watch" + "?v=" + video?.id?.videoId}>
          <VideoCard info={video} key={video?.id} fromSearchPage={true} />
        </Link>
      ))}
    </div>
  )
}

export default SearchResults
import React, {useEffect, useState} from 'react'
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";



 
  const apiKey = "301d5e2fc6f907ef86d8b8336cbbe13b";
 const url = "https://api.themoviedb.org/3";
 const imgurl = "https://image.tmdb.org/t/p/original";
 const upcoming = "upcoming";
 const NowPlaying = "now_playing";
 const popular = "popular";
 const topRated = "top_rated";
 

 const Card = ({ img }) => <img className = "card" src= {img} alt = "cover" />;

 const Row = ({ title , arr = []}) =>(
  <div className = "row">
    <h2>{title}</h2>
    <div>
      {arr.map((item , index) =>(
        <Card key= {index} img = {`${imgurl}/${item.poster_path}`}/>
      ))}
      </div>
      </div>

 )

const Home = () => {
  const [upcomingMovies,setUpcomingMovies] = useState([]);
  const [nowPlayingMovies , setNowPlayingMovies] = useState([]);
  const [popularMovies , setPoplarMovies] = useState([]);
  const [topRatedMovies , setTopRatedMovies] =  useState([]);
  const [genre , setGenre] = useState([]);

  

  useEffect(() => {
    const fetchUpcoming = async()=>{
      const{
        data: {results},
      }= await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
      
    };
    const fetchNowPlaying = async()=>{
      const{
        data: {results},
      }= await axios.get(`${url}/movie/${NowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
      
    };
    const fetchPopular = async()=>{
      const{
        data: {results},
      }= await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPoplarMovies(results);
      
    };
    const fetchTopRated = async()=>{
      const{
        data: {results},
      }= await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
      
    };
    const getAllGenre = async()=>{
      const{
        data: {genres},
      }= await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
      console.log(genres)
      
    };
       getAllGenre();
        fetchUpcoming();
        fetchNowPlaying();
        fetchPopular();
        fetchTopRated();
  },[]);
  

  return (
    <section className = "home">
      <div 
      className = "banner"
      style= {{
        backgroundImage: popularMovies[0]
        ?`url(${`${imgurl}/${popularMovies[0].poster_path}`})`
        :'rgb(16,16,16)',
      }}
      >
      {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
      {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

      <div>
        <button><BiPlay /> play </button>
        <button> My List <AiOutlinePlus /></button>
        </div>
        </div>
      

      <Row title={"Upcoming"} arr ={upcomingMovies} />
      <Row title={"Now Playing"} arr ={nowPlayingMovies} />
      <Row title={"Popular"} arr ={popularMovies} />
      <Row title={"Top Rated"} arr ={topRatedMovies} />

      <div className = "genreBox">
        {genre.map((item)=>(
          <Link key = {item.id} to = {`/genre/${item.id}`}>
            {item.name}
            </Link>
        ))};
        </div>
      </section>
      );
        };
        
export default Home;
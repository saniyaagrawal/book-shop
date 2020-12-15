import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Paper } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import "./Home.css";
import MyCard from "./MyCard";
import axios from 'axios';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect((e)=>{
    const run=async () => { await axios.get('http://localhost:3001/')
      .then(response => { setBooks(response.data)
         console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
    return ()=>{
        run();
    }
  },[])

  const handleInput = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  // console.log(my_books);
  return (
    // <>
      <div className="home background_home">
        <div className="search">
          <Paper component="form">
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search course" }}
              style={{ marginLeft: 1 }}
              value={keyword}
              onChange={handleInput}
            />
          </Paper>
        </div>
        <div className="body">
          <div className="genre">
            <h1 className="heading">Classics</h1>
            <div className="cards">
            {books.filter((d)=>d.genre.toLowerCase().includes('classic')).filter((c)=>c.name.toLowerCase().includes(keyword.toLowerCase())).map((book)=>(<div className='single_card'><MyCard key="1" id="1" book={book} /></div>
           ))}
            </div>
          </div>
          <div className="genre">
            <h1 className="heading">Novel</h1>
            <div className="cards">
            {books.filter((d)=>d.genre.toLowerCase().includes('fic')).filter((c)=>c.name.toLowerCase().includes(keyword.toLowerCase())).map((book)=>(<div className='single_card'><MyCard key="1" id="1" book={book} /></div>
           ))}
           </div>
          </div>
          <div className="genre">
            <h1 className="heading">Detective and Mystery</h1>
            <div className="cards">
            {books.filter((d)=>d.genre.toLowerCase().includes('romance')).filter((c)=>c.name.toLowerCase().includes(keyword.toLowerCase())).map((book)=>(<div className='single_card'><MyCard key="1" id="1" book={book} /></div>
           ))}
           </div>
          </div>
        </div>
      </div>
    // </>
  );
};
export default Home;

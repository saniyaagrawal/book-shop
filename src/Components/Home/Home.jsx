import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Paper } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import "./Home.css";
import MyCard from "./MyCard";

const books = [
  {
    id: 1,
    name: "book 1",
    detail: "simple book",
    price: "500"
  },
  {
    id: 2,
    name: "book 2",
    detail: "simple book",
    price: "400"
  }
];

const Home = () => {
  const [keyword, setKeyword] = useState();

  const handleInput = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  return (
    // <>
      <div className="narrow home">
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
              <div className='single_card'><MyCard key="1" id="1" book={books[0]} flag /></div>
              <div className='single_card'><MyCard key="2" id="2" book={books[0]} flag /></div>
              <div className='single_card'><MyCard key="3" id="3" book={books[0]} /></div>
              <div className='single_card'><MyCard key="4" id="4" book={books[0]} /></div>
            </div>
          </div>
          <div className="genre">
            <h1 className="heading">Novel</h1>
            <div className="cards">
              <MyCard id="1" book={books[0]} />
              <MyCard id="1" book={books[0]} />
              <MyCard id="1" book={books[0]} />
              <MyCard id="1" book={books[0]} />
            </div>
          </div>
          <div className="genre">
            <h1 className="heading">Detective and Mystery</h1>
            <div className="cards">
              <MyCard id="1" book={books[0]} />
              <MyCard id="1" book={books[0]} />
              <MyCard id="1" book={books[0]} />
              <MyCard id="1" book={books[0]} />
            </div>
          </div>
        </div>
      </div>
    // </>
  );
};
export default Home;

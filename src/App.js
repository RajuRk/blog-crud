import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addpost from './components/Addpost';
import Allpost from './components/Allpost';
import Editpost from './components/Editpost';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState} from 'react';

export const postContext = React.createContext();
function App() {

  let [post, setPost] = useState([
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0CZK8uXmfKw2RY2jn0oLK3caKnBO9H3obFw1VZxT6tm6vIMb2Yy7NjJ7TelOCUyZDcCw&usqp=CAU",
      "title": "Post 1",
      "author": "Rose",
      "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0CZK8uXmfKw2RY2jn0oLK3caKnBO9H3obFw1VZxT6tm6vIMb2Yy7NjJ7TelOCUyZDcCw&usqp=CAU",
      "title": "Post 2",
      "author": "Rose",
      "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0CZK8uXmfKw2RY2jn0oLK3caKnBO9H3obFw1VZxT6tm6vIMb2Yy7NjJ7TelOCUyZDcCw&usqp=CAU",
      "title": "Post 3",
      "author": "Rose",
      "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  ])

  return (
    <div className="container">
      <Router>
        <postContext.Provider value={{post, setPost}}>
        <nav class="navbar navbar-light bg-dark p-3">
            <form className="form-inline">
              <div className="logo-sec">
                <Link to="/"><h2>Blog</h2></Link>
              </div>
              <div className="btn-sec">
                <button className="btn btn-primary list-btn" type="button">
                  <Link to="/addpost">Add Post</Link>
                </button>
                &nbsp;
                <button className="btn btn-success list-btn" type="button">
                  <Link to="/">All Post</Link>
                </button> 
              </div>
            </form>
          </nav>
        <Routes>
          <Route path="/addpost" element={<Addpost />}/>
          <Route path="/" element={<Allpost />}/>
          <Route path="/editpost/:id" element={<Editpost />}/>
        </Routes>
        </postContext.Provider>
      </Router>
    </div>
  );
}

export default App;

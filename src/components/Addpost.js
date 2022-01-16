import React, {useState, useContext} from 'react';
import { postContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Addpost() {
    let context = useContext(postContext);
    let navigate = useNavigate();

    let [title, setTitle] = useState("");
    let [image, setImage] = useState("");
    let [author, setAuthor] = useState("");
    let [body, setBody] = useState("");

    let handleAdd = (e) => {
       e.preventDefault();
       context.post.push({
           title,
           image,
           author,
           body
       });
       navigate("/")
    }

    return (
        <div className="editForm">
            <h2>Add Blog</h2>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Image</label>
                    <input type="url" class="form-control" id="exampleFormControlInput1" onChange={(e) => setImage(e.target.value)}/>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Author</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e) => setAuthor(e.target.value)}/>
                </div>
   
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Content</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setBody(e.target.value)} value={body}/> 
                </div>

                <div class="form-group">
                    <button className="btn btn-primary" onClick={handleAdd}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Addpost

import React, {useState, useContext, useEffect} from 'react';
import {postContext} from '../App';
import {useNavigate, useParams} from 'react-router-dom';

function Editpost(props) {
    
    let context = useContext(postContext);
    let params = useParams();
    let navigate = useNavigate();

    let [title, setTitle] = useState("");
    let [image, setImage] = useState("");
    let [author, setAuthor] = useState("");
    let [body, setBody] = useState("");

    useEffect(() => {
       if(params.id)
         getPost();
    }, [])

    let handleSave = (e) => {
        e.preventDefault();
        context.post[params.id] ={
            title,
            image,
            author,
            body
        }
        context.setPost([...context.post])
        navigate('/');
    }

    let getPost = () => {
        let post = context.post[params.id];
        setTitle(post.title);
        setImage(post.image);
        setAuthor(post.author);
        setBody(post.body);
    }

    return (
        <div className="editForm">
            <h2>Edit Blog</h2>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input type="text" class="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input type="url" class="form-control" value={image} onChange={(e) => setImage(e.target.value)}/>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Author</label>
                    <input type="text" class="form-control" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </div>
   
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Content</label>
                    <textarea class="form-control" rows="3" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>

                <div class="form-group">
                    <button className="btn btn-primary" onClick={handleSave}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Editpost

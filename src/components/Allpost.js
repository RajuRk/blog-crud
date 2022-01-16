import React, {useContext} from "react";
import {postContext} from '../App';
import {useNavigate} from 'react-router-dom';

function Allpost() {
    let context = useContext(postContext);
    let navigate = useNavigate();

    let handleDelete = (e) => {
        context.post.splice(context.post.indexOf(e), 1);
        context.setPost([...context.post]);
    }
     
    return (
        <div class="card-deck">
           {
               context.post.map((e,i) => {
                   return (
                        <div class="card">
                            <img class="card-img-top" src={e.image} alt={e.title}/>
                            <div class="card-body">
                                <h5 class="card-title">{e.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{e.author}</h6>
                                <p class="card-text">{e.body}</p>
                                <button className="btn btn-primary" onClick={() => {
                                        navigate("/editpost/" + i)
                                    }
                                }>Edit Post</button>&nbsp;
                                <button className="btn btn-danger" onClick={()=> handleDelete(e)}>Delete</button>
                            </div>
                        </div>
                    )
               })
           }
        </div>    
    )
}

export default Allpost

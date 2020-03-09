import React, {useState, useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [btnClickId, setBtnClickId] = useState()
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btnClickId}`)
            .then(res => {
                console.log(res.data);
                setPost(res.data);
            })
            .catch(err => console.log(err));
    }, [btnClickId])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={() => setBtnClickId(id)}>get post</button>
            <ul>
            {
                //posts.map(post => <li key = {post.id}>{post.title}</li>)
                post.title
            }
            </ul>
        </div>
    )
}

export default DataFetching

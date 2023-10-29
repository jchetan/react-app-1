import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Post = () => {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        console.log('use effect ran')
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error("Some error in fetching data")
                }
            })
            .then(post => {
                console.log(post)
                setPost(post);
                setIsLoading(false);
                setErrorMessage('')
            })
            .catch(err => {
                console.log(err)
                setErrorMessage(err.message)
                setIsLoading(false);
            })
    }, [])

    return (
        <div className="container">
            {errorMessage && <div>{errorMessage}</div>}
            {isLoading && <div>Loading</div>}
            {post &&
                <div className="row justify-content-center" key={post.id}>
                    <div className="card" style={{ width: "50rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            {/* <div className="text-center">
                                <button onClick={() => deletePost(post.id)} className="btn btn-primary">Delete Post</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Post;
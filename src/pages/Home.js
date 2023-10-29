import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    const deletePost = (id) => {
        const newPosts = posts.filter(post => post.id !== id)
        setPosts(newPosts)
    }

    useEffect(() => {
        console.log('use effect ran')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error("Some error in fetching data")
                }
            })
            .then(posts => {
                setPosts(posts);
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
            {posts && posts.map((post) => (
                <div className="row justify-content-center" key={post.id}>
                    <div className="card" style={{ width: "50rem" }}>
                        <div className="card-body">
                            <Link to={"/post/" + post.id}>
                                <h5 className="card-title">{post.title}</h5>
                            </Link>
                            <p className="card-text">{post.body}</p>
                            <div className="text-center">
                                <button onClick={() => deletePost(post.id)} className="btn btn-primary">Delete Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
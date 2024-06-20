import Post from "@/Components/Post/Post";

const Posts = ({posts}) => {
    console.log(posts)
    return (
        <div>
            <h1 className="text-2xl">Number of Posts: {posts.length}</h1>
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Posts;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }
}
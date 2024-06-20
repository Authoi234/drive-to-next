import Banner from "@/Components/Banner/Banner";
import Post from "@/Components/Post/Post";
import Footer from "@/Components/footer/Footer";
import Link from "next/link";

export default function Home({posts}) {
  return (
    <div className="text-center">
      <Banner></Banner>
      {
        posts.map(post => <div key={post?.id} className="card my-10 mx-10 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{post?.title}</h2>
            <p>{post?.body}</p>
          </div>
        </div>)
      }
      <Link href={'/posts'}>
        <button className="btn btn-primary my-3">
          See More
        </button>
      </Link>
      <Footer></Footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  }
}

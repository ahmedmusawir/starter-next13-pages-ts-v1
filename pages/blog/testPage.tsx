import Layout from "@/components/Layout";
import { Row } from "@/components/layouts";
import Container from "@/components/layouts/Container";
import { apiPost } from "@/features/posts/apiPosts";
import { store } from "@/store/store";

export async function getStaticProps() {
  const { dispatch, getState } = store;

  await dispatch(apiPost.endpoints.getPosts.initiate({}));

  // It's important to `getState` after `dispatch` finishes
  const state = getState();
  console.log("RTK State:", state);

  // CANNOT FIND posts INSIDE apiPost ...
  // const posts = state.apiPost.queries.getPosts();
  //   const posts = [
  //     {
  //       title: "My Test 1",
  //       id: 1,
  //     },
  //   ];

  //   return { props: { posts } };
}

interface Post {
  title: string;
  id: number;
}
interface Posts {
  posts: Post[];
}

export default function TestPage({ posts }: Posts) {
  return (
    <Layout>
      <Container className={""} FULL={false}>
        <Row className="prose max-w-3xl mx-auto">
          <h1 className="h1">The Test Page</h1>
          <h2 className="h2">Testing RTK</h2>
        </Row>
        <div>
          <h1>Posts</h1>
          {posts.map((post) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../components/layout";
import { User } from "../../interfaces";

type ProfileProps = {
  user: User;
};

export default function Profile({ user }: ProfileProps) {
  return (
    <Layout user={user}>
      <h1>Profile</h1>

      <div>
        <h3>Profile (server rendered)</h3>
        <img src="https://preview.redd.it/yajawa4x8nw41.jpg?width=640&crop=smart&auto=webp&s=fddc3d63722428710b08e4f4032d082ebc11aa80" />
        {/* <img src={user.picture} alt="user picture" /> */}
        <p>nickname: {user.nickname}</p>
        <p>name: {user.name}</p>
      </div>
    </Layout>
  );
}

// Protected route, checking authentication status before rendering the page.(SSR)
// It's slower than a static page with client side authentication
export const getServerSideProps = withPageAuthRequired();

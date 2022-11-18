import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../components/layout";
import { User } from "../interfaces";

type ProfileCardProps = {
  user: User;
};

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <>
      <h1>Profile</h1>

      <div>
        <h3>Profile (client rendered)</h3>
        <img src="https://sportshub.cbsistatic.com/i/2021/08/09/b6fa15e8-0a86-4c77-b602-bb22b59c4bac/naruto-kakashi-cosplay-1274250.jpg" />
        {/* <img src={user.picture} alt="user picture" /> */}
        <p>nickname: {user.nickname}</p>
        <p>name: {user.name}</p>
      </div>
    </>
  );
};

const Profile = ({ user, isLoading }) => {
  return (
    <Layout user={user} loading={isLoading}>
      {isLoading ? <>Loading...</> : <ProfileCard user={user} />}
    </Layout>
  );
};

// Protected route, checking user authentication client-side.(CSR)
export default withPageAuthRequired(Profile);

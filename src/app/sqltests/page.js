import GetUsers from "../components/users-sql";
const users = await GetUsers();

console.log(users);
export default async function Home() {
  return (
    <main>
      <div>
        <h1>Hat-E home page</h1>
      </div>
    </main>
  );
}
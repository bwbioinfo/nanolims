import { useRouter } from "next/router";

function ClientProject({ client, project }) {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
}

export default ClientProject;

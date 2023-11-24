import { useRouter } from 'next/router';

function ProjectsId() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Project: {id}</p>;
}

export default ProjectsId;
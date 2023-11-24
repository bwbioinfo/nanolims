import { useRouter } from "next/router";

function Groups() {
  const router = useRouter();
  const { groups } = router.query;

  // The 'slug' variable now contains an array of path segments
  console.log(groups);

  return <p>Providers: {groups}</p>;
}

export default Groups;

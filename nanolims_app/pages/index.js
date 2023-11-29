// index.js
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import img from "@/public/mascot_transparent.png";
import DenseTable from "@/components/Table";

function Home() {
  return (
    <Layout>
      <h1>The Home</h1>
      <Card title="Summary" imgUrl={ img } >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          elit quis justo efficitur aliquet. Nulla facilisi. Donec auctor, nunc
          eu aliquam ultricies, dui lorem accumsan massa, non luctus sapien
          libero a justo. Nulla facilisi. Donec auctor, nunc eu aliquam
          ultricies, dui lorem accumsan massa, non luctus sapien libero a justo.
        </p>
        <Card title="Nested Card" imgUrl={ img } >
          Test nested card
        </Card>
      </Card>
      <Card title="Summary" imgUrl={ img } >
        <DenseTable />
      </Card>
    </Layout>
  );
}

export default Home;

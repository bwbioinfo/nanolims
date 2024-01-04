// index.js
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Mascot from "@/public/mascot_transparent.png";
import DenseTable from "@/components/Table";


function Home() {
  return (
    <Layout>
      <h1>The Home</h1>
      <Card title="Summary" imgUrl={ Mascot } >
        
      </Card>
      <Card title="Summary" imgUrl={ Mascot } >
        <DenseTable />
      </Card>
    </Layout>
  );
}


export default Home;

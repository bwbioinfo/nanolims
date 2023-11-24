import { useEffect, useState } from "react";
import Link from "next/link";

function ClientsPage() {
  const DUMMY_Clients = [
    { id: "c1", name: "Maximilian" },
    { id: "c2", name: "Manuel" },
    { id: "c3", name: "Julie" },
  ];

  const [clients, setClients] = useState([]);

  useEffect(() => {
    // send a http request and fetch data
    setClients(DUMMY_Clients);
  }, []);

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;

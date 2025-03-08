import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import CodeEditor from "../components/CodeEditor";

export default function Home() {
  return (
    <Layout>
      <Sidebar />
      <CodeEditor />
    </Layout>
  );
}


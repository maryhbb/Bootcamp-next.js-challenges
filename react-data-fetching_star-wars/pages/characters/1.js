import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";



const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character(id) {

  const { data, error, isLoading } = useSWR(` https://swapi.dev/api/people/${id}`, fetcher)
  const id = 1;

  return (
    <Layout>
      <Card
        id={id}
        name={"Luke Skywalker"}
        height={172}
        eyeColor={"blue"}
        birthYear={"19BBY"}
      />
    </Layout>
  );
}

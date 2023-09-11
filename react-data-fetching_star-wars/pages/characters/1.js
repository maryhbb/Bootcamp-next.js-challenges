
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const id = 1;
  const { data, error, isLoading } = useSWR(
    ` https://swapi.dev/api/people/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;

  return (
    <Layout>
      {data ? (
        <Card
          id={id}
          name={data.name}
          height={data.height}
          eyeColor={data.eye_color}
          birthYear={data.birth_year}
        />
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
}

import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ErrorStyle = styled.div`
  background-color: #ff6666;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
`;

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    id ? `https://swapi.dev/api/people/${id}` : null,
    fetcher
  );

  if (error) return <ErrorStyle>Page not found</ErrorStyle>;

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

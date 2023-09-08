import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  {
    name: "Living Room",
    isOn: false,
  },
  {
    name: "Kitchen",
    isOn: true,
  },
  {
    name: "Bedroom",
    isOn: false,
  },
  {
    name: "Bathroom",
    isOn: true,
  },
  {
    name: "Garage",
    isOn: true,
  },
  {
    name: "Porch",
    isOn: false,
  },
  {
    name: "Garden",
    isOn: false,
  },
  {
    name: "Office",
    isOn: true,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function setAllLights(value) {
    return setLights((lights) =>
      lights.map((light) => ({ ...light, isOn: value }))
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} setAllLights={setAllLights} />
    </Layout>
  );
}

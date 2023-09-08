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
  const [lights] = useState(initialLights);

  return (
    <Layout>
      <GlobalStyle />

      <div>salammm next.js</div>
      <Component {...pageProps} lights={lights} />
    </Layout>
  );
}

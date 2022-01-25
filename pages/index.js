import axios from "axios";
import { useQuery } from "react-query";
import styles from "../styles/Home.module.css";
const URL = "https://pokeapi.co/api/v2/pokemon";

const fetchPokemon = (key) => {
  return useQuery(
    ["pokemon", key],
    () => axios.get(URL).then((res) => res.data.results),
    {
      refetchOnWindowFocus: false,
      enabled: true,
    }
  );
};

export default function Home() {
  const queryInfo = fetchPokemon("pokemon");
  return queryInfo.isLoading ? (
    "Loading...."
  ) : queryInfo.isError ? (
    queryInfo.error.message
  ) : (
    <div className={styles.container}>
      {queryInfo.data.map((res) => (
        <p key={res.name}>{res.name}</p>
      ))}
    </div>
  );
}

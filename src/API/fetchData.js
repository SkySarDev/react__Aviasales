import axios from "axios";

export default async function fetchData() {
  const response = await axios.get("http://localhost:33700/api/aviasales");
  return response.data.tickets;
}

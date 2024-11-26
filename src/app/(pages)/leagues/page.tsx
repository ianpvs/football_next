import { getBaseUrl } from "@/utils/baseUrl";
import ListLeagues from "./components/list-leagues";
import { getRevalidateTimeInMinutes } from "@/utils/revalidate";

export default async function Leagues() {
  console.log("API_URL:", process.env.API_URL);
  console.log("API_KEY:", process.env.API_KEY);

  const response = await fetch(`${getBaseUrl()}/api/leagues`, {
    method: "GET",
    next: {
      revalidate: getRevalidateTimeInMinutes(60),
    },
  });

  const leagues = await response.json();

  return (
    <>
      <ListLeagues leagues={leagues} />
    </>
  );
}

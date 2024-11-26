import { getBaseUrl } from "@/utils/baseUrl";
import ListLeagues from "./components/list-leagues";
import { getRevalidateTimeInMinutes } from "@/utils/revalidate";

export default async function Leagues() {
  const response = await fetch(`${getBaseUrl()}/api/leagues`, {
    method: "GET",
    next: {
      revalidate: getRevalidateTimeInMinutes(60),
    },
  });

  console.log(await response.text());
  console.log(response.status);

  const leagues = await response.json();

  return (
    <>
      <ListLeagues leagues={leagues} />
    </>
  );
}

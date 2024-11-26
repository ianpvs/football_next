import ListLeagues from "./components/list-leagues";
import { getRevalidateTimeInMinutes } from "@/utils/revalidate";

export default async function Leagues() {
  const response = await fetch(`/api/leagues`, {
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

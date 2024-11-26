import { getBaseUrl } from "@/utils/baseUrl";
import ListLeagues from "./components/list-leagues";
import { getRevalidateTimeInMinutes } from "@/utils/revalidate";
import { League } from "@/domain/entities/league";

export default async function Leagues() {
  // const response = await fetch(`${getBaseUrl()}/api/leagues`, {
  //   method: "GET",
  //   next: {
  //     revalidate: getRevalidateTimeInMinutes(60),
  //   },
  // });

  const leagues: League[] = [];

  return (
    <>
      <ListLeagues leagues={leagues} />
    </>
  );
}

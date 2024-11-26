"use client";

import Image from "next/image";

import { ChevronRight } from "@/app/components/icons";

import { League } from "@/domain/entities/league";

interface ListLeaguesProps {
  leagues: League[];
}

export default function ListLeagues({ leagues }: ListLeaguesProps) {
  return (
    <>
      <div className="container mx-auto gap-4 p-8 h-full">
        <form className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Busque uma liga pelo nome"
            aria-label="Search"
            aria-describedby="button-addon2"
          />

          <button
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>

      <ul className="container mx-auto px-8 h-full">
        {leagues.map((league: League) => (
          <li key={league.id}>
            <a
              href={`/leagues/${league.id}`}
              className="flex items-center justify-between p-6 bg-white rounded-lg mb-2"
            >
              <Image
                src={league.logo}
                alt={league.name}
                width={50}
                height={50}
                className="mr-4"
              />

              <div className="flex flex-col flex-1">
                <p className="font-bold text-lg">{league.name}</p>
                <p className="text-sm">{league.countryName}</p>
              </div>

              <ChevronRight />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

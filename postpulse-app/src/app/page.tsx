import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

export default async function Home() {
  const prisma = new PrismaClient();

  const infos = [];

  const headersIterator = headers().entries();
  do {
    infos.push(headersIterator.next().value);
  } while (!headersIterator.next().done);

  return (
    <ul>
      {infos.map((value, index) => {
        return (
          <li key={index}>
            {value["0"]} ---- {value["1"]}
          </li>
        );
      })}
    </ul>
  );
}

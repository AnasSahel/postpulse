import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to PostPulse!</h1>
      <Link href={"/sign-up"}>Get started (register)</Link>
    </main>
  );
}

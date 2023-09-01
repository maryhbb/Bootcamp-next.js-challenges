import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../../lib/data";

const slug = volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring");

export default function TheFellowshipOfTheRing() {
  return (
    <div>
      <Link href="/volumes">Back to all Volumes</Link>

      <h1>{slug.title}</h1>
      <p>{slug.description}</p>

      <ul>
        {slug.books.map((book) => {
          return (
            <li key={book.title}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image src={slug.cover} height={444} width={444} alt={slug.title} />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../../lib/data";
import VolumeNavigation from "@/components/VolumeNavigation";

const slugIndex = volumes.findIndex(
  ({ slug }) => slug === "the-return-of-the-king"
);
const slug = volumes[slugIndex];

export default function TheReturnOfTheKing() {
  return (
    <div style={{ padding: "4rem" }}>
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
      <Image
        style={{ display: "block", margin: "0 auto" }}
        src={slug.cover}
        height={444}
        width={444}
        alt={slug.title}
      />

      <VolumeNavigation volumes={volumes} slugIndex={slugIndex} />
    </div>
  );
}

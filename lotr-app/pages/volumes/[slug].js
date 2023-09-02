import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data";
import VolumeNavigation from "@/components/VolumeNavigation";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const route = useRouter();

  const volumeIndex = volumes.findIndex(
    (volume) => volume.slug === route.query.slug
  );
  const volume = volumes[volumeIndex];

  return (
    <div style={{ padding: "4rem" }}>
      <Link href="/volumes">Back to all Volumes</Link>

      <h1>{volume.title}</h1>
      <p>{volume.description}</p>

      <ul>
        {volume.books.map((book) => {
          return (
            <li key={book.title}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        style={{ display: "block", margin: "0 auto" }}
        src={volume.cover}
        height={444}
        width={444}
        alt={volume.title}
      />

      <VolumeNavigation volumes={volumes} volumeIndex={volumeIndex} />
    </div>
  );
}

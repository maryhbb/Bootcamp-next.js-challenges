import Link from "next/link";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>

      {volumes.map(({ slug, title }) => (
        <li key={slug}>
          <Link href={`/volumes/${slug}`}>{title}</Link>
        </li>
      ))}
    </div>
  );
}

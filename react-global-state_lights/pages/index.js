import Link from "../components/Link";

export default function HomePage({ lights }) {
  const count = lights.reduce(
    (onCount, light) => (light.isOn ? onCount + 1 : onCount),
    0
  );
  return (
    <div>
      <h1>Home</h1>
      <p>{count} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}

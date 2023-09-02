import Link from "next/link";

const VolumeNavigation = ({ prev, next }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        {prev ? (
          <Link href={`/volumes/${prev.slug}`}>Previous</Link>
        ) : (
          <span>Previous</span>
        )}
      </div>
      <div>
        {next ? (
          <Link href={`/volumes/${next.slug}`}>Next</Link>
        ) : (
          <span>Next</span>
        )}
      </div>
    </div>
  );
};
export default VolumeNavigation;

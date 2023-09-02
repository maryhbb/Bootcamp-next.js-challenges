import Link from "next/link";

const VolumeNavigation = ({ volumes, slugIndex }) => {
  const prevSlug = volumes[slugIndex - 1];
  const nextSlug = volumes[slugIndex + 1];

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        {prevSlug ? (
          <Link href={`/volumes/${prevSlug.slug}`}>Previous</Link>
        ) : (
          <span>Previous</span>
        )}
      </div>
      <div>
        {nextSlug ? (
          <Link href={`/volumes/${nextSlug.slug}`}>Next</Link>
        ) : (
          <span>Next</span>
        )}
      </div>
    </div>
  );
};
export default VolumeNavigation;

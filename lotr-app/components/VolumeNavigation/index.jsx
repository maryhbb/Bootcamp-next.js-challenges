import Link from "next/link";

const VolumeNavigation = ({ volumes, volumeIndex }) => {
  const prevVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        {prevVolume ? (
          <Link href={`/volumes/${prevVolume.slug}`}>Previous</Link>
        ) : (
          <span>Previous</span>
        )}
      </div>
      <div>
        {nextVolume ? (
          <Link href={`/volumes/${nextVolume.slug}`}>Next</Link>
        ) : (
          <span>Next</span>
        )}
      </div>
    </div>
  );
};
export default VolumeNavigation;

import Image from "next/image";

const Social = ({
  followers,
  connections,
  link,
  imageLink,
}: {
  followers: number;
  connections: number;
  link: string;
  imageLink: string;
}) => {
  return (
    <>
      <div className="p-2 rounded sm:w-fit sm:grow-0 grow bg-gray-800 hover:bg-gradient-to-b hover:from-sky-500/30 duration-150 flex flex-col items-center gap-2">
        <a href={link} className="pb-2" target="_blank">
          <Image
            src={imageLink}
            className="w-16 object-contain"
            width="100"
            height="100"
            alt="social link"
          />
        </a>
        <div>
          <p className="text-md flex items-center gap-2 pb-1 leading-4 font-semibold text-sky-500 capitalize">
            {connections}+
            <span className="text-gray-400 font-normal text-sm grow text-right">
              connections
            </span>
          </p>
          <p className="text-md flex items-center gap-2 pb-1 leading-4 font-semibold text-sky-500 capitalize">
            {followers}+
            <span className="text-gray-400 font-normal text-sm grow text-right">followers</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Social;

import Image from "next/image";

const Blog = ({
  reactions,
  blogs,
  link,
  imageLink,
  readings,
}: {
  reactions: number;
  blogs: number;
  link: string;
  imageLink: string;
  readings: number;
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
            alt="blog link"
          />
        </a>
        <div>
          <p className="text-md pb-1 flex items-center gap-6 leading-4 font-semibold text-sky-500 capitalize">
            {blogs}+
            <span className="text-gray-400 font-normal text-sm text-right grow">blogs</span>
          </p>
          <p className="text-md pb-1 flex items-center gap-6 leading-4 font-semibold text-sky-500 capitalize">
            {reactions}+
            <span className="text-gray-400 font-normal text-sm text-right grow">reactions</span>
          </p>
          <p className="text-md pb-1 flex items-center gap-6 leading-4 font-semibold text-sky-500 capitalize">
            {readings}+
            <span className="text-gray-400 font-normal text-sm text-right grow">readings</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Blog;

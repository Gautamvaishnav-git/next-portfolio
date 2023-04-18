import Social from "../components/contactCard/Social";
import Image from "next/image";
import social from "./social.json";
import blog from "./blog.json";
import Blog from "../components/contactCard/Blog";

const Contact = () => {
  return (
    <>
      <section className="sm:p-4 px-2 py-4 bg-[url('https://cdn-icons-png.flaticon.com/512/520/520890.png')] bg-auto bg-no-repeat md:bg-[700px_-200px] sm:bg-[400px_-100px] bg-[150px_-10px] container mx-auto">
        <div className="pb-8">
          <h2 className="text-3xl font-bold text-white pb-3">Social Media</h2>
          <div className="flex gap-2 flex-wrap">
            {social.map((item, index) => (
              <Social {...item} key={index} index={index} />
            ))}
          </div>
        </div>

        <div className="pb-8">
          <h2 className="text-3xl font-bold text-white pb-3">
            Blogs and readings{" "}
          </h2>
          <div className="flex gap-2 flex-wrap">
            {blog.map((item, index) => (
              <Blog {...item} key={index} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

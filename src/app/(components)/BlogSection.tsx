import Image from "next/image";
import React from "react";
import { blogs } from "../(data)/homepage";

const BlogSection = () => {
  const firstBlog = blogs.find((blog) => blog.id === 1);

  return (
    <section className="xl:max-w-7xl max-w-[90%] my-16 mx-auto">
      <div className="flex flex-col gap-6 items-center">
        <h2 className="font-semibold text-black text-xl xl:text-4xl">Blog</h2>

        {/* Blog Section */}
        <div className="flex flex-row gap-4">
          <div className="flex w-2/3">
            {firstBlog && (
              <div className="flex flex-col gap-3">
                <Image
                  src={firstBlog.image}
                  alt={firstBlog.title}
                  width={200}
                  height={200}
                  style={{ width: "100%" }}
                />
                <h3 className="font-semibold text-base lg:text-xl">
                  {firstBlog.title}
                </h3>
                <p className="text-sm lg:text-base">{firstBlog.description}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between gap-6 w-1/2">
            {blogs.slice(1, 4).map((blog) => (
              <div key={blog.id} className="flex flex-row gap-3 items-start">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={500}
                  style={{ width: "100%" }}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-base lg:text-xl">
                    {blog.title}
                  </h3>
                  <p className="text-sm lg:text-base">{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

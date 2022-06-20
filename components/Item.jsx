import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Item({ guide }) {
  return (
    <div className="border-b-2 border-gray-300 lg:p-4">
      <div className="flex items-center justify-between lg:space-x-8">
        <div className="flex items-center lg:space-x-8">
          <div className="hidden lg:block">
            <Image src={guide.image} height="45" width="45" />
          </div>
          <h3 className="font-semibold lg:text-2xl">{guide.name}</h3>
        </div>
        <Link
          href={{ pathname: "/guides/details", query: { path: guide.path } }}
        >
          <span className="flex space-x-2 items-center text-blue-600 cursor-pointer">
            <span>Guide</span> <HiOutlineArrowNarrowRight size={24} />
          </span>
        </Link>
      </div>
      <div
        className={
          guide.categories.length > 3
            ? "py-4 lg:px-8 grid lg:grid-cols-6 grid-cols-3 gap-y-2 gap-x-2 lg:gap-x-4"
            : guide.name.includes("Web")
            ? "flex flex-col lg:space-y-8 py-4 lg:px-8"
            : " flex flex-col lg:flex-row lg:space-y-0 lg:space-x-16 lg:px-8 py-4"
        }
      >
        {guide.categories.map((category, index) =>
          category.name ? (
            <div key={index}>
              <h4 className="lg:text-xl text-sm font-semibold">
                {category.name}
              </h4>
              <div className="hidden lg:flex space-x-8 py-4">
                {category.content.map((content, index) =>
                  content.name ? (
                    <div key={index}>
                      <h4 className="text-lg font-semibold">{content.name}</h4>
                      <div className="flex space-x-4 mt-4 font-semibold">
                        {content.content.map((con, index) => (
                          <div key={index}>{con}</div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <h4 className="font-semibold" key={index}>
                      {content}
                    </h4>
                  )
                )}
              </div>
            </div>
          ) : (
            <h4
              key={index}
              className={
                guide.categories.length > 3
                  ? "lg:text-sm text-xs lg:font-semibold"
                  : "font-semibold lg:text-xl"
              }
            >
              {category}
            </h4>
          )
        )}
      </div>
    </div>
  );
}

export default Item;

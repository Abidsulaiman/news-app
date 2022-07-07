import { FaCircle } from "react-icons/fa";
import { useAppSelector } from "../app/hooks";

function NewsListing() {
  const { data, error, loading } = useAppSelector<any>((state) => state?.news);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">{error?.message}</p>;

  return (
    <div className="news__listing">
      {data?.articles?.map((news: any, idx: number) => (
        <article
          className="flex flex-col-reverse lg:flex-row lg:items-center lg:space-x-10 bg-gray-800 p-6 mb-4 hover:shadow-xl rounded-lg transition-shadow ease-in-out duration-300 w-full"
          key={idx}
        >
          <div className="flex-1">
            <h3 className="font-semibold mb-4 text-white">{news?.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {news?.content}
            </p>

            <div className="text-sm mt-6 flex flex-col lg:flex-row items-center">
              <span className="text-teal-600 font-semibold mb-2 lg:mb-0">
                {news?.author}
              </span>
              <FaCircle className="mx-2 w-2 h-2 text-teal-600 hidden lg:block" />
              <span className="text-gray-200">
                Published at {new Date(news?.publishedAt)?.toLocaleDateString()}
              </span>
            </div>
          </div>
          <img
            src={news?.urlToImage ?? "/logo512.png"}
            className="w-full lg:w-44 lg:h-44 rounded object-cover mb-4"
            alt="news pic"
          />
        </article>
      ))}
    </div>
  );
}

export default NewsListing;

import LeftSideBar from "@/components/Homepage/LeftSideBar";
import RightSideBar from "@/components/Homepage/RightSideBar";
import { getData, getNewsByCategoryId } from "@/lib/data";




const NewsDetails = async ({ params }) => {
  const { id } = await params;

  const allCategories = await getData();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="grid grid-cols-12 gap-2 mx-auto container  py-4">

      <div className="grid col-span-3  gap-2">
        <LeftSideBar allCategories={allCategories} activeId={id}></LeftSideBar>

      </div>


      <div className="grid col-span-6  gap-2">
        <h2>News Home</h2>


        {
          news?.length > 0 ? (
            news.map((n) => (
              <div
                className="bg-gray-300 text-black p-3 mb-2"
                key={n._id} // Oboshshoi news-er unique ID din
              >
                {n.title}
              </div>
            ))
          ) : (
            <div className="text-gray-500 p-5 text-center font-bold">
              No News Found
            </div>
          )
        }


      </div>


      <div className="grid col-span-3  gap-2">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default NewsDetails;
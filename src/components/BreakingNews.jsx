import Marquee from "react-fast-marquee";


const breakingNews = [
  { id: 1, title: "Global Tech Companies Invest Heavily in AI Innovation" },
  { id: 2, title: "Climate Change Summit 2026 Brings New Global Agreements" },
  { id: 3, title: "Breakthrough in Renewable Energy Promises Cheaper Power" },
  { id: 4, title: "International Space Mission Discovers New Exoplanet" },
  { id: 5, title: "Economy Shows Signs of Recovery After Global Slowdown" }
];



const BreakingNews = () => {
    return (
        <div className="flex justify-center items-center  container mx-auto bg-gray-200 gap-3">
            <button className="btn btn-accent   mx-2">Latest News</button>
            <Marquee pauseOnHover={true}>
                {
                    breakingNews.map(news=><span className="mx-4 text-black" key={news.id}>{news.title}</span>)
                }
         </Marquee>
        </div>
    );
};

export default BreakingNews;
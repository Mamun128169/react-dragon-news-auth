import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Header from '../shared/Header/Header'
import RightSideNav from '../shared/RightSideNav/RightSideNav'

const NewsDetails = () => {
  const newsData = useLoaderData()
  const { newsId } = useParams()
  //   console.log(newsData, newsId)

  const navigate = useNavigate()

  const currentNews = newsData.find((val) => val._id === newsId)

  const { image_url, title, details } = currentNews

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 content-center">
        <div className="col-span-3">
          <h2 className="text-xl font-semibold">Dragon News</h2>
          {/* news content section */}
          <div className="border py-3 px-4 rounded-md mt-3">
            <div className="bg-base-100 pb-5 shadow-xl">
              <figure>
                <img className="rounded-none" src={image_url} alt="Shoes" />
              </figure>
              <div className="my-5 space-y-5">
                <h2 className="text-xl font-bold leading-8 text-gray-800">
                  {title}
                </h2>
                <p className="font-medium text-gray-700 text-justify">
                  {details}
                </p>
                <div onClick={() => navigate(-1)}>
                  <button className="border bg-pink-600 hover:bg-pink-700 text-white font-medium px-3 py-2">
                    All news in this category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightSideNav />
      </div>
    </div>
  )
}

export default NewsDetails

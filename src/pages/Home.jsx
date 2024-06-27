import Header from '../shared/Header/Header'
import Navbar from '../shared/Navbar/Navbar'
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav'
import RightSideNav from '../shared/RightSideNav/RightSideNav'
import BreakingNews from './BreakingNews'
import { useContext, useEffect, useState } from 'react'
import { CiBookmark } from 'react-icons/ci'
import { CiShare2 } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const Home = () => {
  const [news, setNews] = useState([])

  const { loading } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('./news.json')
        const data = await res.json()
        setNews(data)
      } catch (err) {
        console.log(err.message)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars h-[100px] w-[100px]"></span>
        {/* <h2 className="text-7xl">loading.....</h2> */}
      </div>
    )
  }

  return (
    <div
      style={{
        overflowY: 'scroll',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
      className="scroll-bar p-4 md:p-0"
    >
      <style>
        {`
          .scroll-bar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 content-center">
        <div>
          <LeftSideNav />
        </div>
        {/* news contains section */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Dragon News Home</h2>
          <div>
            {news.map((val, idx) => (
              <div key={idx} className="card p-2 bg-base-100 shadow-xl mb-5">
                {/* author section */}
                <div className="flex items-center justify-between p-2 bg-gray-300">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-[40px] rounded-full"
                      src={val.author.img}
                      alt=""
                    />
                    <div className="text-gray-600">
                      <h2 className="text-sm font-semibold">
                        {val.author.name}
                      </h2>
                      <p className="text-sm">
                        {val.author.published_date?.split(' ')[0]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <CiBookmark />
                    <CiShare2 />
                  </div>
                </div>
                {/* news content section */}
                <div className="p-2 mt-2 space-y-5">
                  <h2 className="text-lg font-semibold">{val.title}</h2>
                  <img className="w-full" src={val.image_url} alt="" />
                  <p className="text-[12px] font-medium text-gray-500">
                    {val.details.length < 200 ? (
                      <span className="text-sm font-medium text-gray-500">
                        {val.details}
                      </span>
                    ) : (
                      <span className="text-sm font-medium text-gray-500">
                        {val.details.slice(0, 200)}...
                      </span>
                    )}
                    <span className="mt-3 text-[17px] text-orange-500 font-medium cursor-pointer">
                      <Link to={`/news/${val._id}`}>Read More</Link>
                    </span>
                  </p>
                  <hr className="my-3" />
                  <div className="flex items-center  justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                      <div className="text-xl font-medium text-gray-600">
                        {val.rating.number}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 font-medium text-gray-600">
                      <FaEye className="text-xl" />
                      <p>{val.total_view}</p>
                    </div>
                  </div>
                  <hr className="my-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  )
}

export default Home

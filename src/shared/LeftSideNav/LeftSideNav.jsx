import { useEffect, useState } from 'react'
import './LeftSideNav.css'
import { CiCalendar } from 'react-icons/ci'
import moment from 'moment'

const LeftSideNav = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('0')
  const [news, setNews] = useState([])

  //  for category data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('./categories.json')
        const data = await res.json()
        setCategories(data)
      } catch (err) {
        console.log(err.message)
      }
    }

    fetchData()
  }, [])

  const handleCategoryClick = (id) => {
    setSelectedCategory(id)
  }

  // for card data
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

  console.log(news.slice(0, 3))

  return (
    <div className="">
      {/* categories section */}
      <h2 className="text-xl font-semibold mb-4">All Category</h2>
      <div>
        {categories.map((cat, idx) => (
          <div
            className={`text-center py-3 font-medium text-gray-500 cursor-pointer ${
              selectedCategory === cat.id ? 'selected' : ''
            }`}
            key={idx}
            onClick={() => handleCategoryClick(cat.id)}
          >
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      {/* card section */}
      <div>
        {news.slice(5, 8).map((val) => (
          <div key={val._id} className="card p-2 bg-base-100 shadow-xl mb-5">
            <figure>
              <img className="" src={val.image_url} alt="Shoes" />
            </figure>
            <div className="mt-4 mb-4 ">
              <h2 className="text-lg md:text-sm lg:text-xl font-semibold">
                {val.title}
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <h3 className="font-semibold">Politics</h3>
              <div className="flex items-center gap-2 ">
                <CiCalendar />
                <p className="text-sm text-gray-600 font-medium">
                  {moment(val.author.published_date).format('MMM D, YYYY')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSideNav

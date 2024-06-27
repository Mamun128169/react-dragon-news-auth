import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const BreakingNews = () => {
  return (
    <div className="mb-6 bg-slate-100 p-2 rounded-md flex gap-2">
      <button className="btn btn-error text-gray-100">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-7 text-lg font-semibold hover:underline" to={'/'}>
          Match Highlights: Germany vs Spain - as it happened!
        </Link>
        <Link className="mr-7 text-lg font-semibold hover:underline" to={'/'}>
          Match Highlights: Germany vs Spain - as it happened!
        </Link>
        <Link className="mr-7 text-lg font-semibold hover:underline" to={'/'}>
          Match Highlights: Germany vs Spain - as it happened!
        </Link>
      </Marquee>
    </div>
  )
}

export default BreakingNews

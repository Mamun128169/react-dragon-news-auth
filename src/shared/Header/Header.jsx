import moment from 'moment'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center py-8 space-y-2">
      <img src={logo} alt="" />
      <p className="text-gray-500">Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format('dddd, MMMM DD, YYYY')}</p>
    </div>
  )
}

export default Header

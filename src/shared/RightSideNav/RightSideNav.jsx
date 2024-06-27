import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import swim from '../../assets/qZone1.png'
import classRoom from '../../assets/qZone2.png'
import playGround from '../../assets/qZone3.png'

const rightSideNav = () => {
  return (
    <div>
      {/* logIN with social icons */}
      <div className="">
        <h2 className="text-xl font-semibold mb-5">Login With</h2>
        <div className="border-2 flex items-center gap-2 px-5 py-2 justify-center mb-3 rounded-md font-semibold  hover:text-sky-800 cursor-pointer">
          <FaGoogle />
          <h3 className="text-sm">Login with Google</h3>
        </div>
        <div className="border-2 flex items-center gap-2 px-5 py-2 justify-center mb-4 rounded-md font-semibold  hover:text-sky-800 cursor-pointer">
          <FaGithub />
          <h3 className="text-sm">Login with Github</h3>
        </div>
      </div>

      {/* find us on  sections*/}
      <div className="mt-5">
        <h2 className="text-xl font-semibold mb-5">Find Us On</h2>
        <div className="border-2 flex items-center gap-3 px-7 py-4  mb-3 rounded-md font-semibold hover:bg-slate-100 cursor-pointer">
          <FaFacebook className="text-blue-700" />
          <h3 className="text-sm">Facebook</h3>
        </div>
        <div className="border-2 flex items-center gap-3 px-7 py-4  mb-4 rounded-md font-semibold hover:bg-slate-100 cursor-pointer">
          <FaTwitter className="text-sky-600" />
          <h3 className="text-sm">Twitter</h3>
        </div>
        <div className="border-2 flex items-center gap-3 px-7 py-4  mb-4 rounded-md font-semibold cursor-pointer hover:bg-slate-100">
          <FaInstagram className="text-red-500" />
          <h3 className="text-sm">Instagram</h3>
        </div>
      </div>

      {/* Q-zone */}
      <div className="bg-slate-100 p-3 rounded-lg">
        <h2 className="text-xl font-semibold mb-5">Q-Zone</h2>
        <div className="flex flex-col items-center">
          <img src={swim} alt="" />
          <img src={classRoom} alt="" />
          <img src={playGround} alt="" />
        </div>
      </div>
    </div>
  )
}
export default rightSideNav

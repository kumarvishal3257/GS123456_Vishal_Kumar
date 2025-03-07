import GSLogo from '../assets/Gsynergy Logo V2 Long Description.svg'

const NavBar = () => {
  return (
    <div className='min-w-[1080px] w-vw flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white p-2 shadow-md'>
        <img src={GSLogo} alt='GSLogo' className='h-10 object-fit'/>
        <button className='pr-4'>Log In</button>
    </div>
  )
}

export default NavBar
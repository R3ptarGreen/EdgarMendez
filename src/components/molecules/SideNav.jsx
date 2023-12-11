import {Icon} from '../../components/index';
import {useFetch} from '../../hooks';

const SideNav = () => {
  const {data} = useFetch('src/data/SocialData.json')
  const dataCheck = data ? data  || []: []
  return (
    <nav className='grid grid-cols-2 p-2 md:p-4 backdrop-blur-0'>
        <div className='grid gap-2'>
            <p className='text-primary'>social</p>
            <div className='grid grid-cols-2 max-w-fit md:gap-2'>
                <Icon icon={'linkedIn'} linkWeb={dataCheck.linkedIn}/>
                <Icon icon={'github'} linkWeb={dataCheck.gitHub}/>
            </div>
        </div>
        <div className='grid gap-2'>
            <p className='text-primary'>Info</p>
            <a href="">Resume</a>
        </div>
    </nav>
  )
}

export default SideNav
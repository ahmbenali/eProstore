import Image from 'next/image'
import loader from '~/assets/loader.gif'

function Loading() {
  return (
    <div className='flex-center h-screen w-screen'>
        <Image
          src={loader}
          width={150}
          height={150}
          alt='Loading...'
        />
    </div>
  )
}

export default Loading

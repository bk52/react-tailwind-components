import ReactGif from '../Assets/img/delicious.gif'
import BKLogo from '../Assets/img/BKLogo.png'

const HomePage = () => {
    return <div className="flex flex-col w-full h-full text-center justify-center space-y-6">
        <div className='font-bold text-gray-700 text-2xl'>react-tailwind-components</div>
        <div className='flex mx-auto'>👋 Hello, I'm <a className='ml-1' href='https://github.com/bk52' target='_blank' rel='noreferrer'><img alt='bklogo' src={BKLogo} className='w-6 h-6' /></a></div>
        <div>Here, from time to time, I will create components with <a href='https://tailwindcss.com/' className='text-blue-600'>Tailwind CSS</a> for <a href='https://reactjs.org/' className='text-blue-600'>React</a> and share them here.</div>
        <img className='w-72 mx-auto' src={ReactGif} alt='delicious' />
        <div>You can support with
            <button className='px-2 py-1 rounded-md shadow-md border border-gray-100 ml-1 mr-1'>
                <a href='#'>
                    <div className='flex items-center'>
                        <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 16 16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                        </svg>
                        <span className='text-md ml-2'>Fork</span>
                    </div>
                </a>
            </button>
            or
            <button className='px-2 py-1 rounded-md shadow-md border border-gray-100 ml-1'>
                <a href='#'>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span className='text-md ml-2'>Star</span>
                    </div>
                </a>
            </button>
        </div>
    </div >

}

export default HomePage;
import HeaderOne from '../Components/HeaderBar/HeaderOne';

const HeaderBar = () => {
    return <>
        <div className="text-2xl text-bold text-center mt-2"><a target="_blank" rel='noreferrer' href='https://github.com/bk52/react-tailwind-components/src/Components/HeaderBar'>Header Bar</a></div>
        <div className="text-md text-bold text-gray-700 ml-2">Header One</div>
        <HeaderOne />
    </>
}

export default HeaderBar;
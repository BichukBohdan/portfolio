import Link from "next/link";
// icons
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from 'react-icons/hi2';
import {useRouter} from "next/router";

// nav data
export const navData = [
    {name: 'home', path: '/', icon: <HiHome/>},
    {name: 'about', path: '/about', icon: <HiUser/>},
    {name: 'services', path: '/services', icon: <HiRectangleGroup/>},
    {name: 'work', path: '/work', icon: <HiViewColumns/>},
    {
        name: 'testimonials',
        path: '/testimonials',
        icon: <HiChatBubbleBottomCenterText/>,
    },
    {
        name: 'contact',
        path: '/contact',
        icon: <HiEnvelope/>,
    },
];

const Nav = () => {
    const router = useRouter()
    const {pathname} = router
    return (
        <nav className='nav-wrapper'>
            <div className='nav'>
                {navData.map((link, index) => (
                    <Link
                        className={`link group ${link.path === pathname && 'text-accent'}`}
                        href={link.path}
                        key={index}
                    >
                        <Tooltip name={link.name} />
                        <div>
                            {link.icon}
                        </div>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Nav;


const Tooltip = ({name}) => {
    return (
        <div className='absolute right-0 pr-14 hidden xl:group-hover:flex'>
            <div className='bg-white relative flex text-primary items-center p-[6px] rounder-[3px]'>
                <div className='text-[12px] leading-none font-semibold capitalize'>{name}</div>
                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 -right-2 absolute' />
            </div>
        </div>
    )
}
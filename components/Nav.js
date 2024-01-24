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
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter()
  const {pathname} = router
  return (
      <nav>
        <div className='flex w-full items-center justify-between xl:flex-col xl:justify-center gap-y-1'>{navData.map((link, index) => (
            <Link href={link.path} key={index}>{link.icon}</Link>
        ))}</div>
      </nav>
  );
};

export default Nav;

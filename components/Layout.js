import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'
import {Sora} from '@next/font/google'


const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

const Layout = ({children}) => {
  return <div className={`layout page ${sora.variable}`}>
    <TopLeftImg />
    <Nav />
    <Header />
    {children}
  </div>;
};

export default Layout;

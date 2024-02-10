import '../styles/components.css';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import Layout from "../components/Layout";
import {useRouter} from "next/router";
import {AnimatePresence, motion} from "framer-motion";
import Transition from "../components/Transition";
import Head from "next/head";


function MyApp({Component, pageProps}) {
    const router = useRouter()
    return (
        <>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>Bichuk Bohdan</title>
          </Head>
          <Layout>
            <AnimatePresence mode='wait'>
              <motion.div key={router.route} className='h-full overflow-auto'>
                <Transition />
                <ToastContainer />
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </Layout>
        </>
    );
}

export default MyApp;

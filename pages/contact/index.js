import {motion} from 'framer-motion'
import {BsArrowRight} from "react-icons/bs";
import {fadeIn} from "../../variants";
import {useState} from "react";
import {toast} from "react-toastify";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  const handleBtnClick = (e) => {
    e.preventDefault()
    resetForm()
    toast.success('Message was successfully sent')
  }

  return (
      <div className='h-full bg-primary/30'>
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          <div className="flex flex-col w-full max-w-[700px]">
            <motion.h2
                className="h2 text-center"
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
            >{'Let\'s'} <span className='text-accent'>connect.</span></motion.h2>
            <motion.form
                className='flex-1 flex flex-col gap-6 w-full mx-auto'
                action=""
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
            >
              <div className="flex gap-x-6 w-full">
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    placeholder='name'
                    className='input'
                />
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="text"
                    placeholder='email'
                    className='input'
                />
              </div>
              <input
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  type="text"
                  placeholder='subject'
                  className='input'
              />
              <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className='textarea'
                  placeholder='message'
              ></textarea>
              <button onClick={handleBtnClick} className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                <span className='group-hover:text-accent group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>{'Let\'s talk'}</span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 absolute text-[22px]' />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
  );
};

export default Contact;

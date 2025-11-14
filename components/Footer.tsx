import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { ListTodo } from 'lucide-react';
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex justify-between p-4 px-20 bg-gray-100 items-center mt-10">
        <div>
            <Link href="/" className='flex gap-2 font-bold text-sm items-center'>
                <ListTodo className='bg-linear-65 from-gray-300 to-gray-400 p-2 rounded-sm' size={30} color='#fff'/>TASKFLOW
            </Link>
        </div>
        <div className="flex gap-4 text-gray-500">
            <FaTwitter />
            <FaLinkedin />
            <FaGithub />
            <FaSquareInstagram />
        </div>
        <div className='text-center p-4 text-gray-500'>© 2025 TaskFlow. All rights reserved.</div>
    </footer>
  )
}
export default Footer
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { ListTodo } from 'lucide-react';
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex justify-between p-4 px-20 items-center bg-linear-to-r from-blue-50 to-white">
        <div>
            <Link href="/" className='flex gap-2 font-bold text-sm items-center text-gray-500'>
                <ListTodo className='bg-linear-65 from-gray-300 to-gray-400 p-2 rounded-sm' size={30} color='#fff'/>TASKFLOW
            </Link>
        </div>
        <div className="flex gap-4 text-gray-500">
            <Link href="https://twitter.com"><FaTwitter size={20} className="hover:text-gray-700"/></Link>
            <Link href="https://linkedin.com"><FaLinkedin size={20} className="hover:text-gray-700"/></Link>
            <Link href="https://github.com"><FaGithub size={20} className="hover:text-gray-700"/></Link>
            <Link href="https://instagram.com"><FaSquareInstagram size={20} className="hover:text-gray-700"/></Link>
        </div>
        <div className='text-center p-4 text-gray-500'>© 2025 TaskFlow. All rights reserved.</div>
    </footer>
  )
}
export default Footer
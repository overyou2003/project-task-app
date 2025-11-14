import Link from 'next/link'
import { ListTodo } from 'lucide-react';
const Navbar = () => {
  return (
    <nav className='flex justify-between p-4 bg-gray-200'>
        <div className='flex'>
            <Link href="/" className='flex'>
                <ListTodo />TASKFLOW
            </Link>
        </div>
        <div className='flex gap-4'>
            <Link href=''>
                Login
            </Link>
            <Link href=''>
                Sign Up
            </Link>
        </div>
    </nav>
  )
}
export default Navbar
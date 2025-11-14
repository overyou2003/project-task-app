import Link from 'next/link'
import { ListTodo } from 'lucide-react';
import { Button } from "@/components/ui/button"
const Navbar = () => {
  return (
    <nav className='flex justify-between px-20 py-5 bg-transparent items-center'>
        <div className='flex'>
            <Link href="/" className='flex gap-2 font-bold text-xl items-center'>
                <ListTodo className='bg-linear-65 from-blue-500 to-purple-500 p-2 rounded-lg' size={40} color='#fff'/>TASKFLOW
            </Link>
        </div>
        <div className='flex gap-4 items-center text-gray-500 hover:text-gray-700'>
            <Link href=''>
                Login
            </Link>
            <Button asChild className='bg-blue-500 hover:bg-blue-600 
            text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300'>
                <Link href=''>Sign Up</Link>
            </Button>
        </div>
    </nav>
  )
}
export default Navbar
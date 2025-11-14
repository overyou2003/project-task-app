import Link from 'next/link'
import { ListTodo } from 'lucide-react';
import { Button } from "@/components/ui/button"
const Navbar = () => {
  return (
    <nav className='flex justify-between p-4 bg-gray-200 items-center'>
        <div className='flex'>
            <Link href="/" className='flex gap-2 font-bold text-xl items-center'>
                <ListTodo/>TASKFLOW
            </Link>
        </div>
        <div className='flex gap-4 items-center'>
            <Link href=''>
                Login
            </Link>
            <Button asChild className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300'>
                <Link href=''>Sign Up</Link>
            </Button>
        </div>
    </nav>
  )
}
export default Navbar
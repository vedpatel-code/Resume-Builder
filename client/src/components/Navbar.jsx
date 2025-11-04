import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../app/features/authSlice'


const Navbar = () => {

    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const logoutUser = () => {
        navigate('/')
        dispatch(logout())
    }

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    return (
        <div className='shadow bg-gradient-to-br from-green-300'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
                <Link to='/'>
                    <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
                </Link>
                <div className='flex items-center gap-4 text-sm'>
                    <p className="max-sm:hidden text-gray-700 font-medium">
                        👋 {getGreeting()},{" "}
                        <span className="text-green-600">
                            {user?.name
                                ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
                                : ""}
                        </span>

                    </p>
                    <button onClick={logoutUser} className='bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

// 
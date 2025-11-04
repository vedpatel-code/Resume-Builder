import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-b bg-slate-50 text-gray-800/70">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img alt="" className="h-11"
                        src="logo.svg" />
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Build your dream career with the most advanced AI resume builder. Turn your skills into success.
                </p>
            </div>
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="">Smart Resumes, Real Results.</a> ©2025. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer

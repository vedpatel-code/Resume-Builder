import {Download, FileText, LayoutTemplate } from 'lucide-react';
import React from 'react'

const Feature = () => {
    return (
        <div className='mt-60 mb-20'>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto">Build Your Resume</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features.</p>
            
            <div className="flex items-center justify-center flex-wrap gap-6 mt-20 px-4 md:px-0">
                <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-violet-200 gap-6 max-w-sm">
                    <div className="p-6 aspect-square bg-violet-100 rounded-full">
                        <FileText />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">AI Resume Generator</h3>
                        <p className="text-sm text-slate-600">Automatically generate professional, ATS-friendly resumes using AI.</p>
                    </div>
                </div>
                <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-green-200 gap-6 max-w-sm">
                    <div className="p-6 aspect-square bg-green-100 rounded-full">
                        <LayoutTemplate />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Customizable Templates</h3>
                        <p className="text-sm text-slate-600">Offer multiple modern and professional templates with color, font, and layout options.</p>
                    </div>
                </div>
                <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-orange-200 gap-6 max-w-sm">
                    <div className="p-6 aspect-square bg-orange-100 rounded-full">
                        <Download />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Download & Export Options</h3>
                        <p className="text-sm text-slate-600">Allow users to download resumes in PDF or DOCX format.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature

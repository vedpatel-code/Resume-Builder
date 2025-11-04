import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'
import ResumePreview from '../components/ResumePreview'
import Loader from '../components/Loader'
import { ArrowLeftIcon } from 'lucide-react'
import api from '../config/api'

const Preview = () => {
  const { resumeId } = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [resumeData, setResumeData] = useState(null)

  const loadResume = async () => {
    try {
      const { data } = await api.get('/api/resumes/public', + resumeId)
      setResumeData(data.resume)
    } catch (error) {
      console.log(error.message);
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadResume()
  }, [])
  return resumeData ? (
    <div className='bg-slate-100'>
      <div className='max-w-3xl mx-auto py-10'>
        <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} classes='py-4 bg-white' />
      </div>
    </div>
  ) : (
    <div>
      {isLoading ? <Loader /> : (
        <div className="flex flex-col items-center justify-center text-sm max-md:px-4 py-20 min-h-screen bg-black">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Resume Not Found
          </h1>
          <div className="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>
          <p className="md:text-xl text-gray-400 max-w-lg text-center">
            The page you are looking for does not exist or has been moved.
          </p>
          <a
            href="/"
            className="group flex items-center gap-1 bg-white hover:bg-gray-200 px-7 py-2.5 text-gray-800 rounded-full mt-10 font-medium active:scale-95 transition-all"
          >
            Back to Home
            <svg
              className="group-hover:translate-x-0.5 transition"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
                stroke="#1E1E1E"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  )
}


export default Preview

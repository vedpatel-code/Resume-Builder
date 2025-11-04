import React from 'react'
import ClassicTemplate from './templates/ClassicTemplate'
import MinimalImageTemplate from './templates/MinimalImageTemplate'
import MinimalTemplate from './templates/MinimalTemplate'
import ModernTemplate from './templates/ModernTemplate'
import ElegantSidebarTemplate from './templates/ElegantSidebarTemplate'
import TimelineTemplate from './templates/TimelineTemplate'
import SleekProfileTemplate from './templates/SleekProfile'
import CareerPathTemplate from './templates/CareerPath'


const ResumePreview = ({ data, template, accentColor, classes = "" }) => {

    const renderTemplate = () => {
        switch (template) {
            case "modern":
                return <ModernTemplate data={data} accentColor={accentColor} />;
            case "minimal":
                return <MinimalTemplate data={data} accentColor={accentColor} />;
            case "minimal-image":
                return <MinimalImageTemplate data={data} accentColor={accentColor} />;
            case "elegant-sidebar":
                return <ElegantSidebarTemplate data={data} accentColor={accentColor} />;
            case "timeline":
                return <TimelineTemplate data={data} accentColor={accentColor}/>;
            case "sleekProfile":
                return <SleekProfileTemplate data={data} accentColor={accentColor}/>;
            case "careerPath":
                return <CareerPathTemplate data={data} accentColor={accentColor}/>;
 
            default:
                return <ClassicTemplate data={data} accentColor={accentColor} />;
        }
    }
    return (
        <div className='w-full bg-gray-100'>
            <div id="resume-preview" className={"border border-gray-200 print:shadow-none print:border-none " + classes}>
                {renderTemplate()}
            </div>

            <style jsx>
                {`
        @page {
            size: letter;
            margin: 0;
        }
        @media print{
        html,body{
            width: 8.5in;
            height: 11in;
            overflow: hidden;
        }
        body * {
        visibility: hidden;
        }
        #resume_preview, resume-preview * {
        visibility: visible;
        }
        #resume-preview{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
        box-shadow: none !important;
        border: none !important;
        }
        }
        `}
            </style>
        </div>
    )
}

export default ResumePreview

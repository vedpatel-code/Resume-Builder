import { Mail, Phone, MapPin, Linkedin, Globe, Award, Briefcase, GraduationCap, Code, Users } from "lucide-react";

const CareerPathTemplate = ({ data, accentColor = "#2563eb" }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    // Calculate experience duration
    const calculateDuration = (startDate, endDate, isCurrent) => {
        if (!startDate) return "";
        
        const start = new Date(startDate);
        const end = isCurrent ? new Date() : new Date(endDate);
        
        const years = end.getFullYear() - start.getFullYear();
        const months = end.getMonth() - start.getMonth();
        
        let totalMonths = years * 12 + months;
        if (totalMonths < 0) totalMonths = 0;
        
        const yearsDisplay = Math.floor(totalMonths / 12);
        const monthsDisplay = totalMonths % 12;
        
        if (yearsDisplay === 0) {
            return `${monthsDisplay} ${monthsDisplay === 1 ? 'month' : 'months'}`;
        } else if (monthsDisplay === 0) {
            return `${yearsDisplay} ${yearsDisplay === 1 ? 'year' : 'years'}`;
        } else {
            return `${yearsDisplay} ${yearsDisplay === 1 ? 'year' : 'years'} ${monthsDisplay} ${monthsDisplay === 1 ? 'month' : 'months'}`;
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed font-sans">
            {/* Header with gradient background */}
            <header className="rounded-xl p-6 mb-8 text-white" style={{ 
                background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}80 100%)` 
            }}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-3xl font-bold mb-2">
                            {data.personal_info?.full_name || "Your Name"}
                        </h1>
                        {data.personal_info?.title && (
                            <p className="text-lg opacity-90">{data.personal_info.title}</p>
                        )}
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm">
                        {data.personal_info?.email && (
                            <div className="flex items-center gap-2">
                                <Mail className="size-4" />
                                <span>{data.personal_info.email}</span>
                            </div>
                        )}
                        {data.personal_info?.phone && (
                            <div className="flex items-center gap-2">
                                <Phone className="size-4" />
                                <span>{data.personal_info.phone}</span>
                            </div>
                        )}
                        {data.personal_info?.location && (
                            <div className="flex items-center gap-2">
                                <MapPin className="size-4" />
                                <span>{data.personal_info.location}</span>
                            </div>
                        )}
                        {data.personal_info?.linkedin && (
                            <div className="flex items-center gap-2">
                                <Linkedin className="size-4" />
                                <span className="break-all">{data.personal_info.linkedin}</span>
                            </div>
                        )}
                        {data.personal_info?.website && (
                            <div className="flex items-center gap-2">
                                <Globe className="size-4" />
                                <span className="break-all">{data.personal_info.website}</span>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Column */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Professional Summary */}
                    {data.professional_summary && (
                        <section>
                            <div className="flex items-center mb-4">
                                <Briefcase className="size-5 mr-2" style={{ color: accentColor }} />
                                <h2 className="text-xl font-semibold" style={{ color: accentColor }}>
                                    PROFESSIONAL SUMMARY
                                </h2>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700 leading-relaxed">{data.professional_summary}</p>
                            </div>
                        </section>
                    )}

                    {/* Experience */}
                    {data.experience && data.experience.length > 0 && (
                        <section>
                            <div className="flex items-center mb-4">
                                <Briefcase className="size-5 mr-2" style={{ color: accentColor }} />
                                <h2 className="text-xl font-semibold" style={{ color: accentColor }}>
                                    PROFESSIONAL EXPERIENCE
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {data.experience.map((exp, index) => (
                                    <div key={index} className="relative pl-6">
                                        <div 
                                            className="absolute left-0 top-2 w-3 h-3 rounded-full border-2"
                                            style={{ borderColor: accentColor }}
                                        ></div>
                                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                                            <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-lg">{exp.position}</h3>
                                                    <p className="text-gray-700 font-medium">{exp.company}</p>
                                                </div>
                                                <div className="text-right text-sm text-gray-600 mt-1 md:mt-0">
                                                    <p>{formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}</p>
                                                    <p className="text-xs mt-1">{calculateDuration(exp.start_date, exp.end_date, exp.is_current)}</p>
                                                </div>
                                            </div>
                                            {exp.description && (
                                                <div className="text-gray-700 leading-relaxed whitespace-pre-line mt-2">
                                                    {exp.description}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Projects */}
                    {data.project && data.project.length > 0 && (
                        <section>
                            <div className="flex items-center mb-4">
                                <Code className="size-5 mr-2" style={{ color: accentColor }} />
                                <h2 className="text-xl font-semibold" style={{ color: accentColor }}>
                                    PROJECTS
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {data.project.map((proj, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                        <h3 className="font-semibold text-gray-800 mb-1">{proj.name}</h3>
                                        <p className="text-gray-600 text-sm">{proj.description}</p>
                                        {proj.technologies && (
                                            <div className="mt-2 flex flex-wrap gap-1">
                                                {proj.technologies.split(',').map((tech, i) => (
                                                    <span 
                                                        key={i} 
                                                        className="text-xs px-2 py-1 rounded-full bg-white border"
                                                        style={{ borderColor: accentColor, color: accentColor }}
                                                    >
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar Column */}
                <div className="space-y-8">
                    {/* Skills */}
                    {data.skills && data.skills.length > 0 && (
                        <section>
                            <div className="flex items-center mb-4">
                                <Award className="size-5 mr-2" style={{ color: accentColor }} />
                                <h2 className="text-xl font-semibold" style={{ color: accentColor }}>
                                    CORE SKILLS
                                </h2>
                            </div>

                            <div className="space-y-3">
                                {data.skills.map((skill, index) => (
                                    <div key={index} className="flex items-center">
                                        <div 
                                            className="w-2 h-2 rounded-full mr-3"
                                            style={{ backgroundColor: accentColor }}
                                        ></div>
                                        <span className="text-gray-700">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Education */}
                    {data.education && data.education.length > 0 && (
                        <section>
                            <div className="flex items-center mb-4">
                                <GraduationCap className="size-5 mr-2" style={{ color: accentColor }} />
                                <h2 className="text-xl font-semibold" style={{ color: accentColor }}>
                                    EDUCATION
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {data.education.map((edu, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-gray-900">
                                            {edu.degree} {edu.field && `in ${edu.field}`}
                                        </h3>
                                        <p className="text-gray-700">{edu.institution}</p>
                                        <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                                            <span>{formatDate(edu.graduation_date)}</span>
                                            {edu.gpa && <span>GPA: {edu.gpa}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Certifications */}
                    {data.certifications && data.certifications.length > 0 && (
                        <section>
                            <div className="flex items-center mb-4">
                                <Award className="size-5 mr-2" style={{ color: accentColor }} />
                                <h2 className="text-xl font-semibold" style={{ color: accentColor }}>
                                    CERTIFICATIONS
                                </h2>
                            </div>

                            <div className="space-y-3">
                                {data.certifications.map((cert, index) => (
                                    <div key={index} className="text-gray-700">
                                        <div className="font-medium">{cert.name}</div>
                                        <div className="text-sm text-gray-600">{cert.issuer} • {cert.date}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Languages */}
                    {data.languages && data.languages.length > 0 && (
                        <section>
                            <div className="flex items-center mb-4">
                                <Users className="size-5 mr-2" style={{ color: accentColor }} />
                                <h2 className="text-xl font-semibold" style={{ color: accentColor }}>
                                    LANGUAGES
                                </h2>
                            </div>

                            <div className="space-y-2">
                                {data.languages.map((lang, index) => (
                                    <div key={index} className="flex justify-between">
                                        <span className="text-gray-700">{lang.language}</span>
                                        <span className="text-gray-600 text-sm">{lang.proficiency}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CareerPathTemplate;
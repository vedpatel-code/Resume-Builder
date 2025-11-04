import { Mail, Phone, MapPin, Linkedin, Github, Award, Calendar, Star, ChevronRight } from "lucide-react";

const SleekProfileTemplate = ({ data, accentColor = "#10b981" }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const SkillTag = ({ skill, level }) => (
    <div className="flex items-center justify-between group">
      <span className="text-sm font-medium text-gray-700">{skill}</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={star <= level ? "fill-current" : ""}
            style={{ 
              color: star <= level ? accentColor : "#d1d5db" 
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto bg-white text-gray-900 shadow-xl rounded-2xl overflow-hidden">
      {/* Header Section */}
      <div className="relative">
        <div 
          className="h-32 bg-gradient-to-r from-gray-900 to-gray-800"
          style={{ 
            background: `linear-gradient(135deg, ${accentColor}20 0%, ${accentColor}40 50%, ${accentColor}20 100%)` 
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        {/* Profile Header Content */}
        <div className="relative px-8 pb-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between -mt-16">
            <div className="flex items-end gap-6 mb-6 md:mb-0">
              <div 
                className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg bg-white flex items-center justify-center"
                style={{ 
                  backgroundColor: `${accentColor}15`,
                  borderColor: `${accentColor}30`
                }}
              >
                <div 
                  className="text-3xl font-black"
                  style={{ color: accentColor }}
                >
                  {data.personal_info?.full_name?.split(' ').map(n => n[0]).join('') || "YP"}
                </div>
              </div>
              
              <div className="mb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {data.personal_info?.full_name || "Your Name"}
                </h1>
                <div 
                  className="text-lg font-semibold px-4 py-2 rounded-full inline-block"
                  style={{ 
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                    border: `1px solid ${accentColor}30`
                  }}
                >
                  {data.personal_info?.title || "Professional Title"}
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 min-w-[280px]">
              <div className="space-y-3">
                {data.personal_info?.email && (
                  <a href={`mailto:${data.personal_info.email}`} className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                    <div className="p-2 rounded-lg bg-gray-100">
                      <Mail size={16} style={{ color: accentColor }} />
                    </div>
                    <span className="text-gray-700 text-sm">{data.personal_info.email}</span>
                  </a>
                )}
                {data.personal_info?.phone && (
                  <a href={`tel:${data.personal_info.phone}`} className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                    <div className="p-2 rounded-lg bg-gray-100">
                      <Phone size={16} style={{ color: accentColor }} />
                    </div>
                    <span className="text-gray-700 text-sm">{data.personal_info.phone}</span>
                  </a>
                )}
                {data.personal_info?.location && (
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100">
                      <MapPin size={16} style={{ color: accentColor }} />
                    </div>
                    <span className="text-gray-700 text-sm">{data.personal_info.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 pb-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            {data.professional_summary && (
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: accentColor }}></div>
                  <h2 className="text-xl font-bold text-gray-900">Professional Profile</h2>
                </div>
                <p className="text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  {data.professional_summary}
                </p>
              </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: accentColor }}></div>
                  <h2 className="text-xl font-bold text-gray-900">Work Experience</h2>
                </div>
                <div className="space-y-6">
                  {data.experience.map((exp, i) => (
                    <div key={i} className="group">
                      <div className="flex gap-4">
                        <div 
                          className="w-1 rounded-full flex-shrink-0 transition-all group-hover:scale-110"
                          style={{ backgroundColor: accentColor }}
                        ></div>
                        <div className="flex-1">
                          <div className="flex flex-wrap justify-between items-start mb-3">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                              <div className="flex items-center gap-2 mt-1">
                                <div 
                                  className="px-3 py-1 rounded-full text-sm font-medium"
                                  style={{ 
                                    backgroundColor: `${accentColor}15`,
                                    color: accentColor
                                  }}
                                >
                                  {exp.company}
                                </div>
                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                  <Calendar size={14} />
                                  <span>
                                    {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {exp.description && (
                            <p className="text-gray-600 leading-relaxed">
                              {exp.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {data.project && data.project.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: accentColor }}></div>
                  <h2 className="text-xl font-bold text-gray-900">Key Projects</h2>
                </div>
                <div className="grid gap-4">
                  {data.project.map((proj, i) => (
                    <div 
                      key={i} 
                      className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                            {proj.name}
                            <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: accentColor }} />
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {proj.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Award size={20} style={{ color: accentColor }} />
                  <h2 className="text-xl font-bold text-gray-900">Skills & Expertise</h2>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <div className="space-y-4">
                    {data.skills.map((skill, i) => (
                      <SkillTag 
                        key={i} 
                        skill={skill} 
                        level={Math.min(4, Math.floor(Math.random() * 5) + 1)} // Random levels for demo
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></div>
                  <h2 className="text-xl font-bold text-gray-900">Education</h2>
                </div>
                <div className="space-y-4">
                  {data.education.map((edu, i) => (
                    <div 
                      key={i} 
                      className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      {edu.field && (
                        <p className="text-gray-700 text-sm mb-2">{edu.field}</p>
                      )}
                      <p className="text-gray-600 text-sm mb-3">{edu.institution}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar size={12} />
                        <span>Graduated {formatDate(edu.graduation_date)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Social Links */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></div>
                <h2 className="text-xl font-bold text-gray-900">Connect</h2>
              </div>
              <div className="flex gap-3">
                {data.personal_info?.linkedin && (
                  <a 
                    href={data.personal_info.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105 text-center group"
                  >
                    <Linkedin size={20} style={{ color: accentColor }} className="mx-auto mb-2" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">LinkedIn</span>
                  </a>
                )}
                {data.personal_info?.website && (
                  <a 
                    href={data.personal_info.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-50 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105 text-center group"
                  >
                    <Github size={20} style={{ color: accentColor }} className="mx-auto mb-2" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Portfolio</span>
                  </a>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50 px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-2 md:mb-0">
            {data.personal_info?.full_name || "Your Name"} • Professional Profile
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {data.personal_info?.email && <span>{data.personal_info.email}</span>}
            {data.personal_info?.phone && <span>• {data.personal_info.phone}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleekProfileTemplate;
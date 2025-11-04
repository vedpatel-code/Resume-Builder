import { Calendar, Mail, Phone, MapPin, Linkedin, Globe, Award, BookOpen, Briefcase, User } from "lucide-react";

const TimelineTemplate = ({ data, accentColor = "#3b82f6" }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const TimelineItem = ({ children, date, isFirst = false, isLast = false }) => (
    <div className="flex">
      {/* Timeline line */}
      <div className="flex flex-col items-center mr-4">
        {!isFirst && <div className="w-0.5 h-6 bg-gray-300 mb-1"></div>}
        <div
          className="w-3 h-3 rounded-full border-2 border-white shadow-sm z-10"
          style={{ backgroundColor: accentColor }}
        ></div>
        {!isLast && <div className="w-0.5 h-full bg-gray-300 mt-1"></div>}
      </div>

      {/* Content */}
      <div className="flex-1 pb-6">
        {date && (
          <div
            className="inline-block px-3 py-1 text-xs font-medium text-white rounded-full mb-2"
            style={{ backgroundColor: accentColor }}
          >
            {date}
          </div>
        )}
        {children}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <header className="p-8 text-white" style={{ backgroundColor: accentColor }}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-white bg-opacity-20">
            {data.personal_info?.image ? (
              <img
                src={data.personal_info.image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={32} className="text-white" />
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {data.personal_info?.full_name || "Your Name"}
            </h1>
            <p className="text-lg opacity-90 mt-1">
              {data.personal_info?.title || "Your Profession"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{data.personal_info.email}</span>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </div>
          )}
        </div>
      </header>

      <div className="p-8">
        {/* Summary */}
        {data.professional_summary && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <User size={20} style={{ color: accentColor }} />
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
              {data.professional_summary}
            </p>
          </section>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Experience Timeline */}
            {data.experience && data.experience.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Briefcase size={20} style={{ color: accentColor }} />
                  Work Experience
                </h2>
                <div className="space-y-1">
                  {data.experience.map((exp, i) => (
                    <TimelineItem
                      key={i}
                      date={`${formatDate(exp.start_date)} - ${exp.is_current ? "Present" : formatDate(exp.end_date)}`}
                      isFirst={i === 0}
                      isLast={i === data.experience.length - 1}
                    >
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h3 className="font-bold text-lg text-gray-900">
                          {exp.position}
                        </h3>
                        <p className="text-gray-700 font-medium mb-2">
                          {exp.company}
                        </p>
                        {exp.description && (
                          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                            {exp.description}
                          </p>
                        )}
                      </div>
                    </TimelineItem>
                  ))}
                </div>
              </section>
            )}

            {/* Education Timeline */}
            {data.education && data.education.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen size={20} style={{ color: accentColor }} />
                  Education
                </h2>
                <div className="space-y-1">
                  {data.education.map((edu, i) => (
                    <TimelineItem
                      key={i}
                      date={formatDate(edu.graduation_date)}
                      isFirst={i === 0}
                      isLast={i === data.education.length - 1}
                    >
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h3 className="font-bold text-lg text-gray-900">
                          {edu.degree}
                        </h3>
                        {edu.field && (
                          <p className="text-gray-700 font-medium mb-1">
                            {edu.field}
                          </p>
                        )}
                        <p className="text-gray-600">{edu.institution}</p>
                      </div>
                    </TimelineItem>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award size={20} style={{ color: accentColor }} />
                  Skills
                </h2>
                <div className="space-y-3">
                  {data.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: accentColor }}
                      ></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {data.project && data.project.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Briefcase size={20} style={{ color: accentColor }} />
                  Projects
                </h2>
                <div className="space-y-4">
                  {data.project.map((proj, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {proj.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Additional Links */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Globe size={20} style={{ color: accentColor }} />
                Links
              </h2>
              <div className="space-y-2">
                {data.personal_info?.linkedin && (
                  <div className="flex items-center gap-2 text-sm">
                    <Linkedin size={16} style={{ color: accentColor }} />
                    <span className="text-gray-700">LinkedIn Profile</span>
                  </div>
                )}
                {data.personal_info?.website && (
                  <div className="flex items-center gap-2 text-sm">
                    <Globe size={16} style={{ color: accentColor }} />
                    <span className="text-gray-700">Personal Website</span>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineTemplate;
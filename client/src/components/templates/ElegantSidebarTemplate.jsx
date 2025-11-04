import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ElegantSidebarTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-gray-50 text-gray-900 grid md:grid-cols-[250px_1fr] shadow-md rounded-lg overflow-hidden">
      {/* Sidebar */}
      <aside
        className="p-6 text-white flex flex-col justify-between"
        style={{ backgroundColor: accentColor }}
      >
        <div>
          <h1 className="text-3xl font-bold mb-1">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="text-sm opacity-80 mb-6">
            {data.personal_info?.title || "Your Profession"}
          </p>

          <div className="space-y-2 text-sm">
            {data.personal_info?.email && (
              <div className="flex items-center gap-2">
                <Mail size={15} />
                <span>{data.personal_info.email}</span>
              </div>
            )}
            {data.personal_info?.phone && (
              <div className="flex items-center gap-2">
                <Phone size={15} />
                <span>{data.personal_info.phone}</span>
              </div>
            )}
            {data.personal_info?.location && (
              <div className="flex items-center gap-2">
                <MapPin size={15} />
                <span>{data.personal_info.location}</span>
              </div>
            )}
            {data.personal_info?.linkedin && (
              <div className="flex items-center gap-2 break-all">
                <Linkedin size={15} />
                <span>{data.personal_info.linkedin}</span>
              </div>
            )}
            {data.personal_info?.website && (
              <div className="flex items-center gap-2 break-all">
                <Globe size={15} />
                <span>{data.personal_info.website}</span>
              </div>
            )}
          </div>
        </div>

        {data.skills && data.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mt-8 mb-3">Skills</h2>
            <ul className="space-y-1 text-sm">
              {data.skills.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      {/* Content */}
      <main className="p-8 space-y-6">
        {/* Summary */}
        {data.professional_summary && (
          <section>
            <h2
              className="text-xl font-bold mb-2 border-b-2 pb-1"
              style={{ borderColor: accentColor }}
            >
              Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section>
            <h2
              className="text-xl font-bold mb-3 border-b-2 pb-1"
              style={{ borderColor: accentColor }}
            >
              Experience
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-gray-700 text-sm">{exp.company}</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </p>
                  </div>
                  {exp.description && (
                    <p className="text-gray-600 text-sm mt-1 whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section>
            <h2
              className="text-xl font-bold mb-3 border-b-2 pb-1"
              style={{ borderColor: accentColor }}
            >
              Education
            </h2>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-2">
                <h3 className="font-semibold text-gray-900">
                  {edu.degree} {edu.field && `in ${edu.field}`}
                </h3>
                <p className="text-gray-700 text-sm">{edu.institution}</p>
                <p className="text-gray-600 text-sm">
                  {formatDate(edu.graduation_date)}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <section>
            <h2
              className="text-xl font-bold mb-3 border-b-2 pb-1"
              style={{ borderColor: accentColor }}
            >
              Projects
            </h2>
            <ul className="space-y-3">
              {data.project.map((proj, i) => (
                <li key={i}>
                  <h3 className="font-semibold text-gray-900">{proj.name}</h3>
                  <p className="text-gray-700 text-sm">{proj.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
};

export default ElegantSidebarTemplate;

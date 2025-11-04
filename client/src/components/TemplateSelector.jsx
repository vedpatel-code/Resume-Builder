import { Check, Layout, Search } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview: "A clean, traditional resume format with clear sections and professional typography."
    },
    {
      id: "modern",
      name: "Modern",
      preview: "Sleek design with strategic use of color and modern font choices."
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      preview: "Minimal design with a single image and clean typography."
    },
    {
      id: "minimal",
      name: "Minimal",
      preview: "Ultra-clean design that puts your content front and center."
    },
    {
      id: "elegant-sidebar",
      name: "Elegant Sidebar",
      preview: "Stylish two-column layout with a sleek sidebar for personal details and skills."
    },
    {
      id: "timeline",
      name: "Timeline",
      preview: "Visual vertical timeline layout highlighting experience, education, and projects."
    },
    {
      id: "sleekProfile",
      name: "SleekProfile",
      preview: "Modern and minimal layout with elegant typography and subtle color accents."
    },
    {
      id: "careerPath",
      name: "CareerPath",
      preview: "Professional layout emphasizing career progression with a vertical timeline."
    }
  ]

  // Filter templates by name or description
  const filteredTemplates = templates.filter((template) =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.preview.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-1 ring-blue-300 hover:ring-blue-400 transition-all px-3 py-2 rounded-lg"
      >
        <Layout size={14} />
        <span className="max-sm:hidden">Template</span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-80 max-h-[70vh] overflow-y-auto p-3 mt-2 space-y-3 z-20 bg-white rounded-md border border-gray-200 shadow-lg">
          
          {/* 🔍 Search bar */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Template list */}
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <div
                key={template.id}
                onClick={() => {
                  onChange(template.id)
                  setIsOpen(false)
                }}
                className={`relative p-3 border rounded-md cursor-pointer transition-all ${
                  selectedTemplate === template.id
                    ? "border-blue-400 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                }`}
              >
                {selectedTemplate === template.id && (
                  <div className="absolute top-2 right-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}
                <div className="space-y-1">
                  <h4 className="font-medium text-gray-800">{template.name}</h4>
                  <p className="mt-1 text-xs text-gray-500 italic leading-snug bg-blue-50 p-2 rounded">
                    {template.preview}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-sm text-gray-500 italic py-4">
              No templates found.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default TemplateSelector

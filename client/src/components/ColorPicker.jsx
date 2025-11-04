import { Check, Palette, Search } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'

const ColorPicker = ({ selectedColor, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const dropdownRef = useRef(null)

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const colors = [
    { name: "Blue", value: "#3B82F6" },
    { name: "Indigo", value: "#6366F1" },
    { name: "Purple", value: "#8B5CF6" },
    { name: "Green", value: "#10B981" },
    { name: "Red", value: "#EF4444" },
    { name: "Orange", value: "#F97316" },
    { name: "Teal", value: "#14B8A6" },
    { name: "Pink", value: "#EC4899" },
    { name: "Gray", value: "#6B7280" },
    { name: "Black", value: "#1F2937" },
    { name: "Royal Blue", value: "#3B82F6" },
    { name: "Sky Blue", value: "#0EA5E9" },
    { name: "Cyan", value: "#06B6D4" },
    { name: "Lime", value: "#84CC16" },
    { name: "Amber", value: "#F59E0B" },
    { name: "Rose", value: "#F43F5E" },
    { name: "Emerald", value: "#10B981" },
    { name: "Slate", value: "#475569" },
    { name: "Stone", value: "#78716C" },
    { name: "Violet", value: "#7C3AED" },
    { name: "Fuchsia", value: "#D946EF" },
    { name: "Yellow", value: "#EAB308" },
    { name: "Deep Blue", value: "#1E40AF" },
    { name: "Charcoal", value: "#27272A" },
    { name: "Light Gray", value: "#D1D5DB" },
    { name: "Navy", value: "#1E3A8A" },
    { name: "Mint", value: "#99F6E4" },
    { name: "Coral", value: "#FB7185" },
    { name: "Lavender", value: "#C4B5FD" },
    { name: "Bronze", value: "#B45309" },
    { name: "Aqua", value: "#67E8F9" },
    { name: "Zinc", value: "#18181B" },
    { name: "Magenta", value: "#DB2777" },
    { name: "Olive", value: "#65A30D" },
    { name: "Maroon", value: "#991B1B" },
    { name: "Turquoise", value: "#0D9488" },
    { name: "Peach", value: "#FB923C" },
    { name: "Ruby", value: "#DC2626" },
    { name: "Sapphire", value: "#1D4ED8" },
    { name: "Pearl", value: "#F0F9FF" },
    { name: "Crimson", value: "#B91C1C" },
    { name: "Jade", value: "#059669" },
    { name: "Copper", value: "#B87333" },
    { name: "Silver", value: "#C0C0C0" },
    { name: "Gold", value: "#FFD700" },
    { name: "Ivory", value: "#FFFFF0" },
    { name: "Plum", value: "#DDA0DD" },
    { name: "Sea Green", value: "#2E8B57" },
    { name: "Forest Green", value: "#228B22" },
    { name: "Sky Gray", value: "#CBD5E1" },
    { name: "Midnight Blue", value: "#191970" },
    { name: "Steel Blue", value: "#4682B4" },
    { name: "Coffee", value: "#6F4E37" },
    { name: "Sand", value: "#F4A460" },
    { name: "Beige", value: "#F5F5DC" },
    { name: "Mint Cream", value: "#F5FFFA" },
    { name: "Blush", value: "#FFC0CB" },
    { name: "Denim", value: "#1560BD" },
    { name: "Mahogany", value: "#C04000" },
    { name: "Taupe", value: "#8B8589" },
    { name: "Charcoal Gray", value: "#36454F" },
    { name: "Ocean Blue", value: "#0077BE" }
  ]

  // Filtered colors
  const filteredColors = colors.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-purple-600 bg-gradient-to-br from-purple-50 to-purple-100 ring-1 ring-purple-300 hover:ring-purple-400 transition-all px-3 py-2 rounded-lg"
      >
        <Palette size={16} />
        <span className="max-sm:hidden">Accent</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 shadow-lg rounded-md z-20 p-3">

          {/* Search Bar */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search colors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Colors Grid */}
          <div className="grid grid-cols-4 gap-3 max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {filteredColors.length > 0 ? (
              filteredColors.map((color) => (
                <div
                  key={color.value + color.name}
                  onClick={() => {
                    onChange(color.value)
                    setIsOpen(false)
                  }}
                  className="relative cursor-pointer flex flex-col items-center group"
                >
                  <div
                    className="w-12 h-12 rounded-full border-2 border-transparent group-hover:border-black/25 transition-all"
                    style={{ backgroundColor: color.value }}
                  />
                  {selectedColor === color.value && (
                    <div className="absolute top-0 left-0 right-0 bottom-4.5 flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <p className="text-xs text-center mt-1 text-gray-600 truncate w-14">
                    {color.name}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-sm text-gray-500 italic col-span-4 py-4">
                No colors found
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ColorPicker

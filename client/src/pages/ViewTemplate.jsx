// import React, { useState, useEffect } from 'react';

// const ViewTemplate = () => {
//   const [templates, setTemplates] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(true);

//   // Mock data
//   useEffect(() => {
//     const mockTemplates = [
//       {
//         id: 1,
//         title: 'Modern Business Card',
//         category: 'business',
//         description: 'Clean and professional business card design',
//         image: 'https://images.unsplash.com/photo-1531492746076-161ca9b7e6a1?w=400',
//         price: '$49',
//         rating: 4.8,
//         downloads: 1247,
//         featured: true
//       },
//       {
//         id: 2,
//         title: 'Creative Portfolio',
//         category: 'portfolio',
//         description: 'Eye-catching portfolio template for designers',
//         image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400',
//         price: '$79',
//         rating: 4.9,
//         downloads: 892,
//         featured: true
//       },
//       {
//         id: 3,
//         title: 'E-commerce Website',
//         category: 'ecommerce',
//         description: 'Fully responsive e-commerce template',
//         image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
//         price: '$129',
//         rating: 4.7,
//         downloads: 2156,
//         featured: false
//       },
//       {
//         id: 4,
//         title: 'Restaurant Menu',
//         category: 'food',
//         description: 'Elegant restaurant menu design',
//         image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
//         price: '$59',
//         rating: 4.6,
//         downloads: 743,
//         featured: false
//       },
//       {
//         id: 5,
//         title: 'Mobile App UI Kit',
//         category: 'mobile',
//         description: 'Modern mobile application interface',
//         image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400',
//         price: '$99',
//         rating: 4.8,
//         downloads: 1567,
//         featured: true
//       },
//       {
//         id: 6,
//         title: 'Wedding Invitation',
//         category: 'event',
//         description: 'Beautiful wedding invitation template',
//         image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400',
//         price: '$39',
//         rating: 4.9,
//         downloads: 982,
//         featured: false
//       },
//       {
//         id: 7,
//         title: 'Corporate Presentation',
//         category: 'business',
//         description: 'Professional slide deck for corporate use',
//         image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
//         price: '$89',
//         rating: 4.7,
//         downloads: 1123,
//         featured: false
//       },
//       {
//         id: 8,
//         title: 'Fitness App Design',
//         category: 'mobile',
//         description: 'Health and fitness mobile app template',
//         image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
//         price: '$109',
//         rating: 4.8,
//         downloads: 867,
//         featured: true
//       }
//     ];

//     setTimeout(() => {
//       setTemplates(mockTemplates);
//       setLoading(false);
//     }, 1500);
//   }, []);

//   const categories = [
//     { id: 'all', name: 'All Templates', icon: '📁' },
//     { id: 'business', name: 'Business', icon: '💼' },
//     { id: 'portfolio', name: 'Portfolio', icon: '🎨' },
//     { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
//     { id: 'food', name: 'Food & Restaurant', icon: '🍽️' },
//     { id: 'mobile', name: 'Mobile App', icon: '📱' },
//     { id: 'event', name: 'Events', icon: '🎉' }
//   ];

//   const filteredTemplates = templates.filter(template => {
//     const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
//     const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          template.description.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
//           <p className="text-gray-600 text-lg">Loading beautiful templates...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
//         <div className="absolute inset-0 bg-black opacity-10"></div>
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
//               Discover Amazing Templates
//             </h1>
//             <p className="text-xl text-blue-100 mb-8">
//               Beautiful, responsive templates for every project. Customize and launch in minutes.
//             </p>
//             <div className="max-w-2xl mx-auto flex gap-2">
//               <input
//                 type="text"
//                 placeholder="Search templates..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
//               />
//               <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center gap-3">
//             {categories.map(category => (
//               <button
//                 key={category.id}
//                 className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                   selectedCategory === category.id
//                     ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
//                     : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
//                 }`}
//                 onClick={() => setSelectedCategory(category.id)}
//               >
//                 <span className="text-lg">{category.icon}</span>
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Templates Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Templates</h2>
//             <p className="text-gray-600 text-lg">
//               {filteredTemplates.length} stunning templates found
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {filteredTemplates.map(template => (
//               <TemplateCard key={template.id} template={template} />
//             ))}
//           </div>

//           {filteredTemplates.length === 0 && (
//             <div className="text-center py-16">
//               <div className="text-6xl mb-4">🔍</div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">No templates found</h3>
//               <p className="text-gray-600">Try adjusting your search or filter criteria</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-gray-900 to-indigo-900 text-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-4xl font-bold mb-6">Can't find what you're looking for?</h2>
//             <p className="text-xl text-gray-300 mb-8">
//               We can create a custom template tailored specifically for your needs
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold text-lg transition-colors shadow-lg">
//                 Request Custom Template
//               </button>
//               <button className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-semibold text-lg transition-colors shadow-lg">
//                 Go To Home Page
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // Template Card Component
// const TemplateCard = ({ template }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
//         isHovered ? 'transform -translate-y-2' : ''
//       } ${template.featured ? 'ring-2 ring-yellow-400' : ''}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Image Container */}
//       <div className="relative overflow-hidden">
//         <img 
//           src={template.image} 
//           alt={template.title}
//           className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
//         />
        
//         {/* Overlay */}
//         <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
//           isHovered ? 'opacity-30' : 'opacity-0'
//         }`}></div>
        
//         {/* Badges */}
//         <div className="absolute top-4 left-4 flex gap-2">
//           {template.featured && (
//             <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
//               ⭐ Featured
//             </span>
//           )}
//           <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//             {template.price}
//           </span>
//         </div>

//         {/* Hover Actions */}
//         <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${
//           isHovered ? 'opacity-100' : 'opacity-0'
//         }`}>
//           <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
//             Live Preview
//           </button>
//           <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors shadow-lg">
//             Get Template
//           </button>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <div className="flex items-start justify-between mb-3">
//           <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
//             {template.title}
//           </h3>
//         </div>
        
//         <p className="text-gray-600 mb-4 line-clamp-2">
//           {template.description}
//         </p>
        
//         {/* Stats */}
//         <div className="flex items-center justify-between text-sm text-gray-500">
//           <div className="flex items-center gap-1">
//             <span className="text-yellow-400">★</span>
//             <span>{template.rating}</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <span>📥</span>
//             <span>{template.downloads.toLocaleString()}</span>
//           </div>
//         </div>

//         {/* Action Button */}
//         <button className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md">
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ViewTemplate;


import React from 'react'

const ViewTemplate = () => {
  return (
    <div>
      <h1>View Template</h1>
    </div>
  )
}

export default ViewTemplate

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Resources() {
  const resources = [
    {
      id: 1,
      title: "Peace Education Curriculum",
      description: "Comprehensive curriculum materials for teaching peace education in schools.",
      category: "Educational Materials",
      link: "#",
    },
    {
      id: 2,
      title: "Research Papers",
      description: "Academic research and publications on child security and peace building.",
      category: "Research",
      link: "#",
    },
    {
      id: 3,
      title: "Training Guides",
      description: "Step-by-step guides for training educators and facilitators.",
      category: "Training",
      link: "#",
    },
    {
      id: 4,
      title: "Case Studies",
      description: "Real-world case studies and success stories from our initiatives.",
      category: "Case Studies",
      link: "#",
    },
    {
      id: 5,
      title: "Video Tutorials",
      description: "Video resources for implementing peace education programs.",
      category: "Multimedia",
      link: "#",
    },
    {
      id: 6,
      title: "Downloadable Toolkits",
      description: "Complete toolkits with templates and resources for program implementation.",
      category: "Tools",
      link: "#",
    },
  ]

  const categories = ["All", "Educational Materials", "Research", "Training", "Case Studies", "Multimedia", "Tools"]

  return (
    <main className="w-full bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resources</h1>
            <p className="text-lg text-gray-600">
              Explore our comprehensive collection of educational materials, research, and tools to support peace
              education and child security initiatives.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    category === "All" ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-block text-blue-700 font-semibold hover:text-blue-800 transition"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

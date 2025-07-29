"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, StarHalf } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [selectedCategory, setSelectedCategory] = useState<string>("marketing")

  const workCategories = [
    { id: "marketing", label: "Marketing", icon: "📊", color: "text-purple-600" },
    { id: "operations", label: "Operations", icon: "📋", color: "text-blue-600" },
    { id: "software", label: "Software", icon: "💻", color: "text-gray-500" },
    { id: "design", label: "Design", icon: "⚡", color: "text-gray-500" },
    { id: "finance", label: "Finance", icon: "📊", color: "text-gray-500" },
    { id: "prof-services", label: "Prof Services", icon: "🏢", color: "text-gray-500" },
    { id: "sales-crm", label: "Sales & CRM", icon: "📈", color: "text-gray-500" },
    { id: "other", label: "Other", icon: "➕", color: "text-gray-500" },
  ]

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center ">
          {/* AI-powered tagline */}
          <div className="">
            <span className="text-blue-600 font-medium text-sm md:text-base font-primary">AI-powered project management</span>
          </div>

          {/* Main headline */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold text-gray-900   leading-[1.1428571429]  font-secondary">
              The all-in-one platform for
              <br />
              project management
            </h1>

            <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto tracking-[-.25px] leading-[1.3333333333] font-secondary">
              Manage your projects, docs, and chat all in one place—with AI
              <br />
              that helps your team get more done, faster.
            </p>
          </div>

          {/* Work category selection */}
          <div className="space-y-6 pt-8">
            <h2 className="text-xl md:text-lg font-semibold text-gray-900 font-secondary tracking-[-.25px] leading-[1.3333333333]">
              What kind of work do you want to manage?
            </h2>

            {/* Category buttons grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 max-w-5xl mx-auto">
              {workCategories.map((category) => {
                const isSelected = selectedCategory === category.id
                return (
                  <label
                    key={category.id}
                    className={`relative flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      isSelected ? " bg-white" : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="workCategory"
                      className="sr-only"
                      checked={isSelected}
                      onChange={() => handleCategoryChange(category.id)}
                    />
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-4 h-4 bg-black rounded-sm flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                    <span className={`text-2xl mb-2 ${category.color}`}>{category.icon}</span>
                    <span className="text-sm font-medium text-center leading-tight text-gray-700 font-secondary">
                      {category.label}
                    </span>
                  </label>
                )
              })}
            </div>
          </div>
          {/* CTA Button */}
          <div className="pt-8">
            <Button className="ps-8 pe-8 text-md font-semibold bg-gradient-to-r from-[#40ddff] via-[#7612fa] to-[#fa12e3] hover:transform hover:-translate-y-1 text-white rounded-[20px] shadow-lg hover:shadow-xl transition-all duration-200">
              Get Started. It&apos;s FREE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Reviews section */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => {
               if(i<4){
               return (<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
               }
               else{
                return (<StarHalf key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
               }
              })}
            </div>
            <span className="text-gray-600 text-sm ml-2">25,000+ reviews from</span>
            <div className="flex items-center gap-2 ml-2">
              <span className="text-orange-500 font-bold text-lg font-secondary">G</span>
              <span className="text-blue-500 font-bold text-lg font-secondary">📊</span>
              <span className="text-green-500 font-bold text-lg font-secondary">🏆</span>
              <span className="text-red-500 font-bold text-lg font-secondary">❤️</span>
              <span className="text-purple-500 font-bold text-lg font-secondary">⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

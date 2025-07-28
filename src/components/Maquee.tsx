import { Marquee } from "./magicui/marquee"

const companies = [
    { name: "Paramount", logo: "https://images.ctfassets.net/w8fc6tgspyjz/S09Ryn7VjvIqguXpMU7vM/64209b2be18f9f2e95d102eebb30663b/cartoon-network.svg" },
    { name: "Wayfair", logo: "https://images.ctfassets.net/w8fc6tgspyjz/S09Ryn7VjvIqguXpMU7vM/64209b2be18f9f2e95d102eebb30663b/cartoon-network.svg" },
    { name: "Logitech", logo: "https://images.ctfassets.net/w8fc6tgspyjz/S09Ryn7VjvIqguXpMU7vM/64209b2be18f9f2e95d102eebb30663b/cartoon-network.svg" },
    { name: "Adidas", logo: "https://images.ctfassets.net/w8fc6tgspyjz/S09Ryn7VjvIqguXpMU7vM/64209b2be18f9f2e95d102eebb30663b/cartoon-network.svg" },
    { name: "Chick-fil-A", logo: "https://images.ctfassets.net/w8fc6tgspyjz/S09Ryn7VjvIqguXpMU7vM/64209b2be18f9f2e95d102eebb30663b/cartoon-network.svg" },
    { name: "Zillow", logo: "https://images.ctfassets.net/w8fc6tgspyjz/S09Ryn7VjvIqguXpMU7vM/64209b2be18f9f2e95d102eebb30663b/cartoon-network.svg" },
    { name: "Datadog", logo: "https://images.ctfassets.net/w8fc6tgspyjz/S09Ryn7VjvIqguXpMU7vM/64209b2be18f9f2e95d102eebb30663b/cartoon-network.svg" },
    { name: "Siemens", logo: "https://images.ctfassets.net/w8fc6tgspyjz/S09Ryn7VjvIqguXpMU7vM/64209b2be18f9f2e95d102eebb30663b/cartoon-network.svg" },
  ]
  
  export default function TrustedBySection() {
    return (
      <section className="w-full  py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center ">
            <p className="text-gray-600 text-md font-thin">Trusted by the world's leading businesses</p>
          </div>
  
          <Marquee pauseOnHover className="[--duration:30s]">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center px-8 py-4 mx-4">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    )
  }
  
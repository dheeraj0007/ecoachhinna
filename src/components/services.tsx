import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function services() {
  return (
    <div className="px-2 md:px-20 lg:px-56 relative text-center md:text-left  py-8 space-y-8 w-full bg-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-4xl font-semibold w-full md:w-[80%] space-y-8">
          <h1>We All Need Help to Realize What We Want Most.</h1>

          <div className="py-4 my-4 w-full">
            <Link
              href="#"
              className=" px-4 rounded-md text-[#ee3237] hover:bg-[#ee3237] hover:text-white duration-200 py-3 text-xl border-[#ee3237] border-2"
            >
              View All Services
            </Link>
          </div>
        </div>
        <div className="space-y-8">
          {courses.map((course, i) => {
            return (
              <div key={i}>
                <ServiceCard title={course.title} link={course.link} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const ServiceCard = ({ link, title }: { link: string; title: string }) => {
  return (
    <Link
      href={link}
      className="w-full flex justify-between items-center text-xl md:text-2xl font-medium text-left space-x-4 border-b border-white hover:border-[#ee3237] py-3"
    >
      <p>{title}</p>
      <span>
        <ArrowRight />
      </span>
    </Link>
  )
}

const courses = [
  { category: 'Dating', title: 'For Better Dating', link: '#' },
  {
    category: 'Professional Course',
    title: 'For Working Professionals',
    link: '#',
  },
  { category: 'Online Course', title: 'For Home Makers', link: '#' },
  {
    category: 'Business Owners',
    title: 'For Business Owners with Overseas clients.',
    link: '#',
  },
  { category: 'Kids', title: 'For School Kids', link: '#' },
]
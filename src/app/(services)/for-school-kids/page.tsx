import Header from '@/components/services/header'

import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Divider } from 'antd'
import { Circle } from 'lucide-react'

const SchoolKidsPage = () => {
  return (
    <>
      <Header
        courseName="E CLIMB"
        info=" English Communication Learning, Improvement & Methodological Boost"
        brief="A Comprehensive Program Designed for Students for enhancing Interpersonal & Communication Skills"
      />
      <div className=" py-8">
        <div className="space-y-8 py-16 px-2 md:px-20 lg:px-36">
          <h5 className="text-4xl text-center font-bold">What ECLIMB offers</h5>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((off, i) => {
              return (
                <OfferingCard2
                  key={i}
                  title={off.title}
                  from={off.from}
                  to={off.to}
                  info={off.info}
                  // icon={off.icon}
                />
              )
            })}
          </div>
        </div>
        <div className="py-16 space-y-12 px-2 md:px-20 lg:px-36">
          <h5 className="text-4xl text-center font-bold ">
            Topics that I&lsquo;ll Cover
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {communication_skills_topics.map((skill, i) => (
              <CoursePoint title={skill} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SchoolKidsPage

const CoursePoint = ({ title }: { title: string }) => {
  return (
    <div className="rounded flex justify-start items-center  hover:shadow-lg px-6 transition hover:scale-105 py-2 space-x-4 font-normal">
      <div className="min-w-fit">
        <Circle size={24} className="text-accent" />
      </div>
      <h5 className="text-xl  min-w-0">{title}</h5>
    </div>
  )
}

const OfferingCard2 = ({
  title,
  from,
  to,
  info,
}: {
  title: string
  from: string
  to: string
  info: string
}) => {
  return (
    <Card
      className={` w-full h-full  bg-gradient-to-tl from-[#ed3237] to-[#fb666b]  text-white rounded transition `}
    >
      <CardHeader>
        <UserFilled />
      </CardHeader>
      <CardContent className="">
        <h5 className="text-2xl font-bold min-w-0">{title}</h5>
      </CardContent>
      <CardFooter>
        <p className="min-w-0 font-light text-zinc-200 text-lg">{info}</p>
      </CardFooter>
    </Card>
  )
}

const offerings = [
  {
    title: 'Confidence Building ',
    icon: '/services/for-kids/art-1.svg',
    info: 'I understand that some kids may feel a bit shy or hesitant when it comes to speaking up in class or expressing themselves. My friendly and patient approach helps boost their self-esteem and encourages them to share their thoughts and ideas confidently.',
    from: '#51c5e6',
    to: '#c4effb',
  },
  {
    title: 'Speech Clarity',
    icon: '/services/for-kids/information.svg',
    info: 'Is your child having trouble with pronunciation? I can help! I use interactive games and exercises to improve speech clarity, making it easier for your child to be understood by peers and teachers.',
    from: '#9580ff',
    to: '#aea0f3',
  },
  {
    title: 'Listening Skills',
    icon: '/services/for-kids/art-1.svg',
    info: 'Effective communication goes beyond talking; it also involves listening actively. I teach kids how to be attentive listeners, which is a crucial skill for better understanding in the classroom and building positive relationships with others.',
    from: '#e5487d',
    to: '#ef739c',
  },
  {
    title: 'Creative Expression',
    icon: '/services/for-kids/art-1.svg',
    info: 'I believe that communication is not just about words. I encourage creativity through storytelling, drama, and other creative activities that help children express themselves in imaginative ways.',
    from: '#e99e45',
    to: '#fbb764',
  },
  {
    title: 'Social Interaction',
    icon: '/services/for-kids/art-1.svg',
    info: 'Communication is at the heart of building friendships. I teach kids how to engage in conversations, ask questions, and share their thoughts in a friendly and polite manner, making social interactions more enjoyable.',
    from: '#ed3237',
    to: '#fb666b',
  },
  {
    title: 'Communication Coaching for Kids',
    icon: '/services/for-kids/art-1.svg',
    info: 'If your child is in school, it is a crucial time for developing effective communication skills. I offer personalized coaching sessions that are engaging, fun, and tailored to your child’s unique needs.',
    from: '#9580ff',
    to: '#aea0f3',
  },
]

const UserFilled = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-16 h-16"
  >
    <path
      fill-rule="evenodd"
      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
      clip-rule="evenodd"
    />
  </svg>
)

const communication_skills_topics = [
  'Body Language',
  'Non-Verbal Language',
  'Powerful Listening Skills',
  'Meeting People for the First Time',
  'Introduction',
  'Small Talk Conversations',
  'Mistakes to Avoid',
  'Frames for Cross-Cultural Communication',
  'Structure for Building Communication Bridge',
  'Express Happiness in English',
  'Sound Interesting in English',
  'How to Discuss Pros & Cons',
  'Brainstorming in English',
  'English Contractions',
  'Linking Words',
  'Signposts',
  'Practice Speaking Challenges',
  'Diverse Vocabulary / Idioms / Collocations / Phrases',
  'Make Suggestions',
  'Make a Complaint and Get Results',
  "Better Ways to Say I'm Busy",
  'Power Words for Leadership',
  'Express Empathy in English',
  'Presentations in English and Public Speaking Skills',
  'Leadership Qualities',
]
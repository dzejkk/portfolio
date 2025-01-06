import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import Image from 'next/image'
import About from '@/components/about'


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />

    </main>
  )
}


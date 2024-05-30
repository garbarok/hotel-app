import { CarouselLanding as Carousel } from '@/components/carousel/Carousel'
import ScheduleDaily from '@/components/scheduleDaily/ScheduleDaily'
import WeatherCard from '@/components/weather/WeatherCard'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <WeatherCard />
        <div className="p-10">
          <Carousel />
        </div>
        <ScheduleDaily />
      </section>
    </div>
  )
}

export default HomePage

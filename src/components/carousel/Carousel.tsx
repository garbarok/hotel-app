import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

const services = [
  { src: '/images/spa.jpg', alt: 'Spa' },
  { src: '/images/pool.jpg', alt: 'Piscina' },
  { src: '/images/restaurant.jpg', alt: 'Restaurante Gourmet' },
  { src: '/images/gym.jpeg', alt: 'Gimnasio' },
  { src: '/images/luxury-room.jpeg', alt: 'Habitación de lujo' },
]

export function CarouselLanding() {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {services.map((service, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={service.src}
                    width={500}
                    height={500}
                    alt={service.alt}
                    placeholder="empty"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

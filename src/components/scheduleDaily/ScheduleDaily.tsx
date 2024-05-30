import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface ScheduleItem {
  time: string
  activity: string
  location: string
}

const dailySchedule: ScheduleItem[] = [
  {
    time: '08:00 AM',
    activity: 'Morning Yoga',
    location: 'Garden Area',
  },
  {
    time: '09:00 AM',
    activity: 'Buffet Breakfast',
    location: 'Main Restaurant',
  },
  {
    time: '11:00 AM',
    activity: 'Water Aerobics',
    location: 'Swimming Pool',
  },
  {
    time: '01:00 PM',
    activity: 'Lunch',
    location: 'Buffet Area',
  },
  {
    time: '03:00 PM',
    activity: 'Cocktail Making Class',
    location: 'Bar',
  },
  {
    time: '05:00 PM',
    activity: 'Afternoon Tea',
    location: 'Lounge',
  },
  {
    time: '07:00 PM',
    activity: 'Dinner',
    location: 'Main Restaurant',
  },
  {
    time: '09:00 PM',
    activity: 'Live Music',
    location: 'Disco',
  },
]

const ScheduleDaily: React.FC = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Daily Activities Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-gray-200">
          {dailySchedule.map((item, index) => (
            <li key={index} className="py-4 grid grid-cols-3 text-center">
              <div className="text-lg font-medium">{item.time}</div>
              <div className="text-gray-600">{item.activity}</div>
              <div className="text-gray-500">{item.location}</div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default ScheduleDaily

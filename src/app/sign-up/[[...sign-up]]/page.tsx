import { SignUp } from '@clerk/nextjs'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-semibold p-10">
        <Link href="/" className="hover:underline">
          Welcome to our Hotel
        </Link>
      </h1>
      <SignUp />
    </section>
  )
}

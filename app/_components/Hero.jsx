import React from 'react'
import Image from 'next/image'
import Footer from './footer'

function Hero() {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-extrabold sm:text-[2rem]">
            Manage your expenses&nbsp;
            <strong className="font-extrabold text-primary sm:block">
              at your fingertips.
            </strong>
          </h1>

          {/* Adding margin for space */}
          <p className="mt-6 text-2xl sm:text-xl/relaxed">
            Effortlessly track and control your finances with just a tap.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring blue:bg-red-500 sm:w-auto"
              href="/sign-in"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-orange-700 focus:outline-none focus:ring blue:text-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <Image src={'/dashboard.png'} alt='dashboard'
      width={1000}
      height={700}
      className='-mt-9 rounded-xl boarder-2'
      />
       <Footer />
    </section>
  )
}

export default Hero

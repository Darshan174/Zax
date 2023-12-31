import { Link } from "react-router-dom";

export default function Example() {

  return (
    <div className="bg-gradient-to-r from-gray-600 via-gray-200 to-gray-600 min-h-screen" >
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 lg:text-3xl leading-6 text-gray-600  ">
              Hey there!👋  Welcome to {' '}
              <a href="#" className="font-semibold text-black-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Zax! 🎉 <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
             An Ecommerce website for all your Essential Gadgets 
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Sign up or login in to save the world from E-waste 🌎!!!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/login">
              <a
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

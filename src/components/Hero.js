export default function Example({ secondsLeft, setGoing, handleCheckboxClick }) {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pb-40 lg:pt-24">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <span className="text-sm font-black"><span className="uppercase">ticket</span><span>timer</span></span>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  A Ticket Timer for Scrum Meetings
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  All we have to decide is what to do with the time that is given us. ~ J. R. R. Tolkien
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <button
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setGoing(true)}
                  >
                    Start Timer
                  </button>
                  <a href="https://github.com/thall1961/ticket-timer" className="text-sm font-semibold leading-6 text-gray-900">
                    View on GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen flex flex-col items-center justify-center">
            <h2 className="text-9xl font-bold inline">{secondsLeft}</h2>
            <span className="text-2xl">seconds left</span>
            <button className="mt-5 rounded-md bg-indigo-600 px-7 py-5 uppercase font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  onClick={handleCheckboxClick}>next ticket</button>
            <button className="mt-20 border border-indigo-900 block w-44 rounded-md text-indigo-900 w-2 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setGoing(false)}>Stop Timer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

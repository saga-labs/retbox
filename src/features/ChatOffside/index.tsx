import React from 'react';

const index = () => {
  return (
    <div className="flex flex-col flex-shrink-0 w-1/4 max-w-xs border-l border-gray-300 bg-gray-100">
      <div className="flex items-center h-16 border-b border-gray-300 px-4">
        <div className="">
          <h2 className="text-sm font-semibold leading-none">Thread</h2>
          <a className="text-xs leading-none" href="#">
            council-of-elrond
          </a>
        </div>
        <button className="flex items-center justify-center w-6 h-6 rounded hover:bg-gray-300 ml-auto">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col flex-grow overflow-auto">
        <div className="flex px-4 py-4 border-b border-gray-300">
          <div className="h-10 w-10 rounded flex-shrink-0 bg-gray-300"></div>
          <div className="ml-2">
            <div className="-mt-1">
              <span className="text-sm font-semibold">Boromim</span>
              <span className="ml-1 text-xs text-gray-500">01:26</span>
            </div>
            <p className="text-sm">Aragorn? This… is Isildur’s heir?</p>
          </div>
        </div>
        <div className="flex px-4 py-3">
          <div className="h-10 w-10 rounded flex-shrink-0 bg-gray-300"></div>
          <div className="ml-2">
            <div className="-mt-1">
              <span className="text-sm font-semibold">Legolas</span>
              <span className="ml-1 text-xs text-gray-500">01:26</span>
            </div>
            <p className="text-sm">And heir to the throne of Gondor.</p>
            <div className="flex space-x-2 mt-1">
              <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                <span>🤯</span>
                <span className="ml-1 font-medium">7</span>
              </button>
              <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                <span>🏰</span>
                <span className="ml-1 font-medium">2</span>
              </button>
              <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                <span>👑</span>
                <span className="ml-1 font-medium">3</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex px-4 py-3">
          <div className="h-10 w-10 rounded flex-shrink-0 bg-gray-300"></div>
          <div className="ml-2">
            <div className="-mt-1">
              <span className="text-sm font-semibold">Aragorn</span>
              <span className="ml-1 text-xs text-gray-500">01:26</span>
            </div>
            <p className="text-sm">Havo dad Legolas.</p>
            <div className="flex space-x-2 mt-1">
              <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                <span>❓</span>
                <span className="ml-1 font-medium">1</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex px-4 py-3">
          <div className="h-10 w-10 rounded flex-shrink-0 bg-gray-300"></div>
          <div className="ml-2">
            <div className="-mt-1">
              <span className="text-sm font-semibold">Pippin</span>
              <span className="ml-1 text-xs text-gray-500">01:26</span>
            </div>
            <p className="text-sm">Is that elvish for second breakfast?</p>
            <div className="flex space-x-2 mt-1">
              <button className="flex items-center pl-1 pr-2 h-5 bg-gray-300 hover:bg-gray-400 rounded-full text-xs">
                <span>🍳</span>
                <span className="ml-1 font-medium">3</span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 px-4 pb-3 mt-auto">
          <div className="flex flex-col items-center border-2 border-gray-300 rounded-sm p-1">
            <textarea
              className="w-full text-sm px-3 bg-transparent resize-none"
              placeholder="Reply…"
              cols={1}
              rows={1}
            ></textarea>
            <div className="flex w-full mt-2">
              <button className="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </button>
              <button className="flex-shrink flex items-center justify-center h-6 w-6 rounded ml-auto hover:bg-gray-200">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
                <span className="leading-none w-4 h-4 -mt-px">@</span>
              </button>
              <button className="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
                <svg
                  className="h-4 w-4 transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

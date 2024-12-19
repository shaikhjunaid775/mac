import React from 'react'

function HowToEarn({isOpen, setIsOpen }) {
  return (
    <div>
        {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-5 w-80 shadow-lg">
          <h2 className="text-lg font-medium mb-2">How to Earn 1 Lakh</h2>
          <img
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Instruction Image"
            className="w-full h-32 object-cover rounded mb-3"
          />
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Identify a profitable niche market.</li>
            <li>Create a detailed business plan.</li>
            <li>Invest in marketing and branding.</li>
            <li>Utilize social media platforms.</li>
            <li>Network with industry professionals.</li>
            <li>Offer value-added services or products.</li>
            <li>Keep track of financials and optimize expenses.</li>
          </ul>
          <button
            type="button"
            className="mt-4 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
      )}
    </div>
  )
}

export default HowToEarn
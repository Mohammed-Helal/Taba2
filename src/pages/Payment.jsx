import React from 'react'

function Payment() {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[90%] max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">تفاصيل الدفع</h2>
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="رقم البطاقة"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="اسم صاحب البطاقة"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            دفع الآن
          </button>
        </div>
      </div>
    </div>
  )
}

export default Payment
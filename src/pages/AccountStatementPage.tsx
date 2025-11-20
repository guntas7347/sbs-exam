import { DollarSign, Upload, FileText } from 'lucide-react';

export default function AccountStatementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Account Statement</h1>
        <p className="text-gray-600 mb-8">View your financial transactions, fees, and fines</p>

        {/* Financial Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <p className="text-gray-500 text-sm font-medium mb-2">Total Fees Due</p>
            <p className="text-3xl font-bold text-gray-800">₹54,820</p>
            <p className="text-xs text-gray-500 mt-2">Semester 5 (Jul-Dec 2025)</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
            <p className="text-gray-500 text-sm font-medium mb-2">Late Fine</p>
            <p className="text-3xl font-bold text-gray-800">₹5,000</p>
            <p className="text-xs text-gray-500 mt-2">As of Nov 20, 2025</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <p className="text-gray-500 text-sm font-medium mb-2">Paid Amount</p>
            <p className="text-3xl font-bold text-gray-800">₹44,820</p>
            <p className="text-xs text-gray-500 mt-2">Total paid in current semester</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <p className="text-gray-500 text-sm font-medium mb-2">Outstanding Balance</p>
            <p className="text-3xl font-bold text-gray-800">₹15,000</p>
            <p className="text-xs text-gray-500 mt-2">Pending to be paid</p>
          </div>
        </div>

        {/* Transaction History Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-green-500 text-white px-6 py-4">
            <h2 className="text-xl font-bold flex items-center">
              <FileText size={24} className="mr-3" />
              Transaction History
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 border-b border-gray-300">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Date</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Description</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Ref No.</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Assigned (+)</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Hostel (+)</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Fine (+)</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Scholarship (-)</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Paid (-)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Remarks</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">01.08.2025</td>
                  <td className="px-4 py-3 text-gray-800">Fee Semester-5</td>
                  <td className="px-4 py-3 text-gray-600">S5/2025</td>
                  <td className="px-4 py-3 text-center text-orange-600 font-semibold">49,820</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">Pending</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">-</td>
                  <td className="px-4 py-3 text-right text-gray-800 font-semibold">49,820</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">05.08.2025</td>
                  <td className="px-4 py-3 text-gray-800">Hostel Fee</td>
                  <td className="px-4 py-3 text-gray-600">HST/2025</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center text-green-600 font-semibold">5,000</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">Pending</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">-</td>
                  <td className="px-4 py-3 text-right text-gray-800 font-semibold">54,820</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-4 py-3 text-gray-600">20.08.2025</td>
                  <td className="px-4 py-3 text-gray-800">Fee Payment</td>
                  <td className="px-4 py-3 text-gray-600">PAY/001</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center text-green-600 font-semibold">30,000</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Paid</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">Receipt: REC-2025-001</td>
                  <td className="px-4 py-3 text-right text-gray-800 font-semibold">24,820</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">10.09.2025</td>
                  <td className="px-4 py-3 text-gray-800">Late Payment Fine</td>
                  <td className="px-4 py-3 text-gray-600">FINE/001</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center text-red-600 font-semibold">5,000</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3">
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">Applied</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">Late submission</td>
                  <td className="px-4 py-3 text-right text-gray-800 font-semibold">29,820</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-4 py-3 text-gray-600">25.09.2025</td>
                  <td className="px-4 py-3 text-gray-800">Fee Payment</td>
                  <td className="px-4 py-3 text-gray-600">PAY/002</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center text-green-600 font-semibold">14,820</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Paid</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">Receipt: REC-2025-002</td>
                  <td className="px-4 py-3 text-right text-gray-800 font-semibold">15,000</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">01.10.2025</td>
                  <td className="px-4 py-3 text-gray-800">Scholarship Disbursement</td>
                  <td className="px-4 py-3 text-gray-600">SCH/001</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3 text-center text-blue-600 font-semibold">5,000</td>
                  <td className="px-4 py-3 text-center">-</td>
                  <td className="px-4 py-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Applied</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">Merit scholarship</td>
                  <td className="px-4 py-3 text-right text-gray-800 font-semibold">10,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Add New Transaction Card */}
        <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-orange-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <DollarSign size={28} className="text-orange-500 mr-2" />
            Add New Transaction
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Select Semester Fee */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Semester Fee *</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Semester 5 (Jul-Dec 2025)</option>
                  <option>Semester 6 (Jan-Jun 2026)</option>
                  <option>Other Fees</option>
                </select>
              </div>

              {/* Hostel Room Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hostel Room Type *</label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="hostel" value="day-scholar" className="w-4 h-4 text-orange-500" />
                    <span className="ml-2 text-gray-700">Day-Scholar</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="hostel" value="single" className="w-4 h-4 text-orange-500" />
                    <span className="ml-2 text-gray-700">Single Room</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="hostel" value="double" className="w-4 h-4 text-orange-500" />
                    <span className="ml-2 text-gray-700">Double Room</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Hostel Fees */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hostel Fees (B)</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Payment Receipt Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Receipt Date *</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Late Payment Fine */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Late Payment Fine (C)</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Total Payable Fee Display */}
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total Payable Fee (A+B+C)</span>
                <span className="text-3xl font-bold text-orange-600">₹0</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Paid Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Paid Amount (₹) *</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Receipt Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Receipt No. *</label>
                <input
                  type="text"
                  placeholder="e.g., REC-2025-12345"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Receipt Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Receipt Document * (Max Size: 500KB)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 cursor-pointer">
                <Upload size={40} className="text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG, PDF (Max. 500KB)</p>
                <input type="file" className="hidden" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition">
                Submit Transaction
              </button>
              <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition">
                Clear Form
              </button>
            </div>
          </form>
        </div>

        {/* Help Text */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Instructions</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Field marked with * are mandatory</li>
            <li>• Hostel fees will be charged only if you opt for hostel accommodation</li>
            <li>• Late payment fine is automatically calculated if payment is made after the deadline</li>
            <li>• Upload clear scans/photos of your receipt document (PNG, JPG, or PDF)</li>
            <li>• Maximum file size for receipt is 500KB</li>
            <li>• All payments must be submitted within 7 days for record verification</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

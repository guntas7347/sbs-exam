import { BookOpen, Upload, Lock, CheckCircle } from 'lucide-react';

export default function ReappearPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Apply for Reappear Examinations</h1>
        <p className="text-gray-600 mb-8">Select failed exams and submit your fee receipt to apply for reappear</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reappear Exams Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-orange-500 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center">
                  <BookOpen size={24} className="mr-3" />
                  Available Reappear Exams
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b border-gray-300">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Select</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Subject</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Code</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Semester</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input type="checkbox" className="w-4 h-4 text-orange-500 rounded" />
                      </td>
                      <td className="px-6 py-4 text-gray-800">Data Structures</td>
                      <td className="px-6 py-4 text-gray-600">CS201</td>
                      <td className="px-6 py-4 text-gray-600">4</td>
                      <td className="px-6 py-4 text-gray-600">Dec 15, 2025</td>
                      <td className="px-6 py-4">
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">Failed</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input type="checkbox" className="w-4 h-4 text-orange-500 rounded" />
                      </td>
                      <td className="px-6 py-4 text-gray-800">Database Management</td>
                      <td className="px-6 py-4 text-gray-600">CS204</td>
                      <td className="px-6 py-4 text-gray-600">4</td>
                      <td className="px-6 py-4 text-gray-600">Dec 18, 2025</td>
                      <td className="px-6 py-4">
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">Failed</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input type="checkbox" className="w-4 h-4 text-orange-500 rounded" />
                      </td>
                      <td className="px-6 py-4 text-gray-800">Algorithms</td>
                      <td className="px-6 py-4 text-gray-600">CS202</td>
                      <td className="px-6 py-4 text-gray-600">4</td>
                      <td className="px-6 py-4 text-gray-600">Dec 20, 2025</td>
                      <td className="px-6 py-4">
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">Failed</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input type="checkbox" className="w-4 h-4 text-orange-500 rounded" />
                      </td>
                      <td className="px-6 py-4 text-gray-800">Web Development</td>
                      <td className="px-6 py-4 text-gray-600">CS205</td>
                      <td className="px-6 py-4 text-gray-600">5</td>
                      <td className="px-6 py-4 text-gray-600">Jan 10, 2026</td>
                      <td className="px-6 py-4">
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">Incomplete</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Fee Receipt Form */}
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500 h-fit">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <Upload size={24} className="text-green-500 mr-2" />
              Fee Receipt
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Receipt Number *</label>
                <input
                  type="text"
                  placeholder="e.g., REC-2025-12345"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reappear Fee Amount (₹) *</label>
                <input
                  type="number"
                  placeholder="2000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Date *</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Receipt Document * (Max Size: 500KB)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-green-500 cursor-pointer">
                  <Upload size={32} className="text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF (Max. 500KB)</p>
                  <input type="file" className="hidden" />
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mt-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Total Fee:</span> ₹2,000
                </p>
              </div>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition mb-2">
                Submit Application
              </button>

              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg transition flex items-center justify-center">
                <Lock size={18} className="mr-2" />
                Finalize & Lock
              </button>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                <p className="text-xs text-green-800 font-medium flex items-center">
                  <CheckCircle size={16} className="mr-2" />
                  Once locked, you cannot make changes
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Status Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8 border-l-4 border-blue-500">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Application Status</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div>
                <p className="font-semibold text-gray-800">Data Structures (CS201)</p>
                <p className="text-sm text-gray-600">Receipt: REC-2024-98765</p>
              </div>
              <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded">Confirmed</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div>
                <p className="font-semibold text-gray-800">Database Management (CS204)</p>
                <p className="text-sm text-gray-600">Pending fee submission</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { BarChart3, TrendingUp } from 'lucide-react';

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Examination Results</h1>
        <p className="text-gray-600 mb-8">View your semester-wise examination results and academic performance</p>

        {/* Semester Selection */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Semester</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Semester 5 (Current)</option>
                <option>Semester 4</option>
                <option>Semester 3</option>
                <option>Semester 2</option>
                <option>Semester 1</option>
              </select>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition">
              View Results
            </button>
          </div>
        </div>

        {/* Semester Performance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <p className="text-gray-500 text-sm font-medium mb-2">Semester SGPA</p>
            <p className="text-3xl font-bold text-gray-800">8.2</p>
            <p className="text-xs text-gray-500 mt-2">Semester 5</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <p className="text-gray-500 text-sm font-medium mb-2">Cumulative CGPA</p>
            <p className="text-3xl font-bold text-gray-800">8.45</p>
            <p className="text-xs text-gray-500 mt-2">Upto Semester 5</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <p className="text-gray-500 text-sm font-medium mb-2">Subjects Passed</p>
            <p className="text-3xl font-bold text-gray-800">6/6</p>
            <p className="text-xs text-gray-500 mt-2">Current Semester</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <p className="text-gray-500 text-sm font-medium mb-2">Total Credits Earned</p>
            <p className="text-3xl font-bold text-gray-800">96</p>
            <p className="text-xs text-gray-500 mt-2">Upto Semester 5</p>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-green-500 text-white px-6 py-4">
            <h2 className="text-xl font-bold flex items-center">
              <BarChart3 size={24} className="mr-3" />
              Semester 5 (Jul-Dec 2025) Results
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-300">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Subject</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Code</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Internal</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">External</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Total</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Credits</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Grade</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800 font-medium">Data Structures</td>
                  <td className="px-6 py-4 text-gray-600">CS501</td>
                  <td className="px-6 py-4 text-center text-gray-600">28/30</td>
                  <td className="px-6 py-4 text-center text-gray-600">68/70</td>
                  <td className="px-6 py-4 text-center font-semibold text-gray-800">96/100</td>
                  <td className="px-6 py-4 text-center text-gray-600">4</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 text-sm font-bold px-2.5 py-0.5 rounded">A+</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Pass</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800 font-medium">Web Development</td>
                  <td className="px-6 py-4 text-gray-600">CS502</td>
                  <td className="px-6 py-4 text-center text-gray-600">26/30</td>
                  <td className="px-6 py-4 text-center text-gray-600">65/70</td>
                  <td className="px-6 py-4 text-center font-semibold text-gray-800">91/100</td>
                  <td className="px-6 py-4 text-center text-gray-600">4</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 text-sm font-bold px-2.5 py-0.5 rounded">A</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Pass</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800 font-medium">Database Management</td>
                  <td className="px-6 py-4 text-gray-600">CS503</td>
                  <td className="px-6 py-4 text-center text-gray-600">25/30</td>
                  <td className="px-6 py-4 text-center text-gray-600">60/70</td>
                  <td className="px-6 py-4 text-center font-semibold text-gray-800">85/100</td>
                  <td className="px-6 py-4 text-center text-gray-600">4</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-2.5 py-0.5 rounded">A-</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Pass</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800 font-medium">Algorithms</td>
                  <td className="px-6 py-4 text-gray-600">CS504</td>
                  <td className="px-6 py-4 text-center text-gray-600">24/30</td>
                  <td className="px-6 py-4 text-center text-gray-600">62/70</td>
                  <td className="px-6 py-4 text-center font-semibold text-gray-800">86/100</td>
                  <td className="px-6 py-4 text-center text-gray-600">4</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-2.5 py-0.5 rounded">A-</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Pass</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800 font-medium">Software Engineering</td>
                  <td className="px-6 py-4 text-gray-600">CS505</td>
                  <td className="px-6 py-4 text-center text-gray-600">27/30</td>
                  <td className="px-6 py-4 text-center text-gray-600">64/70</td>
                  <td className="px-6 py-4 text-center font-semibold text-gray-800">91/100</td>
                  <td className="px-6 py-4 text-center text-gray-600">3</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 text-sm font-bold px-2.5 py-0.5 rounded">A</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Pass</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-orange-50">
                  <td className="px-6 py-4 text-gray-800 font-medium">Machine Learning</td>
                  <td className="px-6 py-4 text-gray-600">CS506</td>
                  <td className="px-6 py-4 text-center text-gray-600">23/30</td>
                  <td className="px-6 py-4 text-center text-gray-600">58/70</td>
                  <td className="px-6 py-4 text-center font-semibold text-gray-800">81/100</td>
                  <td className="px-6 py-4 text-center text-gray-600">4</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-bold px-2.5 py-0.5 rounded">B+</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Pass</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester Wise Performance */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <TrendingUp size={24} className="text-green-500 mr-3" />
            Semester-wise Performance Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 border-b border-gray-300">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Semester</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">SGPA</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">CGPA</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Credits Earned</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Total Credits</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800 font-medium">Semester 1</td>
                  <td className="px-4 py-3 text-center text-gray-600">7.8</td>
                  <td className="px-4 py-3 text-center text-gray-600">7.8</td>
                  <td className="px-4 py-3 text-center text-gray-600">16</td>
                  <td className="px-4 py-3 text-center text-gray-600">16</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Pass</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800 font-medium">Semester 2</td>
                  <td className="px-4 py-3 text-center text-gray-600">8.1</td>
                  <td className="px-4 py-3 text-center text-gray-600">7.95</td>
                  <td className="px-4 py-3 text-center text-gray-600">16</td>
                  <td className="px-4 py-3 text-center text-gray-600">32</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Pass</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800 font-medium">Semester 3</td>
                  <td className="px-4 py-3 text-center text-gray-600">8.5</td>
                  <td className="px-4 py-3 text-center text-gray-600">8.13</td>
                  <td className="px-4 py-3 text-center text-gray-600">16</td>
                  <td className="px-4 py-3 text-center text-gray-600">48</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Pass</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800 font-medium">Semester 4</td>
                  <td className="px-4 py-3 text-center text-gray-600">8.6</td>
                  <td className="px-4 py-3 text-center text-gray-600">8.26</td>
                  <td className="px-4 py-3 text-center text-gray-600">24</td>
                  <td className="px-4 py-3 text-center text-gray-600">72</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Pass</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 bg-orange-50">
                  <td className="px-4 py-3 text-gray-800 font-medium font-bold">Semester 5</td>
                  <td className="px-4 py-3 text-center text-gray-600 font-bold">8.2</td>
                  <td className="px-4 py-3 text-center text-gray-600 font-bold">8.45</td>
                  <td className="px-4 py-3 text-center text-gray-600 font-bold">23</td>
                  <td className="px-4 py-3 text-center text-gray-600 font-bold">95</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Pass</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

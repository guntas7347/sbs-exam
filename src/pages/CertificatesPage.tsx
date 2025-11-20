import { Award, Download, FileText, Clock, CheckCircle } from 'lucide-react';

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Certificates</h1>
        <p className="text-gray-600 mb-8">Request and download your certificates from here</p>

        {/* Available Certificates */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bonafide Certificate */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
              <div className="flex items-center justify-between mb-4">
                <Award size={32} className="text-orange-500" />
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Available</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Bonafide Certificate</h3>
              <p className="text-gray-600 text-sm mb-4">
                Certificate of enrollment proving your current student status
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition">
                Request Certificate
              </button>
            </div>

            {/* Provisional Certificate */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <FileText size={32} className="text-green-500" />
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Available</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Provisional Certificate</h3>
              <p className="text-gray-600 text-sm mb-4">
                Certificate issued upon completion of all academic requirements
              </p>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition">
                Request Certificate
              </button>
            </div>

            {/* Degree Certificate */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
              <div className="flex items-center justify-between mb-4">
                <Award size={32} className="text-blue-500" />
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">Not Eligible</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Degree Certificate</h3>
              <p className="text-gray-600 text-sm mb-4">
                Official degree certificate issued after graduation
              </p>
              <button className="w-full bg-gray-300 text-gray-600 font-semibold py-2 rounded-lg cursor-not-allowed" disabled>
                Not Eligible Yet
              </button>
            </div>

            {/* Migration Certificate */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <FileText size={32} className="text-purple-500" />
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Available</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Migration Certificate</h3>
              <p className="text-gray-600 text-sm mb-4">
                Certificate required for admission to higher education
              </p>
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition">
                Request Certificate
              </button>
            </div>

            {/* Character Certificate */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-500">
              <div className="flex items-center justify-between mb-4">
                <Award size={32} className="text-red-500" />
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Available</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Character Certificate</h3>
              <p className="text-gray-600 text-sm mb-4">
                Certificate of good character issued by the institution
              </p>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition">
                Request Certificate
              </button>
            </div>

            {/* Internship Certificate */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-500">
              <div className="flex items-center justify-between mb-4">
                <FileText size={32} className="text-indigo-500" />
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">Under Review</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Internship Certificate</h3>
              <p className="text-gray-600 text-sm mb-4">
                Certificate for completed internship programs
              </p>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition">
                View Status
              </button>
            </div>
          </div>
        </div>

        {/* Recently Requested Certificates */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-500 text-white px-6 py-4">
            <h2 className="text-xl font-bold flex items-center">
              <Clock size={24} className="mr-3" />
              Recently Requested Certificates
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-300">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Certificate Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Request Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Purpose</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800 font-medium">Bonafide Certificate</td>
                  <td className="px-6 py-4 text-gray-600">Nov 10, 2025</td>
                  <td className="px-6 py-4 text-gray-600">Bank Loan Application</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center justify-center">
                      <CheckCircle size={14} className="mr-1" />
                      Approved
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-green-600 hover:text-green-800 font-semibold flex items-center justify-center">
                      <Download size={18} className="mr-1" />
                      Download
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800 font-medium">Provisional Certificate</td>
                  <td className="px-6 py-4 text-gray-600">Nov 8, 2025</td>
                  <td className="px-6 py-4 text-gray-600">Higher Studies Admission</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center justify-center">
                      <Clock size={14} className="mr-1" />
                      Ready
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center justify-center">
                      <Download size={18} className="mr-1" />
                      Download
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800 font-medium">Character Certificate</td>
                  <td className="px-6 py-4 text-gray-600">Nov 5, 2025</td>
                  <td className="px-6 py-4 text-gray-600">Visa Application</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center justify-center">
                      <Clock size={14} className="mr-1" />
                      Processing
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-400 font-semibold cursor-not-allowed" disabled>
                      Pending
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800 font-medium">Migration Certificate</td>
                  <td className="px-6 py-4 text-gray-600">Oct 28, 2025</td>
                  <td className="px-6 py-4 text-gray-600">SBSSU Admission</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center justify-center">
                      <CheckCircle size={14} className="mr-1" />
                      Approved
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-green-600 hover:text-green-800 font-semibold flex items-center justify-center">
                      <Download size={18} className="mr-1" />
                      Download
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Information Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Processing Information</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Bonafide and Character certificates are typically issued within 3-5 working days</li>
            <li>• Provisional Certificate is issued after completion of all academic requirements</li>
            <li>• Degree Certificate is issued after graduation and convocation</li>
            <li>• Digital copies will be sent to your registered email address</li>
            <li>• For physical copies, collect from the Registrar's office</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

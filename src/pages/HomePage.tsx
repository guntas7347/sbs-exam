import { Link } from 'react-router-dom';
import { BookOpen, FileText, Award, DollarSign, Bell, Calendar } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold mb-2">Welcome Back, Rahul Kumar!</h1>
          <p className="text-lg text-orange-100">Enrollment: ENR-2021-00142 | B.Tech Computer Science</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Semester</p>
                <p className="text-3xl font-bold text-gray-800">5</p>
              </div>
              <BookOpen size={32} className="text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">CGPA</p>
                <p className="text-3xl font-bold text-gray-800">8.45</p>
              </div>
              <Award size={32} className="text-orange-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Pending Fees</p>
                <p className="text-3xl font-bold text-gray-800">₹5,000</p>
              </div>
              <DollarSign size={32} className="text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Late Fine</p>
                <p className="text-3xl font-bold text-gray-800">₹500</p>
              </div>
              <Bell size={32} className="text-red-500" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/reappear"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-orange-500"
            >
              <BookOpen size={32} className="text-orange-500 mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Apply for Reappear</h3>
              <p className="text-gray-600 text-sm">Apply for reappear exams and submit fee receipts</p>
            </Link>

            <Link
              to="/results"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-green-500"
            >
              <FileText size={32} className="text-green-500 mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">View Results</h3>
              <p className="text-gray-600 text-sm">Check your semester-wise examination results</p>
            </Link>

            <Link
              to="/certificates"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-t-4 border-blue-500"
            >
              <Award size={32} className="text-blue-500 mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Certificates</h3>
              <p className="text-gray-600 text-sm">Request and download your certificates</p>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link
            to="/account-statement"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-purple-500"
          >
            <DollarSign size={32} className="text-purple-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Account Statement</h3>
            <p className="text-gray-600 text-sm">View and manage your financial transactions and fees</p>
          </Link>

          <Link
            to="/profile"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-indigo-500"
          >
            <BookOpen size={32} className="text-indigo-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">My Profile</h3>
            <p className="text-gray-600 text-sm">View and update your personal information</p>
          </Link>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <Bell size={24} className="text-orange-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <p className="font-semibold text-gray-800">Semester 5 Examinations Scheduled</p>
              <p className="text-gray-600 text-sm">Examinations are scheduled from Dec 10, 2025 to Dec 28, 2025</p>
              <p className="text-gray-400 text-xs mt-1">Posted: Nov 15, 2025</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <p className="font-semibold text-gray-800">Fee Submission Deadline Extended</p>
              <p className="text-gray-600 text-sm">Late fine will be applicable after Dec 5, 2025</p>
              <p className="text-gray-400 text-xs mt-1">Posted: Nov 10, 2025</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="font-semibold text-gray-800">Hostel Registration Opens</p>
              <p className="text-gray-600 text-sm">Hostel allocation for next academic year now open</p>
              <p className="text-gray-400 text-xs mt-1">Posted: Nov 8, 2025</p>
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <Calendar size={24} className="text-green-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Important Dates</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <span className="text-gray-700">Fee Submission Deadline</span>
              <span className="font-semibold text-orange-600">Dec 5, 2025</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <span className="text-gray-700">Exam Commencement</span>
              <span className="font-semibold text-blue-600">Dec 10, 2025</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <span className="text-gray-700">Result Publication</span>
              <span className="font-semibold text-green-600">Jan 15, 2026</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-700">Next Semester Registration</span>
              <span className="font-semibold text-purple-600">Jan 20, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

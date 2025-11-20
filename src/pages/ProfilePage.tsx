import { User, Mail, Calendar, BookOpen } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>

        {/* Student ID Card */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg p-8 mb-12 text-white">
          <div className="flex items-center space-x-8">
            <div className="w-32 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <User size={64} className="text-gray-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-1">Rahul Kumar</h2>
              <p className="text-green-100 mb-6">B.Tech Computer Science</p>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-green-100">Enrollment Number</p>
                  <p className="font-semibold text-lg">ENR-2021-00142</p>
                </div>
                <div>
                  <p className="text-green-100">Current Semester</p>
                  <p className="font-semibold text-lg">5</p>
                </div>
                <div>
                  <p className="text-green-100">Admission Date</p>
                  <p className="font-semibold text-lg">Aug 15, 2021</p>
                </div>
                <div>
                  <p className="text-green-100">CGPA</p>
                  <p className="font-semibold text-lg">8.45</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Forms Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editable Data */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-orange-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Mail size={24} className="text-orange-500 mr-2" />
              Editable Data
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="rahul.kumar@SBSSU.edu"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+91-9876543210"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  defaultValue="123 Main Street"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  defaultValue="New Delhi"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    defaultValue="Delhi"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    defaultValue="110001"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact Number
                </label>
                <input
                  type="tel"
                  defaultValue="+91-9876543211"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition">
                Save Changes
              </button>
            </form>
          </div>

          {/* One-Time Data */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-green-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Calendar size={24} className="text-green-500 mr-2" />
              One-Time Data
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  defaultValue="1999-05-20"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blood Group
                </label>
                <input
                  type="text"
                  defaultValue="O+"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Father's Name
                </label>
                <input
                  type="text"
                  defaultValue="Arun Kumar"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mother's Name
                </label>
                <input
                  type="text"
                  defaultValue="Anjali Kumar"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>General</option>
                  <option>OBC</option>
                  <option>SC</option>
                  <option>ST</option>
                </select>
              </div>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition">
                Save Changes
              </button>
            </form>
          </div>
        </div>

        {/* Official Data (Read-Only) */}
        <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-blue-500 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <BookOpen size={24} className="text-blue-500 mr-2" />
            Official Data (Read-Only)
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Enrollment Number
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  ENR-2021-00142
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Program
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  Bachelor of Technology
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">Branch</p>
                <p className="text-lg font-semibold text-gray-800">
                  Computer Science
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Admission Date
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  August 15, 2021
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Current Semester
                </p>
                <p className="text-lg font-semibold text-gray-800">5</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Student Status
                </p>
                <p className="text-lg font-semibold text-green-600">Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

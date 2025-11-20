import { Link } from "react-router-dom";
import { Menu, LogOut, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b-4 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
              SBS
            </div>
            <span className="text-xl font-bold text-gray-800">
              Student Portal
            </span>
          </Link>

          <div className={`hidden md:flex space-x-1`}>
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
            >
              Home
            </Link>
            <Link
              to="/profile"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
            >
              Profile
            </Link>
            <Link
              to="/reappear"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
            >
              Reappear
            </Link>
            <Link
              to="/results"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
            >
              Results
            </Link>
            <Link
              to="/certificates"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
            >
              Certificates
            </Link>
            <Link
              to="/account-statement"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
            >
              Account
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-gray-700">
              <User size={18} className="text-orange-500" />
              <span className="text-sm font-medium">Rahul Kumar</span>
            </div>

            <button className="p-2 rounded-full hover:bg-orange-100 text-orange-600">
              <LogOut size={20} />
            </button>

            <button
              onClick={() => setMenu(!menu)}
              className="md:hidden p-2 text-gray-600"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${menu ? "block" : "hidden"} bg-white border-t`}
      >
        <Link
          to="/"
          className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
        >
          Home
        </Link>
        <Link
          to="/profile"
          className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
        >
          Profile
        </Link>
        <Link
          to="/reappear"
          className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
        >
          Reappear
        </Link>
        <Link
          to="/results"
          className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
        >
          Results
        </Link>
        <Link
          to="/certificates"
          className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
        >
          Certificates
        </Link>
        <Link
          to="/account-statement"
          className="block px-4 py-2 text-gray-700 hover:bg-orange-50"
        >
          Account
        </Link>
      </div>
    </nav>
  );
}

import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const LoginBox = ({ onStateChange }) => {
  const { username, logout } = useContext(UserContext);

  const handleAuthOpen = (type) => {
    onStateChange(true, type);
  };

  const handleLogout = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
      background: "#1e293b",
      color: "#f8fafc"
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        MySwal.fire({
          title: "Logged out",
          text: "You have successfully logged out.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          background: "#1e293b",
          color: "#f8fafc"
        });
      }
    });
  };

  return (
    <div className="flex justify-end mb-6 relative z-50">
      {username ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
            <span className="text-slate-300 mr-2">Welcome,</span>
            <span className="font-medium text-blue-400">{username}</span>
            <div className="ml-2 w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:brightness-110 flex items-center gap-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <button
            onClick={() => handleAuthOpen("login")}
            className="relative overflow-hidden group bg-gradient-to-br from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            <span className="z-10 font-medium">Login</span>
          </button>

          <button
            onClick={() => handleAuthOpen("signup")}
            className="relative overflow-hidden group bg-gradient-to-br from-slate-700 to-slate-800 text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            <span className="z-10 font-medium">Sign Up</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginBox;
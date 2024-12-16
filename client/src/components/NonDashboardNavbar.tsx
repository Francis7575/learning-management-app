import { BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

const NonDashboardNavbar = () => {
  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar-container">
        <Link href="/" className="nondashboard-navbar-brand">
          Home
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Link href="/search" className="nondashboard-navbar-search-input">
              <span className="hidden sm:inline">Search courses</span>
              <span className="sm:hidden">Search</span>
            </Link>
            <BookOpen className="nondashboard-navbar-search-icon" size={18} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NonDashboardNavbar;

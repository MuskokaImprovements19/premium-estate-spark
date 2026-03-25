import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.svg";

const services = [
  { name: "General Contracting", path: "/services/general-contracting" },
  { name: "Deck Building", path: "/services/deck-building" },
  { name: "Dock Building", path: "/services/dock-building" },
  { name: "Cottage Renovations", path: "/services/cottage-renovations" },
  { name: "Weekly Garbage", path: "/services/weekly-garbage" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = services.some((s) => location.pathname === s.path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 section-padding">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://muskokaimprovements.ca/wp-content/uploads/2024/01/cropped-MI-Icon.png"
            alt="Muskoka Improvements"
            className="h-10 w-10"
          />
          <span className="font-serif text-xl font-bold tracking-tight text-foreground hidden sm:block">
            Muskoka<span className="text-primary"> Improvements</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${isServiceActive ? "text-primary" : "text-muted-foreground"}`}
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                >
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="block px-5 py-3 text-sm text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/property-management"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${isActive("/property-management") ? "text-primary" : "text-muted-foreground"}`}
          >
            Property Management
          </Link>
          <Link
            to="/projects"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${isActive("/projects") ? "text-primary" : "text-muted-foreground"}`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold tracking-wide uppercase px-6 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="section-padding py-6 flex flex-col gap-4">
              <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm font-medium uppercase text-foreground hover:text-primary">Home</Link>
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Services</p>
                {services.map((s) => (
                  <Link key={s.path} to={s.path} onClick={() => setMobileOpen(false)} className="block py-2 pl-4 text-sm text-secondary-foreground hover:text-primary">
                    {s.name}
                  </Link>
                ))}
              </div>
              <Link to="/property-management" onClick={() => setMobileOpen(false)} className="text-sm font-medium uppercase text-foreground hover:text-primary">Property Management</Link>
              <Link to="/projects" onClick={() => setMobileOpen(false)} className="text-sm font-medium uppercase text-foreground hover:text-primary">Projects</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-sm font-semibold uppercase px-6 py-2.5 bg-primary text-primary-foreground rounded-md text-center hover:bg-primary/90">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

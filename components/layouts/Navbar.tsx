import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import ThemeSwitch from "../ui-ux/ThemeSwitch";

interface Props {
  className: string;
}

const Navbar = ({ className }: Props) => {
  return (
    <div className={`navbar ${className}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/daisyui">DaisyUI</Link>
            </li>
            <li>
              <Link href="/template">Template</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/users">Clients</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Moose UI
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>{/* <Link href="/">Home</Link> */}</li>
          <li>{/* <Link href="/daisyui">DaisyUI Demo</Link> */}</li>
          <li>{/* <Link href="/template">Page Template</Link> */}</li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/users">Clients</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/demo" className="btn btn-primary">
          Tailwind Demo
        </Link>
        {/* <ThemeSwitch /> */}
      </div>
    </div>
  );
};

export default Navbar;

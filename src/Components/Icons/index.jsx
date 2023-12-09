import { useState } from "react";

function CustomIcon({ onClick, color = "currentColor", className, children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      className={`${className} w-6 h-6 transition duration-300 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </svg>
  );
}
/* export function Test({ onClick }) {
  return (
    <CustomIcon
      onClick={onClick}
      color="currentColor"
      hoverColor="red"
      hoverBackground="blue-500"
      className="hover:text-blue-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </CustomIcon>
  );
} */

export function IconCheck({ onClick }) {
  return (
    <CustomIcon
      onClick={onClick}
      color="currentColor"
      hoverColor="red"
      hoverBackground="blue-500"
      className="hover:text-blue-400"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </CustomIcon>
  );
}
export function IconLogOut({ onClick }) {
  return (
    <CustomIcon
      onClick={onClick}
      color="currentColor"
      hoverColor="red"
      hoverBackground="blue-500"
      className="hover:text-blue-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      />
    </CustomIcon>
  );
}
export function IconAdd({ onClick }) {
  return (
    <CustomIcon
      onClick={onClick}
      color="currentColor"
      hoverColor="red"
      hoverBackground="blue-500"
      className="hover:text-blue-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
      />
    </CustomIcon>
  );
}

export function IconPlusCircle({ onClick }) {
  return (
    <CustomIcon
      onClick={onClick}
      color="currentColor"
      hoverColor="red"
      hoverBackground="blue-500"
      className="hover:rotate-90"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </CustomIcon>
  );
}

export function IconMagniFyingGlass({ onClick }) {
  return (
    <CustomIcon
      onClick={onClick}
      color="currentColor"
      hoverColor="red"
      hoverBackground="blue-500"
      className="hover:rotate-90"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </CustomIcon>
  );
}

export function IconChevronDown({ onClick }) {
  const [open, setOpen] = useState(false);

  return (
    <CustomIcon
      onClick={() => {
        setOpen(!open);
        onClick();
      }}
      color="currentColor"
      hoverColor="red"
      hoverBackground="blue-500"
      className={open ? "rotate-180" : ""}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </CustomIcon>
  );
}

export function IconTrash({ onClick }) {
  return (
    <CustomIcon
      onClick={onClick}
      color="currentColor"
      hoverColor="red"
      hoverBackground="blue-500"
      className="hover:text-red-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </CustomIcon>
  );
}
export function IconEdit({ onClick }) {
  return (
    <CustomIcon
      onClick={onClick}
      color="currentColor"
      hoverColor="red"
      hoverBackground="blue-500"
      className="hover:text-blue-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </CustomIcon>
  );
}

export function Icon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  const icons = {
    arch: <path d="M5 19c0-5 3-10 7-14 4 4 7 9 7 14M8 19h8M12 5v14" />,
    foundation: <><path d="M4 10h16" /><path d="M6 10V6h12v4" /><path d="M8 10v8M12 10v8M16 10v8" /></>,
    truck: <><path d="M3 7h10v8H3z" /><path d="M13 10h4l3 3v2h-7z" /><circle cx="7" cy="18" r="1.5" /><circle cx="18" cy="18" r="1.5" /></>,
    pick: <><path d="M12 3l3 3" /><path d="M6 9c2-3 10-3 12 0" /><path d="M12 6v15" /></>,
    tools: <><path d="M5 4l4 4" /><path d="M4 9l5-5" /><path d="M14 4l6 6" /><path d="M16 2l6 6" /><path d="M12 12l8 8" /></>,
    speed: <><path d="M5 16a7 7 0 1 1 14 0" /><path d="M12 12l4-3" /><path d="M12 16h.01" /></>,
    shield: <><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" /><path d="M10 12l2 2 3-4" /></>,
    people: <><path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /><path d="M3 19c0-2.5 2.5-4 5-4s5 1.5 5 4" /><path d="M14 18c.4-1.8 2.1-3 4-3 1.5 0 2.8.5 3.8 1.6" /></>,
    crusher: <><path d="M6 5h12" /><path d="M8 5l2 5-4 5" /><path d="M16 5l-2 5 4 5" /><path d="M5 19h14" /></>,
    seal: <><path d="M12 3l2.3 2.2 3.2-.5.5 3.2L21 10l-2 2 1 3-3.2.5-.5 3.2-3-1.5-3 1.5-.5-3.2L6 15l1-3-2-2 3-2 .5-3.1 3.2.4L12 3z" /><path d="M9.5 12l1.7 1.7 3.3-3.7" /></>,
    gavel: <><path d="M14 5l5 5" /><path d="M11 8l5 5" /><path d="M7 12l5 5" /><path d="M4 20h10" /></>,
    leaf: <><path d="M18 4c-6 1-10 5-12 12 5 2 12-3 12-12z" /><path d="M8 16c2-2 5-5 8-7" /></>,
    rocket: <><path d="M13 5c3 1 5 4 6 7-3 1-6 3-7 6-3-1-5-4-6-7 3-1 5-3 7-6z" /><path d="M9 15l-2 5 5-2" /></>,
    vision: <><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" /><circle cx="12" cy="12" r="2.5" /></>,
    spark: <><path d="M12 3l1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3z" /><path d="M18 15l.7 2.3L21 18l-2.3.7L18 21l-.7-2.3L15 18l2.3-.7L18 15z" /></>,
    blast: <path d="M12 3l2 5 5 1-3.5 3.5 1 5-4.5-2.6L7.5 18l1-5L5 9l5-1 2-5z" />,
    cut: <><circle cx="6" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><path d="M20 4L8 16" /><path d="M20 20L11 11" /></>,
    flask: <><path d="M10 3v5l-4.5 8A3 3 0 0 0 8.1 21h7.8a3 3 0 0 0 2.6-5L14 8V3" /><path d="M9 13h6" /></>,
    hammer: <><path d="M14 5l5 5" /><path d="M12 7l-7 7" /><path d="M5 14l5 5" /></>,
    split: <><path d="M12 3v18" /><path d="M8 6L4 10l4 4" /><path d="M16 6l4 4-4 4" /></>,
    grid: <><path d="M4 4h16v16H4z" /><path d="M4 10h16M10 4v16M16 4v16" /></>,
    bolt: <path d="M13 2L6 13h5l-1 9 8-12h-5l0-8z" />,
    drop: <path d="M12 3c3.5 5 5 7.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-5 5-10z" />,
    location: <><path d="M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11z" /><circle cx="12" cy="10" r="2" /></>,
    call: <path d="M5 4h4l2 5-2 2a16 16 0 0 0 4 4l2-2 5 2v4c-8.5 1-16-6.5-15-15z" />,
    mail: <><path d="M3 6h18v12H3z" /><path d="M3 8l9 6 9-6" /></>,
    chat: <><path d="M4 5h16v10H8l-4 4z" /><path d="M8 9h8M8 12h5" /></>,
    arrow: <><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></>,
    linkedin: <><path d="M7 9v8" /><path d="M7 5h.01" /><path d="M12 9v8" /><path d="M12 12a3 3 0 0 1 6 0v5" /></>,
    instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><path d="M17 7h.01" /></>
  ,
    youtube: <><rect x="3" y="6" width="18" height="12" rx="3" /><path d="M10 9.5l5 2.5-5 2.5z" /></> };

  return <svg aria-hidden="true" {...common}>{icons[name] ?? icons.arch}</svg>;
}






interface SetInputs {
  children: React.ReactNode;
  sidebarWidth: number;
}

export function Sidebar({ children, sidebarWidth }: SetInputs) {
  return (
    // Width of sidebar is updated here when we click Burger icon to open/close the sidebar
    <aside className='sidebar' style={{ width: `${sidebarWidth}rem` }}>
      {children}
    </aside>
  );
}

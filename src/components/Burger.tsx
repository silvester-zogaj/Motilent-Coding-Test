interface SidebarProps {
  sidebarWidth: number;
  setSidebarWidth: React.Dispatch<React.SetStateAction<number>>;
  setDisplayInputs: React.Dispatch<React.SetStateAction<string>>;
}

export function Burger({ sidebarWidth, setSidebarWidth, setDisplayInputs }: SidebarProps) {
  const handleClick = () => {
    const sidebarWidthValues = { open: 18, close: 2 };

    // Check if current sidebar width matches open state and if so close sidebar and remove input fields, otherwise open it and display input fields.
    if (sidebarWidth === sidebarWidthValues.open) {
      setSidebarWidth(sidebarWidthValues.close);
      setDisplayInputs('none');
    } else {
      setSidebarWidth(sidebarWidthValues.open);
      setDisplayInputs('block');
    }
  };

  return (
    <svg
      className='Icon'
      viewBox='0 0 100 80'
      width='20'
      height='20'
      onClick={handleClick}
      data-testid='burger'
    >
      <rect width='100' height='20'></rect>
      <rect y='30' width='100' height='20'></rect>
      <rect y='60' width='100' height='20'></rect>
    </svg>
  );
}

import { useState } from 'react';
import './App.scss';
import { GridContainer } from './components/GridContainer';
import { Sidebar } from './components/Sidebar';
import { InputFields } from './components/InputFields';
import { Burger } from './icons';

export function App() {
  // Rows and columns to be updated based on input.
  const [rowsInput, setRowsInput] = useState<number>(1);
  const [columnsInput, setColumnsInput] = useState<number>(1);

  // Width of sidebar to be updated on close/open
  const [sidebarWidth, setSidebarWidth] = useState<number>(18);

  // toggle
  const [displayInputs, setDisplayInputs] = useState<string>('block');

  return (
    <>
      <Sidebar sidebarWidth={sidebarWidth}>
        <Burger
          sidebarWidth={sidebarWidth}
          setSidebarWidth={setSidebarWidth}
          setDisplayInputs={setDisplayInputs}
        />
        <InputFields
          rowsInput={rowsInput}
          columnsInput={columnsInput}
          setRowsInput={setRowsInput}
          setColumnsInput={setColumnsInput}
          displayInputs={displayInputs}
        />
      </Sidebar>
      <GridContainer
        rowsInput={rowsInput}
        columnsInput={columnsInput}
        sidebarWidth={sidebarWidth}
      />
    </>
  );
}

interface SetInputs {
  rowsInput: number;
  columnsInput: number;
  setRowsInput: React.Dispatch<React.SetStateAction<number>>;
  setColumnsInput: React.Dispatch<React.SetStateAction<number>>;
  displayInputs: string;
}

export function InputFields({
  rowsInput,
  columnsInput,
  setRowsInput,
  setColumnsInput,
  displayInputs,
}: SetInputs) {
  // Handlers for rows and columns input fields
  const rowsHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsInput(Number(event.target.value));
  };
  const columnsHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColumnsInput(Number(event.target.value));
  };
  return (
    <section className='input-section' style={{ display: `${displayInputs}` }}>
      <label className='input-field'>
        Rows <br></br>
        <input type='number' onChange={rowsHandleChange} value={rowsInput} min={1} max={10} />
      </label>
      <label className='input-field'>
        Columns <br></br>
        <input
          type='number'
          onChange={columnsHandleChange}
          value={columnsInput}
          min={1}
          max={10}
        />
      </label>
    </section>
  );
}

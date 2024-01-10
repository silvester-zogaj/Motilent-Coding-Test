import { GridItem } from './GridItem';

interface Inputs {
  rowsInput: number;
  columnsInput: number;
  sidebarWidth: number;
}

export function GridContainer({ rowsInput, columnsInput, sidebarWidth }: Inputs) {
  const styles = {
    gridContainer: { gap: 5 },
    gridItem: { borderWidth: 1 },
  };

  // Calculating num of viewports to display in grid
  const totalViewports = rowsInput * columnsInput;
  const totalViewportsArr: number[] = [];

  for (let i = 0; i < totalViewports; i++) {
    totalViewportsArr.push(i);
  }

  // Mapping over amount of viewpoints in array to display in grid
  return (
    <main
      className='grid-container'
      style={{
        gridTemplateRows: `repeat(${rowsInput}, 1fr)`,
        gridTemplateColumns: `repeat(${columnsInput}, 1fr)`,
        width: `calc(100% - ${sidebarWidth}rem`,
        marginLeft: `${sidebarWidth}rem`,
        gap: `${styles.gridContainer.gap}px`,
      }}
      data-testid='grid-container'
    >
      {totalViewportsArr.map((item) => {
        return (
          <GridItem
            key={item}
            rowsInput={rowsInput}
            columnsInput={columnsInput}
            sidebarWidth={sidebarWidth}
            styles={styles}
          />
        );
      })}
    </main>
  );
}

import { useState } from 'react';
import { useLayoutEffect } from 'react';

interface Inputs {
  rowsInput: number;
  columnsInput: number;
  sidebarWidth: number;
  styles: {
    gridContainer: { gap: number };
    gridItem: { borderWidth: number };
  };
}

export function GridItem({ rowsInput, columnsInput, sidebarWidth, styles }: Inputs) {
  const [viewportSize, setViewportSize] = useState<number[]>([]);

  // Viewport calculations
  // (innerwidth of window - sidebar width converted into pixels - (grid gap size * gaps created per column )) / columns inputted
  const viewportWidth = Math.floor(
    (window.innerWidth - sidebarWidth * 16 - styles.gridContainer.gap * (columnsInput - 1)) /
      columnsInput
  );

  // (innerheight of window - (grid gap size * gaps created per row ) / rows inputted
  const viewportHeight = Math.floor(
    (window.innerHeight - styles.gridContainer.gap * (rowsInput - 1)) / rowsInput
  );

  // Viewport numbers will be updated whenever window is resized.

  useLayoutEffect(() => {
    const handleResize = () => {
      setViewportSize([viewportWidth, viewportHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className='grid-item'
      style={{ borderWidth: `${styles.gridItem.borderWidth}px` }}
      data-testid='grid-item'
    >
      <div className='grid-item__text'>
        <p>{viewportWidth}</p>
        <p>x</p>
        <p>{viewportHeight}</p>
      </div>
    </div>
  );
}

/**
 * The hexadecimal color meant to be opacity reduced
 * @param hex
 * The opacity value ranges from 0 - 1
 * @param opacity
 *
 * Reference to original function:
 * https://www.geeksforgeeks.org/how-to-convert-hex-to-rgba-value-using-javascript/
 */

export const rgba = (hex: string, opacity: number): string => {
  const hexRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let colorDecimal: any;
  // If the hex value is valid.
  if (hexRegex.test(hex)) {
    // Getting the content after '#',
    // eg. 'ffffff' in case of '#ffffff'
    // Splitting each character
    colorDecimal = hex.slice(1).split("");
    // Checking if the length is 3
    // then make that 6
    if (colorDecimal.length == 3) {
      const ar = [];
      ar.push(colorDecimal[0]);
      ar.push(colorDecimal[0]);
      ar.push(colorDecimal[1]);
      ar.push(colorDecimal[1]);
      ar.push(colorDecimal[2]);
      ar.push(colorDecimal[2]);
      colorDecimal = ar;
    }

    // Starts with '0x'(in hexadecimal)
    colorDecimal = "0x" + colorDecimal.join("");
    // Converting the first 2 characters
    // from hexadecimal to r value
    const r = (colorDecimal >> 16) & 255;

    // Converting the second 2 characters
    // to hexadecimal to g value
    const g = (colorDecimal >> 8) & 255;

    // Converting the last 2 characters
    // to hexadecimal to b value
    const b = colorDecimal & 255;

    // Appending all of them to make
    // the RGBA value
    return `rgba(${[r, g, b].join(",")}, ${opacity})`;
  }
  return "";
};

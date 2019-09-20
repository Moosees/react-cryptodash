const theme = 'dark';
//const theme = 'light';
export const themeLight = theme === 'light';

export const color1 = themeLight ? '#fff' : '#061a44';
export const color2 = themeLight ? '#fff' : '#010e2c';
export const color3 = themeLight ? '#09f010' : '#42ff3a';

if (themeLight) {
  document.body.style.background = '#e1eaee';
  document.body.style.color = '#061a44';
}

export const background1 = `background-color: ${color1}`;
export const background2 = `background-color: ${color2};`;
export const background3 = `background-color: ${color3};`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: #fff`;

export const boxShadowLight = `box-shadow: 0px 0px 5px 1px ${
  themeLight ? '#a9b6ff' : '#121d5b'
}`;
export const boxShadowGreen = `box-shadow: 0px 0px 4px 2px #5fff17`;
export const boxShadowRed = `box-shadow: 0px 0px 2px 2px #e41111`;

export const fontSizeL = 'font-size: 2em';
export const fontSizeM = 'font-size: 1.5em;';
export const fontSizeS = 'font-size: 1.0em';
export const fontSizeXS = 'font-size: .75em';

export const textAlignCenter = 'text-align: center;';

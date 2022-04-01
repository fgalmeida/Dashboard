interface Breakpoints {
  [key: string]: string;
}

const breakpoints: Breakpoints = {
  smM: '305px',
  smP: '372px',
  smG: '400px',
  smGG: '440px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  lgx: '1330px',
  xl: '1920px',
};

const sizes = {
  up(size: string) {
    return `@media only screen and (min-width: ${breakpoints[size]})`;
  },
  down(size: string) {
    return `@media only screen and (max-width: ${breakpoints[size]})`;
  },
};

export default sizes;

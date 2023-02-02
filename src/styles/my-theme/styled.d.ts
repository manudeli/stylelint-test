import {} from 'styled-components/cssprop';

// import original module declarations
import 'styled-components';
import { MyTheme } from '.';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}

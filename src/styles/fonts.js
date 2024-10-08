import { css } from 'styled-components';
import PoppinsSemiBold from '../fonts/Poppins/Poppins-SemiBold.ttf';
import JostRegular from '../fonts/Jost/static/Jost-Regular.ttf';
import JostBold from '../fonts/Jost/static/Jost-Bold.ttf';
import JostExtraBold from '../fonts/Jost/static/Jost-ExtraBold.ttf';

const Fonts = css`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Jost';
    src: url(${JostRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'JostBold';
    src: url(${JostBold}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'JostExtraBold';
    src: url(${JostExtraBold}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }





`;



export default Fonts;

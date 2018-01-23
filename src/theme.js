import {
  blueA700,
  cyan500,
  darkBlack,
  grey100,
  grey300,
  grey500,
  grey800,
  white
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'


export default {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopLeftNavMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56,
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blueA700,
    primary2Color: grey800,
    primary3Color: white,
    accent1Color: blueA700,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: grey800,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade( darkBlack, 0.3 ),
    pickerHeaderColor: cyan500,
    backCanvas: {
      viewportBackgroundColor: white,
      navDrawerBoxShadow: true
    },
  },
  avatar: {
    borderColor: white,
  },
}

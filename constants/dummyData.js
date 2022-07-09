import icons from './icons';
import {COLORS} from './theme';
const myProfile = {
  name: 'ByProgrammers',
  profile_image: require('../assets/images/profile.png'),
  address: 'No. 88, Jln Padungan, Kuching',
};


const Location = [
  {id: 1, name: 'Tầng 1', color: '#F5C94E'},
  {id: 2, name: 'Tầng 2', color: '#933DA8'},
];
const featuresImpData = [
  {
    id: 101,
    icon: icons.awb,
    color: COLORS.purple,
    backgroundColor: COLORS.lightpurple,
    bgColor: ['#46aeff', '#5884ff'],
    description: 'AWB',
    screenName: 'ImpAwbScreen',
    srceenNavigagor: 'ImpAwb',
  },
  {
    id: 102,
    icon: icons.flightLanded,
    color: COLORS.yellow,
    bgColor: ['#fddf90', '#fcda13'],
    backgroundColor: COLORS.lightyellow,
    description: 'Flight',
    screenName: 'FlightImportScreen',
    srceenNavigagor: 'FlightImport',
  },
  {
    id: 105,
    icon: icons.awb,
    color: COLORS.yellow,
    description: 'Follow',
    bgColor: ['#ffc465', '#ff9c5f'],
    backgroundColor: COLORS.lightyellow,
    screenName: 'FollowScreen',
    srceenNavigagor: 'Follow',
  },
  {
    id: 106,
    icon: icons.search,
    color: COLORS.purple,
    description: 'Search',
    bgColor: ['#fcaba8', '#fe6bba'],
    backgroundColor: COLORS.lightpurple,
    screenName: 'SearchScreen',
    srceenNavigagor: 'SearchNav',
  },
  // {
  //   id: 107,
  //   icon: icons.bill,
  //   color: COLORS.yellow,
  //   description: 'HDDT',
  //   bgColor:['#7cf1fb', '#4ebefd'],
  //   backgroundColor: COLORS.lightyellow,
  //   screenName: 'InvoiceScreen',
  //   srceenNavigagor: 'Invoice',
  // },
  // {
  //   id: 108,
  //   icon: icons.truck,
  //   color: COLORS.primary,
  //   backgroundColor: COLORS.lightGreen,
  //   bgColor:['#7be993', '#46caaf'],
  //   description: 'Call Truck',
  //   screenName: 'CallTruckScreen',
  //   srceenNavigagor: 'CallTruck',
  // },
  // {
  //   id: 104,
  //   icon: icons.wallet,
  //   color: COLORS.red,
  //   backgroundColor: COLORS.lightRed,
  //   description: 'Wallet',
  // },
  // {
  //   id: 105,
  //   icon: icons.bill,
  //   color: COLORS.yellow,
  //   backgroundColor: COLORS.lightyellow,
  //   description: 'Bill',
  // },
  // {
  //   id: 106,
  //   icon: icons.game,
  //   color: COLORS.primary,
  //   backgroundColor: COLORS.lightGreen,
  //   description: 'Games',
  // },
  // {
  //   id: 107,
  //   icon: icons.phone,
  //   color: COLORS.red,
  //   backgroundColor: COLORS.lightRed,
  //   description: 'Mobile Prepaid',
  // },
  // {
  //   id: 108,
  //   icon: icons.more,
  //   color: COLORS.purple,
  //   backgroundColor: COLORS.lightpurple,
  //   description: 'More',
  // },
];
const featuresExpData = [
  {
    id: 201,
    icon: icons.awb,
    color: COLORS.yellow,
    description: 'AWB Detail',
    bgColor: ['#ffc465', '#ff9c5f'],
    backgroundColor: COLORS.lightyellow,
    screenName: 'ExpAwbScreen',
    srceenNavigagor: 'ExpAwb',
  },
  {
    id: 202,
    icon: icons.flightDepart,
    color: COLORS.purple,
    description: 'Flight Minitor',
    bgColor: ['#fcaba8', '#fe6bba'],
    backgroundColor: COLORS.lightpurple,
    screenName: 'FlightExpScreen',
    srceenNavigagor: 'FlightExp',
  },

  {
    id: 203,
    icon: icons.bill,
    color: COLORS.yellow,
    description: 'HDDT',
    bgColor: ['#7cf1fb', '#4ebefd'],
    backgroundColor: COLORS.lightyellow,
    screenName: 'InvoiceScreen',
    srceenNavigagor: 'Invoice',
  },
];
const featuresGenaralData = [
  {
    id: 301,
    icon: icons.truck,
    color: COLORS.primary,
    backgroundColor: COLORS.lightGreen,
    bgColor: ['#7be993', '#46caaf'],
    description: 'Call Truck',
    screenName: 'CallTruckScreen',
    srceenNavigagor: 'CallTruck',
  },
];



const listAwb = [
  {
    MAWB_ORDER: 1,
    ID: 5597186,
    LAGI_MAWB_PREFIX: '180',
    LAGI_MAWB_NO: 31668173,
    Status: 2,
    Pieces: 10,
    Weight: 50.45,
  },
  {
    MAWB_ORDER: 2,
    ID: 5597168,
    LAGI_MAWB_PREFIX: '180',
    LAGI_MAWB_NO: 31668070,
    Status: 1,
    Pieces: 34,
    Weight: 106.74,
  },
];
const listImpAwb = [
  {
    MAWB_ORDER: 1,
    ID: 5597186,
    LAGI_MAWB_PREFIX: '180',
    LAGI_MAWB_NO: 31668173,
    Status: 2,
    LAGI_HAWB: 'DEL10547301',
    TerminalID: 1,
    TerminalName: 'ALSC'
  },
  {
    MAWB_ORDER: 2,
    ID: 5597168,
    LAGI_MAWB_PREFIX: '180',
    LAGI_MAWB_NO: 31668070,
    Status: 1,
    LAGI_HAWB: 'HHE86932034',
    TerminalID: 2,
    TerminalName: 'NCTS'
  },
  {
    MAWB_ORDER: 3,
    ID: 11965394 ,
    LAGI_MAWB_PREFIX: '180',
    LAGI_MAWB_NO: 94060212,
    Status: 1,
    LAGI_HAWB: '4396859213',
    TerminalID: 3,
    TerminalName: 'ACSV'
  },
  {
    MAWB_ORDER: 4,
    ID: 12943298,
    LAGI_MAWB_PREFIX: '784',
    LAGI_MAWB_NO: 67404875,
    Status: 1,
    LAGI_HAWB: 'MNL017952',
    TerminalID: 2,
    TerminalName: 'NCTS'
  },
  {
    MAWB_ORDER: 5,
    ID: 11972325,
    LAGI_MAWB_PREFIX: '784',
    LAGI_MAWB_NO: 64717995,
    Status: 1,
    LAGI_HAWB: 'HHE86932034',
    TerminalID: 1,
    TerminalName: 'ALSC'
  },
  {
    MAWB_ORDER: 6,
    ID: 12245536,
    LAGI_MAWB_PREFIX: '160',
    LAGI_MAWB_NO: 64380606,
    Status: 4,
    LAGI_HAWB: 'HKGAE2110731',
    TerminalID: 3,
    TerminalName: 'ACSV'
  },
  {
    MAWB_ORDER: 7,
    ID: 12245975,
    LAGI_MAWB_PREFIX: '160',
    LAGI_MAWB_NO: 64380606,
    Status: 1,
    LAGI_HAWB: 'HKGAE2110775',
    TerminalID: 2,
    TerminalName: 'NCTS'
  },
  {
    MAWB_ORDER: 8,
    ID: 12242816,
    LAGI_MAWB_PREFIX: '180',
    LAGI_MAWB_NO: 31668070,
    Status: 1,
    LAGI_HAWB: 'PLIJP2C07975',
    TerminalID: 2,
    TerminalName: 'NCTS'
  },
  {
    MAWB_ORDER: 9,
    ID: 5597169,
    LAGI_MAWB_PREFIX: '180',
    LAGI_MAWB_NO: 31668070,
    Status: 1,
    LAGI_HAWB: 'HHE86932034',
    TerminalID: 2,
    TerminalName: 'NCTS'
  },
  {
    MAWB_ORDER: 10,
    ID: 12235056,
    LAGI_MAWB_PREFIX: '180',
    LAGI_MAWB_NO: 98971434,
    Status: 5,
    LAGI_HAWB: '',
    TerminalID: 2,
    TerminalName: 'NCTS'
  },
  {
    MAWB_ORDER: 11,
    ID: 12255672,
    LAGI_MAWB_PREFIX: '160',
    LAGI_MAWB_NO: 66108770,
    Status: 1,
    LAGI_HAWB: 'TSAE21080129',
    TerminalID: 3,
    TerminalName: 'ACSV'
  },
  {
    MAWB_ORDER: 12,
    ID: 12255011,
    LAGI_MAWB_PREFIX: '180',
    LAGI_MAWB_NO: 96881853,
    Status: 3,
    LAGI_HAWB: 'YLC04711700',
    TerminalID: 1,
    TerminalName: 'ALSC'
  },
  {
    MAWB_ORDER: 13,
    ID: 12255431,
    LAGI_MAWB_PREFIX: '131',
    LAGI_MAWB_NO: 57665322,
    Status: 6,
    LAGI_HAWB: '8JF0876',
    TerminalID: 2,
    TerminalName: 'NCTS'
  },
  {
    MAWB_ORDER: 14,
    ID: 12255602,
    LAGI_MAWB_PREFIX: '131',
    LAGI_MAWB_NO: 57735635,
    Status: 2,
    LAGI_HAWB: 'ATA001213725',
    TerminalID: 1,
    TerminalName: 'ALS'
  },
  {
    MAWB_ORDER: 15,
    ID: 12254379,
    LAGI_MAWB_PREFIX: '160',
    LAGI_MAWB_NO: 65750672,
    Status: 1,
    LAGI_HAWB: 'COS31004744',
    TerminalID: 3,
    TerminalName: 'ACSV'
  },
]
const notificationList = [
  {
    ID:1,
    title:'Xác nhận hàng vào kho',
    body:'Lô hàng 180-66297893 đã được đưa vào kho ALSW-Mỹ đình',
    created:'04/05/2022 08:30'
  },
  {
    ID:2,
    title:'Xác nhận giao hàng',
    body:'Lô hàng 180-66297893 đã giao cho khách',
    created:'64/05/2022 16:00'
  }
]
const flightSchedules = [
  {
    flightID:1,
    warehouseID:1,
    flightNo: 'KE361',
    ETA: '14:30',
    ATA:'20:30',
    FlightStatus:1,
  },
  {
    flightID:2,
    warehouseID:3,
    flightNo: 'CX3238',
    ETA: '14:30',
    ATA:'20:30',
    FlightStatus:2,
  }, {
    flightID:3,
    warehouseID:3,
    flightNo: 'JL751',
    ETA: '14:30',
    ATA:'20:30',
    FlightStatus:3,
  },
  {
    flightID:4,
    warehouseID:1,
    flightNo: 'KE361',
    ETA: '14:30',
    ATA:'20:30',
    FlightStatus:1,
  }, {
    flightID:5,
    warehouseID:1,
    flightNo: 'KE361',
    ETA: '14:30',
    ATA:'20:30',
    FlightStatus:1,
  },
  {
    flightID:6,
    warehouseID:1,
    flightNo: 'KE361',
    ETA: '14:30',
    ATA:'20:30',
    FlightStatus:1,
  },
  {
    flightID:7,
    warehouseID:1,
    flightNo: 'KE361',
    ETA: '14:30',
    ATA:'20:30',
    FlightStatus:1,
  },
  {
    flightID:8,
    warehouseID:1,
    flightNo: 'KE361',
    ETA: '14:30',
    ATA:'20:30',
    FlightStatus:1,
  },
  {
    flightID:9,
    warehouseID:1,
    flightNo: 'KE362',
    ETA: '14:30',
    ATA:'20:30',
    FlightStatus:1,
  }
]
export default {
  myProfile,
  featuresImpData,
  featuresExpData,
  featuresGenaralData,
  Location,
  listAwb,
  notificationList,
  listImpAwb,
  flightSchedules
};

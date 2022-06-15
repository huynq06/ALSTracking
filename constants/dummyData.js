import icons from './icons';
import {COLORS} from './theme';
const myProfile = {
  name: 'ByProgrammers',
  profile_image: require('../assets/images/profile.png'),
  address: 'No. 88, Jln Padungan, Kuching',
};
const categories = [
  {
    id: 0,
    title: 'Dịch vụ kho vận',
    thumbnail: require('../assets/images/backgroundALS_01.png'),
    description:
      'ALS là đơn vị hiếm hoi tại Việt Nam được cấp chứng nhận đào tạo nghiệp vụ hàng hóa chuẩn IATA...',
    uri: 'https://als.com.vn/dich-vu/kho-van-va-hau-can',
   //uri:'https://www.google.com/maps/place/Qu%E1%BB%91c+T%E1%BB%AD+Gi%C3%A1m,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0263644,105.8303231,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab9c29bf9b1d:0x4dc73481c6295048!8m2!3d21.0272556!4d105.8326992'
  },
  {
    id: 1,
    title: 'Nhà ga hàng hóa ALS',
    thumbnail: require('../assets/images/backgroundALS_02.png'),
    description:
      'ALS cung cấp các dịch vụ gia tăng bổ sung, hoàn thiện chuỗi cung ứng sản xuất - kinh doanh...',
    uri: 'https://als.com.vn/dich-vu/ga-hang-hoa',
  },
  {
    id: 2,
    title: 'Ga hàng hóa kéo dài',
    thumbnail: require('../assets/images/backgroundALS_03.png'),
    description:
      'ALS sở hữu hệ thống kho lớn với tổng diện tích lên tới 1.000.000 m2. Đa dạng loại hình kho phục vụ đáp ứng ...',
    uri: 'https://als.com.vn/dich-vu/ga-hang-hoa-keo-dai',
  },
  {
    id: 3,
    title: 'Dịch vụ vận tải',
    thumbnail: require('../assets/images/truckService.jpg'),
    description:
      'Đáp ứng nhu cầu xử lý hàng hóa tại sân bay, ALS sở hữu nhà ga hàng hóa hiện đại bậc nhất tại Việt...',
    uri: 'https://als.com.vn/dich-vu/van-tai-hang-hoa',
  },
  {
    id: 4,
    title: 'Dịch vụ CPN tập trung',
    thumbnail: require('../assets/images/CPNCentralize.png'),
    description:
      'Đáp ứng nhu cầu gom và xử lý hàng hóa quốc tế siêu tốc, hàng sẽ được tập kết, thông quan ngay...',
    uri: 'https://als.com.vn/dich-vu/dia-diem-chuyen-phat-nhanh-tap-trung',
  },
  {
    id: 5,
    title: 'Dịch vụ đào tạo',
    thumbnail: require('../assets/images/TrainingService.jpg'),
    description:
      'ALS sở hữu các loại xe vận tải, đáp ứng linh hoạt đa dạng từ 500 kg đến 40 tấn sẵn sàng phục vụ...',
    uri: 'https://als.com.vn/dich-vu/dao-tao',
  },
];
const news = [
  {
    id: 0,
    title: 'ALS trở thành thành viên chính thức của WCA',
    thumbnail: require('../assets/images/wca.png'),
    //description: 'Là thành viên của Liên minh Hàng hóa lớn nhất Thế giới (World Cargo Alliance), một lần nữa ALS khẳng định được vị thế tiên phong của mình tr...',
    uri: 'https://als.com.vn/als-tro-thanh-thanh-vien-chinh-thuc-cua-wca',
  },
  {
    id: 1,
    title: 'ALS và FSI hợp tác và ra mắt giải pháp toàn diện về lưu...   ',
    thumbnail: require('../assets/images/FSI.jpg'),
    uri: 'https://als.com.vn/giai-phap-toan-dien-ve-luu-tru-vat-ly-ket-hop-so-hoa-tai-lieu',
    //description:'Sáng nay (19/4), Công ty cổ phần Logistics Hàng không (ALS) và Công ty cổ phần Đầu tư thương mại và phát triển công nghệ FSI (FSI) đã ký kết...'
  },
  {
    id: 2,
    title: 'Khai mạc giải bóng đá Olympic ALS 2022',
    thumbnail: require('../assets/images/football.png'),
    uri: 'https://als.com.vn/khai-mac-giai-bong-da-olympic-als-2022',
    //description:'Ngày hôm nay, buổi thi đấu đầu tiên của vòng loại giải bóng đá Nam Olympic ALS 2022 đã chính thức diễn ra. Dù thời tiết không thuận lợi mưa ...'
  },
  {
    id: 3,
    title: 'ALS và DHL Express hợp tác',
    thumbnail: require('../assets/images/DHL.jpg'),
    uri: 'https://als.com.vn/als-va-dhl-express-hop-tac-phat-trien-trung-tam-khai-thac-cua-khau',
    //description:'Mới đây, Công ty TNHH Dịch vụ kho vận ALS – Đơn vị thành viên của Công ty Cổ phần Logistics Hàng không (ALS) đã tiến hành ký kết thỏa thuận ...'
  },
  {
    id: 4,
    title: 'Rộn ràng không khí chào mừng ngày Phụ Nữ Việt Nam 20/10...',
    thumbnail: require('../assets/images/0803.jpg'),
    uri: 'https://als.com.vn/chao-mung-ngay-phu-nu-viet-nam-20-10-tai-cac-don-vi',
    //description:'Bữa tiệc chào mừng ngày 20/10 của đội ngũ ALS đã diễn ra với nhiều cảm xúc và niềm vui. Đây cũng là dịp để các mọi người gặp gỡ với các nhân...'
  },
  {
    id: 5,
    title: 'Chào mừng ngày truyền thống ALS 2021',
    thumbnail: require('../assets/images/2010.jpg'),
    uri: 'https://als.com.vn/chao-mung-ngay-truyen-thong-als-2021',
    //description:'Cột mốc mới đánh dấu chặng đường 14 năm xây dựng (1/10/2007 – 1/10/2021) của công ty. ALS luôn cố gắng, phát triển không ngừng để giữ vững ...'
  },
];

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

const hamburger = {
  id: 1,
  name: 'Hamburger',
  description: 'Chicken patty hamburger',
  categories: [1, 2],
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require('../assets/dummyData/hamburger.png'),
};

const hotTacos = {
  id: 2,
  name: 'Hot Tacos',
  description: 'Mexican tortilla & tacos',
  categories: [1, 3],
  price: 10.99,
  calories: 78,
  isFavourite: false,
  image: require('../assets/dummyData/hot_tacos.png'),
};

const vegBiryani = {
  id: 3,
  name: 'Veg Biryani',
  description: 'Indian Vegetable Biryani',
  categories: [1, 2, 3],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require('../assets/dummyData/veg_biryani.png'),
};

const wrapSandwich = {
  id: 4,
  name: 'Wrap Sandwich',
  description: 'Grilled vegetables sandwich',
  categories: [1, 2],
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require('../assets/dummyData/wrap_sandwich.png'),
};
const menu = [
  {
    id: 1,
    name: 'Featured',
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 2,
    name: 'Nearby you',
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 3,
    name: 'Popular',
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 4,
    name: 'Newest',
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 5,
    name: 'Trending',
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 6,
    name: 'Recommended',
    list: [hamburger, hotTacos, wrapSandwich],
  },
];
const topSearch = [
  {
    id: 1,
    name: 'Import',
    list: [hamburger, hotTacos, vegBiryani],
    active:true
  },
  {
    id: 2,
    name: 'Export',
    list: [hamburger, vegBiryani, wrapSandwich],
    active:false
  },
  {
    id: 3,
    name: 'Service Order',
    list: [hamburger, hotTacos, wrapSandwich],
    active:false
  },
  {
    id: 4,
    name: 'Schedules',
    list: [hamburger, hotTacos, vegBiryani],
    active:false
  },
]
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
    ID: 5597168,
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
export default {
  myProfile,
  categories,
  menu,
  featuresImpData,
  featuresExpData,
  featuresGenaralData,
  Location,
  listAwb,
  news,
  notificationList,
  topSearch,
  listImpAwb
};

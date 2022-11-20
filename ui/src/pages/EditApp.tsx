// import '../assets/css/ReleaseApp.css';
// import React from 'react';
// import { Checkbox, Select } from 'antd';
// import { useState } from 'react';
// import MultiSelect from '../components/MultiSelect';
// import DragAndDrop from '../components/DragDrop';
// import TextArea from 'antd/lib/input/TextArea';
// import DragAndDropMulti from '../components/DragDropMulti';
// import SideMenu from '../components/Header/SideMenu';
// import { appApi } from '../api/appApi';
// import { App, CreateAppData } from '../models/AppDetailData';
// import { useNavigate } from 'react-router-dom';

// const options = [
//   { value: 'Educational', label: 'Educational' },
//   { value: 'Lifestyle', label: 'Lifestyle' },
//   { value: 'SocialMedia', label: 'Social media' },
//   { value: 'Productivity', label: 'Productivity' },
//   { value: 'Entertainment', label: 'Entertainment' },
//   { value: 'Game', label: 'Game' }
// ];

// const EditApp = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [appType, setAppType] = useState('');
//   const [appPaymentMethod, setAppPaymentMethod] = useState('');
//   const [appCategories, setAppCategories] = useState('');
//   const [appImage, setAppImage] = useState('');
//   const [appTags, setAppTags] = useState([] as string[]);
//   const [count, setCount] = React.useState(0);
//   const [count1, setCount1] = React.useState(0);
//   let navigate = useNavigate();

//   const onRelease = () => {
//     const req: CreateAppData = {
//       title,
//       description,
//       appType,
//       appTags,
//       paymentMethod: appPaymentMethod,
//       appCategories: [''],
//       creatorId: '',
//       rating: '',
//       appIconURL: '',
//       assetType: '',
//       assetId: ''
//     };

//     appApi.releaseApp({ app: req }).then((status) => {
//       if (status) {
//         // proceed success
//         navigate('/products');
//       }

//       // proceed fail
//     });
//   };

//   return (
//     <>
//       <SideMenu />
//       <div
//         className="Publish_Block"
//         style={{
//           float: 'none',
//           position: 'absolute',
//           top: '53%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)'
//         }}
//       >
//         <div className="ReleaseTitle" style={{ fontWeight: '700' }}>
//           Edit App Detail
//         </div>
//         <div
//           style={{
//             border: '1px solid #E3E3E3',
//             position: 'relative',
//             top: '2rem'
//           }}
//         ></div>
//         <div className="release-form-1">
//           <div
//             style={{
//               position: 'relative',
//               top: '70px',
//               left: '50px',
//               fontWeight: 700,
//               fontSize: '12px',
//               lineHeight: '15px',
//               color: '#3A001E'
//             }}
//           >
//             App name
//           </div>
//           <div className="AppNameFill">
//             <input
//               maxLength={50}
//               onChange={(e) => setTitle(e.target.value)}
//               value={title}
//             ></input>
//             <div className="count1">{count}/50</div>
//           </div>
//           <div className="AppOrGame">
//             <div
//               style={{
//                 position: 'relative',
//                 top: '50px',
//                 left: '50px',
//                 fontWeight: 700,
//                 fontSize: '12px',
//                 lineHeight: '15px',
//                 color: '#3A001E'
//               }}
//             >
//               App or game
//             </div>
//             <label
//               style={{
//                 position: 'relative',
//                 top: '50px',
//                 left: '50px',
//                 fontWeight: 700,
//                 fontSize: '9px',
//                 lineHeight: '15px',
//                 color: '#3A001E'
//               }}
//             >
//               <input
//                 type="radio"
//                 name="choices1"
//                 value="app"
//                 className="form-check-input1"
//                 onClick={(e) => setAppType('app')}
//               />
//               <div className="AppBox">App</div>

//               <input
//                 type="radio"
//                 name="choices1"
//                 value="game"
//                 className="form-check-input2"
//                 onClick={(e) => setAppType('game')}
//               />
//               <div className="GameBox">Game</div>
//             </label>
//           </div>
//           <div className="FreeOrPaidOrRent">
//             <div
//               style={{
//                 position: 'relative',
//                 top: '35px',
//                 left: '50px',
//                 fontWeight: 700,
//                 fontSize: '12px',
//                 lineHeight: '15px',
//                 color: '#3A001E'
//               }}
//             >
//               Free, paid or rent
//             </div>
//             <label
//               style={{
//                 position: 'relative',
//                 top: '35px',
//                 left: '50px',
//                 fontWeight: 700,
//                 fontSize: '9px',
//                 lineHeight: '15px',
//                 color: '#3A001E'
//               }}
//             >
//               <input
//                 type="radio"
//                 name="choices2"
//                 value="free"
//                 className="form-check-input3"
//                 onClick={(e) => setAppPaymentMethod('Free')}
//               />
//               <div className="FreeBox">Free</div>

//               <input
//                 type="radio"
//                 name="choices2"
//                 value="game"
//                 className="form-check-input4"
//                 onClick={(e) => setAppPaymentMethod('Paid')}
//               />
//               <div className="PaidBox">Paid</div>

//               <input
//                 type="radio"
//                 name="choices2"
//                 value="game"
//                 className="form-check-input5"
//                 onClick={(e) => setAppPaymentMethod('Rent')}
//               />
//               <div className="RentBox">Rent</div>
//             </label>
//           </div>

//           <div className="Appcategories">
//             <div
//               style={{
//                 position: 'relative',
//                 top: '0px',
//                 left: '50px',
//                 fontWeight: 700,
//                 fontSize: '12px',
//                 lineHeight: '15px',
//                 color: '#3A001E'
//               }}
//             >
//               App categories
//             </div>
//           </div>
//           <div
//             style={{
//               position: 'relative',
//               top: '27px',
//               left: '50px',
//               fontWeight: 700,
//               fontSize: '12px',
//               lineHeight: '11px',
//               color: '#A3A3A3'
//             }}
//           >
//             Category
//           </div>
//           <div
//             style={{
//               position: 'relative',
//               top: '74px',
//               left: '50px',
//               fontWeight: 700,
//               fontSize: '12px',
//               lineHeight: '11px',
//               color: '#A3A3A3'
//             }}
//           >
//             Services
//           </div>
//           <div>
//             <select
//               name="gender"
//               style={{
//                 fontWeight: 400,
//                 fontSize: '12px',
//                 width: '30%',
//                 left: '14%',
//                 padding: '0.25rem',
//                 position: 'relative',
//                 top: '0',
//                 borderColor: '#FFE7D4',
//                 backgroundColor: '#FFFFFF',
//                 color: '#3A001E',
//                 borderWidth: '2px',
//                 borderRadius: '5px'
//               }}
//             >
//               <option value="female">Family</option>
//               <option value="male">Cặc</option>
//               <option value="non-binary">Địt mẹ</option>
//               <option value="other">Suck my dick</option>
//               <option value="Prefer not to answer">Perfer not to Answer</option>
//             </select>
//           </div>
//           <MultiSelect />
//           <div
//             style={{
//               position: 'relative',
//               transform: 'rotate(90deg)',
//               left: '375px',
//               width: '300px',
//               top: '-100px',
//               borderTop: '2px solid #E3E3E3'
//             }}
//           />
//           <div className="DescBox">
//             <div
//               style={{
//                 position: 'relative',
//                 top: '22px',
//                 left: '-30px',
//                 fontWeight: 700,
//                 fontSize: '12px',
//                 lineHeight: '15px',
//                 color: '#3A001E'
//               }}
//             >
//               Description
//             </div>
//             <TextArea
//               maxLength={1000}
//               onChange={(e) => setDescription(e.target.value)}
//             ></TextArea>
//             <div className="count2">{count1}/1000</div>
//           </div>
//           <div
//             style={{
//               width: '310px',
//               position: 'absolute',
//               left: '670px',
//               top: '310px'
//             }}
//           ></div>
//           <div
//             style={{
//               width: '310px',
//               position: 'absolute',
//               left: '670px',
//               top: '402px'
//             }}
//           >
//             <div
//               style={{
//                 position: 'relative',
//                 top: '-40px',
//                 left: '-100px',
//                 fontWeight: 700,
//                 fontSize: '12px',
//                 lineHeight: '15px',
//                 color: '#3A001E'
//               }}
//             >
//               App Image
//             </div>
//             <input
//               style={{
//                 borderColor: '#D7DBDB',
//                 position: 'relative',
//                 top: '-60px'
//               }}
//               maxLength={1000}
//               onChange={(e) => setAppImage(e.target.value)}
//               value={appImage}
//             ></input>

//             {/* <div className="count1">{count}/50</div> */}
//           </div>
//           <button
//             style={{
//               backgroundColor: '#FB7F4B',
//               color: 'white',
//               fontSize: '15px',
//               position: 'absolute',
//               top: '495px',
//               left: '485px',
//               borderRadius: '5px',
//               width: '80px',
//               height: '30px'
//             }}
//             onClick={onRelease}
//           >
//             Release
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
// export default EditApp;

export {};

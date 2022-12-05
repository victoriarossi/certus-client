// import React from 'react';
// import Button from '@mui/material/Button';
//
// class ImasgeUpload extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             base64Data: null,
//         };
//     }
//
//     onChange = (e) => {
//         console.log('file uploaded: ', e.target.files[0]);
//         let file = e.target.files[0];
//
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = this._handleReaderLoaded.bind(this);
//             reader.readAsBinaryString(file);
//         }
//     };
//
//     _handleReaderLoaded = (e) => {
//         console.log('file uploaded 2: ', e);
//         let binaryString = e.target.result;
//         this.setState({
//             base64Data: btoa(binaryString),
//         });
//     };
//
//     render() {
//         const { base64Data } = this.state;
//         console.log('base64', this.state);
//         return (
//             <div>
//                 <input
//                     type="file"
//                     id="file"
//                     accept=".jpg, .jpeg, .png"
//                     onChange={(e) => this.onChange(e)}
//                     style={{
//                         backgroundColor: '#11e3ab',
//                         color: 'black',
//                     }}
//                 />
//             </div>
//         );
//     }
// }
//
// export default function ImageUpload(images){
//
//     const _handleReaderLoaded = (e) => {
//         console.log('file uploaded 2: ', e);
//         let binaryString = e.target.result;
//         this.setState({
//             base64Data: btoa(binaryString),
//         });
//     };
//
//     const onChange = (e) => {
//
//         let file = e.target.files[0];
//
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = _handleReaderLoaded.bind(this);
//             reader.readAsBinaryString(file);
//         }
//     };
//
//     return (
//         <div>
//             <input
//                 type="file"
//                 id="file"
//                 accept=".jpg, .jpeg, .png"
//                 // onChange={(e) => handler(e.target.value)}
//                 onChange ={onChange}
//                 style={{
//                     backgroundColor: '#11e3ab',
//                     color: 'black',
//                 }}
//             />
//         </div>
//     )
// }

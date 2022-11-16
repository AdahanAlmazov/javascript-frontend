// const bank = {
//     bankCode: 65656,
//     bankName: "Optima Bank",
//     schedule: "Каждый день:" +
//         "c 6:00 до 20:00"

// }

// const bankCard = {
//     cardNumber: "231242134",
//     expiryDate: "12.12.2028",
//     name: "Adahan",
//     type: "Visa",
//     nightTime:true,
//     cvc: 545,
//     address: {
//         city: "Bishkek",
//         street: "Chui",
//         home: "43"
//     }
// }

// const customerCardType = prompt('UNISTREAM, RIA, CONTACT, MONEYGRAM')

// switch (customerCardType) {
//     case "UNISTREAM":
//         console.log("Send request to UNISTREAM processing");
//         break;
//     case "RIA":
//         console.log("Send request to RIA processing");
//         break;
//     case "CONTACT":
//         console.log("Send request to CONTACT processing");
//         break;
//     case    "MONEYGRAM":
//         console.log("Send request to MONEYGRAM processing")
//         break;
//     default:
//         console.warn("Unknown card processing...");
// }

// const digits = prompt("1,2,3,4,5,6,7,8,9 ")

// switch (digits) {
//     case '1':
//         console.log("I");
//         break;
//     case '2':
//         console.log("II");
//         break;
//     case '3':
//         console.log("III");
//         break;
//     case '4':
//         console.log("IV");
//         break;
//     case '5':
//         console.log("V");
//         break;
//     case '6':
//         console.log("VI");
//         break;
//     case '7':
//         console.log("VII");
//         break;
//     case '8':
//         console.log("VIII");
//         break;
//     case '9':
//         console.log("IX");
//         break;
// }
// console.log(digits)

let customerType = 2;
customerType === 1 ? console.log("Физ. лицо"): console.log("юр. лицо")
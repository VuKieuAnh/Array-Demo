let a= [3,4 ,5, 6, 4];
//tìm xem số 5 có tồn tại trong mảng không
//tìm số a có tồn tại trong mảng không
let value = +prompt("Moi ban nhap so");


//khong quan tam den thao tac nhap xuat du lieu
let index = -1;
for(let i=0; i<a.length; i++){
    if(a[i]==value){
        index = i;
        break;
    }
}
// dua ra ket luan khi minh duyet het
// ket luan luc chua duyet het mang
if(index != -1){
    //nhap xuat du lieu
    alert(value + " nam o vi tri "+ index);
}
else{
    alert( value + " khong nam trong mang")
}

let tv = ["mot", 'hai', 'ba'];
// tim tu a dang o vi tri thu may? -> index

let ta = ["one", 'two', 'three'];
// ta[index]



// for (const key in a) {
//     console.log(a[key]);
// }
//duyet tu dau mang -> cuoi mang, khong bo qua phan tu nao
//khong co yeu cau gi dac biet
// for (const key in a) {
//     console.log(key);
// }
// for (let index = 2; index < a.length; index++) {
//     console.log(a[index]);
    
// }
//duyet tu so nao cung dc
//duyet theo chieu 0-n, n-0
// for (let index = a.length-1; index >1; index--) {
//     a[index]=100;
//     // console.log(a[index]);
// }

//ma tran vuong
//tinh tong duong cheo chinh
//tinh tong duong cheo phu
// let a1=[
//     [2, 3, 4, 5], 
//     [2, 3, 4, 5],
//     [2, 3, 4, 5], 
//     [2, 3, 4, 5]

// ];
// for(let i=0; i<a1.length; i++){
//     for(let j=0; j<a1[i].length; j++){
//         console.log(a1[i][j]);
//     }
// }

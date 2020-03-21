export function checkClass(_class: any){
    console.log('class_info', _class.className);
}  

export function checkFns(_class: any){
    for(let prop in _class.prototype){
        console.log('props',prop);
    }
}

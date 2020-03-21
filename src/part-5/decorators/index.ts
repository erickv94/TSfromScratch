export {Entity, enumerable, readonly}

function Entity(classInfo: any){
    return function(target: any){
        target.className=classInfo.name
    }
}

function enumerable(value: boolean){
    return function (target: any,propertyKey: PropertyKey,descriptor: PropertyDescriptor){
        descriptor.enumerable=value;
    }
}

function readonly(target: any, propertyKey: PropertyKey, descriptor: PropertyDescriptor){
         descriptor.writable=false;
}

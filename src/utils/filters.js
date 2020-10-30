export function price(value) {
        return value.toFixed(2) + ' €'
    }
export function maxLength(value, length) {
        if(value.length > length){
            return value.slice(0, length-4) + ' ...'
        }
        else{
            return value
        }
    }
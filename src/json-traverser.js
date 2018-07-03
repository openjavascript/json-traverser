export default function jsonTraverser( json, cb ){
    let keys = Object.keys( json );
    keys.map( ( key ) => {
        let item = json[key]
            ;
        switch( Object.prototype.toString.call( item ) ){
            case '[object Array]': 
            case '[object Object]': {
                jsonTraverser( item, cb );
                break;
            }
        }
        cb && cb( item, key, json );
    });
}

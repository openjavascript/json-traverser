export default function jsonTraverser( json, cb, datapath = [] ){
    let keys = Object.keys( json );
    keys.map( ( key ) => {
        let nextPath = datapath.slice();
            nextPath.push( key );
        let item = json[key]
            ;
        switch( Object.prototype.toString.call( item ) ){
            case '[object Array]': 
            case '[object Object]': {
                jsonTraverser( item, cb, nextPath.slice() );
                break;
            }
        }
        cb && cb( item, key, json, nextPath );
    });
}

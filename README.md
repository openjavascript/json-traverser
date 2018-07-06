# json-traverser
提供遍历 javascript json数据 的方法

## install

    npm install --save json-traverser

## usage

    import jsonTraverser from 'json-traverser'; 
    
    jsonTraverser( jsonData, ( item, key, parent ) => {
        //code here
    });

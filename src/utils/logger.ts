import {getLogger,configure} from 'log4js'
// /* Configuring the log4js to log to a file and to the console. */
configure({
appenders:{
    app:{type:"file",filename:"Apis.log"},
    out:{type:'stdout'}
},
categories:{default:{
    appenders:["app","out"],
    level:'info'
}}
})
export const logger = getLogger()



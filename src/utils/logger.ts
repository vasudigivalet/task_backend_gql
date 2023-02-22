import {getLogger,configure} from 'log4js'
configure({
appenders:{
    app:{type:file,filename:"app.log"},
    out:{type:'stdout'}
},
categories:{default:{
    appenders:["app"],
    level:'info'
}}
})
const logger = getLogger()


logger.info("Hello")
logger.debug('logging warning')
logger.warn('logging warning')
logger.error('logging error')
logger.trace('logging trace')

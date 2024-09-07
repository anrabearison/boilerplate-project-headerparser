const parseHeaders = (req) => {
    let ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress||req.ip;
    let language = req.headers['accept-language'];
    let software = req.headers['user-agent'];

    return {
        ipaddress,
        language,
        software
    };
};

module.exports = parseHeaders;
const parseHeaders = (req) => {
    const ipaddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];

    return {
        ipaddress,
        language,
        software
    };
};

module.exports = parseHeaders;
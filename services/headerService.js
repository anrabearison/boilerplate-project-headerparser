const parseHeaders = (req) => {
    let ipaddress = req.ip;
    if (ipaddress.startsWith("::ffff:")) {
        ipaddress = ipaddress.split(':').pop();
    }
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];

    return {
        ipaddress,
        language,
        software
    };
};

module.exports = parseHeaders;
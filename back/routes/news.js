exports.getNews = async (req, res, next) => {
    try {
        const response = await fetch('');
        const data = response.json();
        console.log(data);
        return data;
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        console.err
        next(err);
    }
}


const errorHandler = (error, req, res, next) => {
    res.status(404).json({ msg: error.message });
};

export default errorHandler;
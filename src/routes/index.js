const wrapper = require("../helpers/utils/wrapper");
const { ERROR } = require("../helpers/http-status");

const init = server => {
    server.use(require("./district"));
    server.use(require("./sub_district"));
    server.use(require("./village"));

    server.use((req, res, next) => {
        const error = new ERROR.NOT_FOUND(null, "Page Not Found");
        res.status(404);
        next(error);
    });

    server.use((error, req, res, next) => {
        return wrapper.response(res, "fail", new ERROR.NOT_FOUND(null, error.message));
    });
};

exports.init = init;
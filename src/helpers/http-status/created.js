class Created {
    constructor(data = null, message = "", status = "CREATED") {
        this.error = false;
        this.data = data;
        this.code = 400;
        this.status = status;
        this.message = message;
    };
};

module.exports = Created;
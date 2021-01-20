var jwt = require('jsonwebtoken');
var issue = payload => {
    return jwt.sign(payload,"worldisfullofdevelopers", {expiresIn: 3600000});
};
var verify = (token, cb) => {
    return jwt.verify(token,"worldisfullofdevelopers", {}, cb);
};

module.exports = {
    issue: issue,
    verify: verify
}
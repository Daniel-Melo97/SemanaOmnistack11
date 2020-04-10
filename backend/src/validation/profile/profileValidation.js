const {celebrate, Segments, Joi} = require('celebrate');

const profile_validate = celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
});

module.exports = profile_validate;
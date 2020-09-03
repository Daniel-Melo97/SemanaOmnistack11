const {celebrate, Segments, Joi} = require('celebrate');

const session_validate = celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required().length(8)
    })
});

module.exports = session_validate;
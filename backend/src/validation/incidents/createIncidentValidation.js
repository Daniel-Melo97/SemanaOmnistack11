const {celebrate, Segments, Joi} = require('celebrate');


const delete_validation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required().length(8)
    }).unknown()
});

module.exports = delete_validation;
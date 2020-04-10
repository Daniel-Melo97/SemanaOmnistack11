const {celebrate, Segments, Joi} = require('celebrate');



const delete_validation = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
});

module.exports = delete_validation;
const {celebrate, Segments, Joi} = require('celebrate');


const index_validation = celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
});

module.exports = index_validation;
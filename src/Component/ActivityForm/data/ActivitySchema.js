import Joi from 'joi';

const ActivitySchema = Joi.object({
    activityName: Joi.string().max(10).min(3).required().messages({
        "string.min":"Activity name cannot less than 3 characters",
        "string.max":"Activity name cannot exceed 10 characters",
        "string.empty":"Activity name cannot be empty"
    }),

    activityDate: Joi.date().required().messages({
        "any.empty":"Date cannot be empty"
    }),

    activityType: Joi.required().messages({
        "any.empty":"Activity type cannot be empty"
    }),

    activityDuration: Joi.number().greater(0).required().messages({
        "number.base":"Activity Duration cannot be empty and must be a number",
        "number.greater":"Activity Duration must be more than zero"
    }),

    activityDescription: Joi.string().min(3).max(120).required().messages({
        "string.min":"Description cannot less than 3 characters",
        "string.max":"Description cannot exceed 120 characters",
        "string.empty":"Description cannot be empty",
    })
});


export default ActivitySchema
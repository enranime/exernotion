import Joi from 'joi';

const ActivitySchema = Joi.object({
    activityName: Joi.string().max(10).min(3).required(),
    description: Joi.string().required(),
    activityDate: Joi.date().required(),
    activityType: Joi.required(),
});


export default ActivitySchema
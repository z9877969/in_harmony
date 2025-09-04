import Joi from 'joi';

export const update = Joi.object({
  fedPeople: Joi.number().integer().min(0).required(),
  providedWithClothing: Joi.number().integer().min(0).required(),
  providedWithWater: Joi.number().integer().min(0).required(),
  receivedMedications: Joi.number().integer().min(0).required(),
  fedAnimals: Joi.number().integer().min(0).required(),
  providedWithElectricity: Joi.number().integer().min(0).required(),
});

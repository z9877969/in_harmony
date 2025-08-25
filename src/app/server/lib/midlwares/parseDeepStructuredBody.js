export const parseDeepStructuredBody =
  (fieldsToConvertArray) => (next) => (req, res) => {
    const formData = req.body;
    fieldsToConvertArray.forEach((fieldName) => {
      const value = formData[fieldName];

      if (value && !Array.isArray(value)) {
        formData[fieldName] = value.split(',');
      }
    });

    for (const key in req.body) {
      try {
        if (fieldsToConvertArray.includes(key)) continue;
        const parsedValue = JSON.parse(req.body[key]);
        if (
          typeof parsedValue === 'object' &&
          parsedValue !== null &&
          !Array.isArray(req.body[key])
        ) {
          req.body[key] = parsedValue;
        }
      } catch (error) {
        continue;
      }
    }

    next(req, res);
  };

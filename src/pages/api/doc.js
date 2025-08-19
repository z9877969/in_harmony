import { withSwagger } from 'next-swagger-doc';
import { swaggerOptions } from '../../swagger'; // Імпортуємо конфігурацію

const swaggerHandler = withSwagger(swaggerOptions);
export default swaggerHandler();

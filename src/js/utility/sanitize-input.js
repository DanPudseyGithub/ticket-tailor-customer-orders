export const sanitizeInput = (input) => input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
export default sanitizeInput;

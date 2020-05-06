import crypto = require('crypto');

export const generateUniqueId = (size: number, type?: string): string =>
{
    return crypto.randomBytes(size).toString(type || 'HEX');
}
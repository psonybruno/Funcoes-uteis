import crypto = require('crypto');

export const generateID = (size: number, type?: string): string =>
{
    return crypto.randomBytes(size).toString(type || 'HEX');
}

//test user, token data and transfer data

// ✅ Valid user
export const validUser = {
  username: 'MUSZ1234',
  password: 'musz5678',
  token: '123456',
  name: 'Jan Demobankowy',
};

//console.log('Loaded test data:', validUser);

// ❌ Invalid user (too short credentials)
export const invalidUser = {
  username: 'short', // less than 8 characters
  password: '123', // less than 8 characters
};

// 🔐 Locked user (after 3 failed attempts)
export const lockedUser = {
  username: 'LOCK1234',
  password: 'wrongPass',
  attempts: 3,
};

// 🧪 Valid transfer data
export const validTransfer = {
  recipient: 'Anna Kowalska',
  accountNumber: 'PL61109010140000071219812874',
  amount: '250.00',
  title: 'Refund for shopping',
};

// ❌ Invalid transfer data
export const invalidTransfer = {
  recipient: '',
  accountNumber: '123',
  amount: '-50',
  title: '',
};

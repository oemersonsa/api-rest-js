const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Emerson 1',
          email: 'teste@teste.com',
          password_hash: await bcryptjs.hash('123546', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },
};

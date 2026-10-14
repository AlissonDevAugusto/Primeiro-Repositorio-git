const multer = require('multer');
const { resolve } = require('node:path');
const { v4 } = require('uuid');

module.exports = {
  storage: multer.diskStorage({ /* configuraçao do multer : */
    destination: resolve( /* onde vai salvar as imagens */
      __dirname,
      '..',
      '..',
      'uploads',
    ),
    filename: (request, file, callback) => { /* configuraçao do nome desses arquivos */
      const uniqueName = v4().concat(`-${file.originalname}`);
      return callback(null, uniqueName);
    },
  }),
};

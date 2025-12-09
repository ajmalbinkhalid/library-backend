import * as bcrypt from 'bcrypt';

async function hashPassword() {
  const hash = await bcrypt.hash('temp123', 10);
  console.log(hash);
}

hashPassword();

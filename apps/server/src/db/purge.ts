
import { AppDataSource } from '../ormconfig';

const purgeDatabase = async () => {
  await AppDataSource.initialize();

  const queryRunner = AppDataSource.createQueryRunner();
  
  try {
    await queryRunner.connect();

    const tables = ['expense', 'user']; // Order is important for truncating
    
    for (const table of tables) {
      await queryRunner.query(`TRUNCATE TABLE "${table}" CASCADE`);
    }

    console.log('Database purged successfully');
  } catch (err) {
    console.error('Error purging database', err);
  } finally {
    await queryRunner.release();
    await AppDataSource.destroy();
  }
};

purgeDatabase().catch((err) => {
  console.error('Error purging database', err);
  process.exit(1);
});

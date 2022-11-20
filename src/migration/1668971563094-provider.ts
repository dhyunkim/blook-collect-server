import { MigrationInterface, QueryRunner } from 'typeorm';

export class provider1668971563094 implements MigrationInterface {
  name = 'provider1668971563094';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`provider\` (
      \`id\` int NOT NULL AUTO_INCREMENT, 
      \`name\` varchar(50) NOT NULL, 
      \`nameKr\` varchar(50) NOT NULL, 
      \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), 
      \`deletedAt\` datetime(6) NULL, 
      PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`provider\``);
  }
}

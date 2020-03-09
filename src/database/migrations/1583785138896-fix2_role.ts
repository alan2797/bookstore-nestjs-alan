import {MigrationInterface, QueryRunner} from "typeorm";

export class fix2Role1583785138896 implements MigrationInterface {
    name = 'fix2Role1583785138896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created_at" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created_at" SET DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "updated_at" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "updated_at" SET DEFAULT now()`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "updated_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "updated_at" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created_at" DROP DEFAULT`, undefined);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "created_at" SET NOT NULL`, undefined);
    }

}

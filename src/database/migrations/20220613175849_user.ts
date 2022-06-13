import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    knex.schema.createTableIfNotExists("User", (table) => {
        table.uuid("id").primary();
        table.string("name");
        table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTableIfExists("User");
}


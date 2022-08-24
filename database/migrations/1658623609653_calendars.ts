import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'calendars'

  public async up() {
    // this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')

    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('apiverdao_id')
      table.string('ligue')
      table.string('home')
      table.string('guest')
      table.timestamp('date', { useTz: true })
      table.string('time')
      table.string('broadcaster')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

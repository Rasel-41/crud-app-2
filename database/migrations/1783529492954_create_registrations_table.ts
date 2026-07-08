import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'registrations'

  async up() {
  this.schema.createTable(this.tableName, (table) => {
    table.increments('id')

    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('phone').notNullable()
    table.string('department').notNullable()
    table.integer('semester').notNullable()

    table.timestamps(true, true)
  })
  
}

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
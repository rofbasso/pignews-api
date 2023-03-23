import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Games extends BaseModel {
  @column({
    isPrimary: true,
  })
  public id: string

  @column()
  public apiverdao_id: string

  @column()
  public ligue: string

  @column()
  public home: string

  @column()
  public guest: string

  @column()
  public date: DateTime

  @column()
  public time: string

  @column()
  public broadcaster: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

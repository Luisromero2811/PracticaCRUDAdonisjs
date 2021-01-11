'use strict'

const DatabaseFactory = require('@adonisjs/lucid/src/Factory/DatabaseFactory')

/*
|--------------------------------------------------------------------------
| UsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class UsuarioSeeder {
  async run () {
  await Database.table('usuarios').insert([
{
  'Nombre':'chekelon',
  'Correo':'cheke@hotmail.com',
  'Edad':'33'
},
{
  'Nombre':'Ángel',
  'Correo':'Angel@hotmail.com',
  'Edad':'20'
}
  ])    
    const usersArray = await Factory
  .model('App/Models/Usuario')
  .createMany(5)
  }
}

module.exports = UsuarioSeeder

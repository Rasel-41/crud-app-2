import factory from '@adonisjs/lucid/factories'
import Registration from '#models/registration'

export const RegistrationFactory = factory
  .define(Registration, async ({ faker }) => {
    return {

    name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      department: 'CSE',
      semester: faker.number.int({ min: 1, max: 8 }),

    }
  })
  .build()
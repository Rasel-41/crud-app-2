import type { HttpContext } from '@adonisjs/core/http'
import Registration from '#models/registration'

export default class RegistrationsController {

  async index({ view }: HttpContext) {
    const registrations = await Registration.all()

    return view.render('registrations/index', {
      registrations,
    })
  }

  async create({ view }: HttpContext) {
    return view.render('registrations/create')
  }

  async store({ request, response }: HttpContext) {

    await Registration.create({
      name: request.input('name'),
      email: request.input('email'),
      phone: request.input('phone'),
      department: request.input('department'),
      semester: request.input('semester'),
    })

    return response.redirect('/registrations')
  }

}
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
  async edit({ params, view }: HttpContext) {

  const registration = await Registration.findOrFail(params.id)

  return view.render('registrations/edit', {
    registration,
  })
}

async update({ params, request, response }: HttpContext) {

  const registration = await Registration.findOrFail(params.id)

  registration.name = request.input('name')
  registration.email = request.input('email')
  registration.phone = request.input('phone')
  registration.department = request.input('department')
  registration.semester = request.input('semester')

  await registration.save()

  return response.redirect('/registrations')
}

async destroy({ params, response }: HttpContext) {

  const registration = await Registration.findOrFail(params.id)

  await registration.delete()

  return response.redirect('/registrations')
}

}
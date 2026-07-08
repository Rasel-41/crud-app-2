import router from '@adonisjs/core/services/router'
import RegistrationsController from '#controllers/registrations_controller'

router.get('/registrations', [RegistrationsController, 'index'])

router.get('/registrations/create', [RegistrationsController, 'create'])

router.post('/registrations', [RegistrationsController, 'store'])
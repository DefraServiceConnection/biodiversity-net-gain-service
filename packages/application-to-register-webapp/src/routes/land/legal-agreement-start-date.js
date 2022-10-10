import constants from '../../utils/constants.js'

const handlers = {
  get: async (_request, h) => {
    return h.view(constants.views.LEGAL_AGREEMENT_START_DATE)
  },
  post: async (request, h) => {
    const legalAgreementStartDateDay = request.payload['legalAgreementStartDate-day']
    const legalAgreementStartDateMonth = request.payload['legalAgreementStartDate-month']
    const legalAgreementStartDateYear = request.payload['legalAgreementStartDate-year']

    const datePattern = /^(0?[1-9]|[12]\d|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\d{4}$/
    const dateValue = [getDateValue(legalAgreementStartDateDay), getDateValue(legalAgreementStartDateMonth), legalAgreementStartDateYear].join('/')
    const validDate = dateValue.match(datePattern)
    if (!validDate) {
      let errorMessage = 'Start date must be a real date'
      if (legalAgreementStartDateDay.length === 0 && legalAgreementStartDateMonth.length === 0 && legalAgreementStartDateYear.length === 0) {
        errorMessage = 'Enter the start date of the legal agreement'
      } else {
        if (legalAgreementStartDateDay.length === 0) {
          errorMessage = 'Start date must include a day'
        } else if (legalAgreementStartDateMonth.length === 0) {
          errorMessage = 'Start date must include a month'
        } else if (legalAgreementStartDateYear.length === 0) {
          errorMessage = 'Start date must include a year'
        }
      }
      return h.view(constants.views.LEGAL_AGREEMENT_START_DATE, {
        err: [{
          text: errorMessage,
          href: '#legalAgreementStartDate'
        }],
        legalAgreementStartDateDay,
        legalAgreementStartDateMonth,
        legalAgreementStartDateYear
      })
    } else {
      request.yar.set(constants.redisKeys.LEGAL_AGREEMENT_START_DAY, legalAgreementStartDateDay)
      request.yar.set(constants.redisKeys.LEGAL_AGREEMENT_START_MONTH, legalAgreementStartDateMonth)
      request.yar.set(constants.redisKeys.LEGAL_AGREEMENT_START_YEAR, legalAgreementStartDateYear)
      return h.view(constants.views.LEGAL_AGREEMENT_START_DATE, {
        legalAgreementStartDateDay,
        legalAgreementStartDateMonth,
        legalAgreementStartDateYear
      })
    }
  }
}
function getDateValue (date) {
  return date.length < 2 ? '0' + date : date
}
export default [{
  method: 'GET',
  path: constants.routes.LEGAL_AGREEMENT_START_DATE,
  handler: handlers.get
}, {
  method: 'POST',
  path: constants.routes.LEGAL_AGREEMENT_START_DATE,
  handler: handlers.post
}]

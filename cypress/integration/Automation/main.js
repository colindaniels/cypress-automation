var credentials = require('/Users/colindaniels/cypress-automation/cypress/fixtures/credentials.json')
var data = require('/Users/colindaniels/cypress-automation/cypress/fixtures/data.json')
context('Actions', () => {
  beforeEach(() => {
    cy.server({ignore: (xhr) => true})
  })
  describe('Startup', () => {
    it('Request Page', () => {
      cy.log(cy.visit('https://secure-qa1.dev-benchmarkanalytics.com/login'))
      cy.get('.form-container').find('button').should('be.visible')
    })
    it('Login', () => {
      cy.login(credentials.email, credentials.password)
  })
  describe('Reports', () => {
    beforeEach(function () {
      // before each test, we can automatically preserve the
      // 'session_id' and 'remember_token' cookies. this means they
      // will not be cleared before the NEXT test starts.
      //
      // the name of your cookies will likely be different
      // this is just a simple example
      Cypress.Cookies.preserveOnce('session_id', 'remember_token')
    })
    it('Create New Report', () => {
      cy.get('.sidebar-menu').find('li').eq(6).as('reports-btn')
      cy.get('@reports-btn').then(value => expect(value.text()).to.equal('Reports'))
      cy.get('@reports-btn').click()
      cy.url().should('eq', 'https://qa1.dev-benchmarkanalytics.com/reports')
      cy.get('.ant-row').find('button').eq(2).as('create-btn')
      cy.get('@create-btn').then(value => expect(value.text()).to.equal('Create New Report'))
      cy.get('@create-btn').click()
      cy.get('.ant-modal-content').should('be.visible')
      cy.get('.ant-modal-content').find('.ant-btn').eq(0).click()
      cy.url().should('include', 'qa1.dev-benchmarkanalytics.com/reports/create-new?reportType=njoag-use-of-force')

      //Incidents
      cy.get('.bdm-section-wrapper-first').should('be.visible')
      cy.fill_input('#incidentCaseNumber', data.case_number)
      cy.fill_input('.ant-calendar-picker-default', data.date_of_incident)
      cy.fill_input('#fieldField508', data.time_of_incident)
      cy.fill_input('#fieldField305', data.location_type)
      cy.fill_input('#fieldField630', data.incident_location)
      cy.fill_input('#fieldField198', data.mile_marker)
      cy.fill_input(":nth-child(5) > .bdm-col-first .ant-select-selection", data.municipality)
      cy.fill_input("#fieldField280", data.indoors_or_outdoors)
      cy.fill_input('#fieldField887', data.lighting)
      cy.fill_input('#incidentWeather', data.weather)
      cy.fill_input(':nth-child(2) > .ant-col-24 .ant-select-selection', data.video_footage)
      if (data.video_footage == 'Yes') {
        cy.fill_input('.bdm-col-not-first > :nth-child(2) > .ant-col-24 input', data.video_footage_type)
      }
      cy.fill_input('#fieldField469', data.origin_of_contact)
      cy.fill_input('#fieldField290', data.incident_type)
      cy.get('.ant-steps-item').eq(1).click()



      //Officers
      cy.checkbox('#fieldField436', data.filing_on_behalf_of_officer)
      if (data.filing_on_behalf_of_officer == true) {
        cy.fill_input(':nth-child(2) > .bdm-col-first > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection', data.reason_of_behalf_filing)

      }
      else if (data.filing_on_behalf_of_officer == false) {
      }
      cy.fill_input('.ant-select-search__field__wrap > .ant-input', data.officer_name)
      
      cy.fill_input('#fieldField671', data.years_of_service)
      cy.fill_input('#fieldField727', data.age)
      cy.checkbox('#fieldField941', data.in_uniform)
      if (data.in_uniform == false) {
        cy.checkbox('#fieldField488', data.wearing_identifiers)
      }
      cy.fill_input('#fieldField220', data.hours_on_duty)
      cy.fill_input(':nth-last-child(1) > .bdm-col-first > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection', data.assignment)
      cy.fill_input('#fieldField735', data.feet)
      cy.fill_input('#fieldField344', data.weight)
      cy.fill_input('#fieldField538', data.inches)
      cy.fill_input('#fieldField755', data.race)
      cy.fill_input('.bdm-col-last .ant-select-selection', data.gender)
      cy.fill_input('.bdm-form-section-first > :nth-child(4) .ant-select-selection', data.rank)
      cy.fill_input('#fieldField804', data.badge_number)
      cy.checkbox('#officerOtherOfficerRespond', data.other_officers)
      if (data['officerOtherOfficerRespond'] == true) {
        cy.fill_input('#officerOtherRespondingOfficers\\[0\\]\\.fieldField252', data['2_officer_outside_agency'])
        cy.fill_input('#officerOtherRespondingOfficers\\[0\\]\\.fieldField849', data['2_officer_first_name'])
        cy.fill_input('#officerOtherRespondingOfficers\\[0\\]\\.fieldField215', data['2_officer_last_name'])
        cy.fill_input('#officerOtherRespondingOfficers\\[0\\]\\.fieldField40', data['2_officer_agency'])
        cy.checkbox('#officerOtherRespondingOfficers\\[0\\]\\.fieldField133', data['2_officer_on_duty'])
        if (data['2_officer_on_duty'] == true) {
          cy.checkbox('#officerOtherRespondingOfficers\\[0\\]\\.fieldField515', data['2_officer_in_uniform'])
        }
      }

      cy.get('.ant-steps-item').eq(2).click()


      //Subjects

      cy.fill_input(':nth-child(2) > .ant-col-NaN .ant-select-selection', data.subject_type)
      cy.fill_input('#subjectSubjects\\[0\\]\\.humanFirstName', data.subject_first_name)
      cy.fill_input('#subjectSubjects\\[0\\]\\.humanLastName', data.subject_last_name)
      cy.fill_input('#subjectSubjects\\[0\\]\\.humanMiddleInitial', data.subject_m_i)
      cy.fill_input('#subjectSubjects\\[0\\]\\.humanHeightFt', data.subject_feet)
      cy.fill_input('#subjectSubjects\\[0\\]\\.humanHeightIn', data.subject_inches)
      cy.fill_input('#subjectSubjects\\[0\\]\\.fieldField174', data.subject_weight)
      cy.fill_input('#subjectSubjects\\[0\\]\\.fieldField764', data.subject_age)
      cy.fill_input('.ant-select-search__field__wrap > #subjectSubjects\\[0\\]\\.fieldField861', data.subject_race)
      cy.fill_input(':nth-child(5) > .ant-col-NaN .ant-select-selection__placeholder', data.gender)
      cy.checkbox('#subjectSubjects\\[0\\]\\.fieldField319', data.subject_transgender)
      if (data.subject_transgender == true) {
        cy.fill_input('.bdm-col-not-first > :nth-child(1) > .ant-col-24 .ant-select-selection__placeholder', data.subject_gender_identity)
      }
      cy.fill_input('.bdm-col-not-last > :nth-child(1) > .ant-col-24 .ant-select-selection__placeholder', data.subject_limited_english)
      cy.fill_input('.ant-select-search__field__wrap > #subjectSubjects\\[0\\]\\.fieldField475', data.subject_condition)
      cy.checkbox('#subjectSubjects\\[0\\]\\.humanCharged', data.subject_arrested)
      if (data.subject_arrested == false) {
        cy.fill_input('.ant-select-search__field__wrap > #subjectSubjects\\[0\\]\\.fieldField691', data.subject_reason_for_no_arrest)
      }
      cy.checkbox('#subjectSubjects\\[0\\]\\.fieldField651', data.subject_charged)
      if (data.subject_charged == true) {
        cy.fill_input('.ant-select-search__field__wrap > #subjectSubjects\\[0\\]\\.fieldField297', data.subject_charges)
      }

      cy.get('.ant-steps-item').eq(3).click()


      //Interactions

      cy.dynamic_fill_input('.bdm-form-repeater:nth-child(1)', '.dJkfbN', data.subjects, '.bdm-form-repeater-item-section .ant-btn')
      cy.dynamic_fill_input('.bdm-form-repeater:nth-child(2)', '.gwLVYU', data.officers, 'button')


      cy.get('.ant-steps-item').eq(4).click()

      cy.checkbox('[title="Are you Injured?"]', data.officer_injured)
      if (data.officer_injured == true) {
        cy.fill_input('.ant-select-search__field__wrap > #fieldField382', data.medical_treatment)
        cy.fill_input('.ant-select-search__field__wrap > #fieldField678', data.injury_type)
      }
      cy.fill_input(".bdm-form-object > .bdm-section-wrapper-first > .bdm-form-section-first > :nth-child(2) > .ant-col-NaN > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection", data.subject_injured_before_incident)
      cy.fill_input(".bdm-form-object > .bdm-section-wrapper-first > .bdm-form-section-not-first > :nth-child(1) > .ant-col-NaN > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection", data.subject_injured_in_incident)
      if (data.subject_injured_in_incident == "Yes") {
        cy.fill_input('.ant-select-search__field__wrap > #injuriesSubjectInjuries\\[0\\]\\.fieldField604', data.subject_type_of_injury)
        cy.fill_input('.ant-select-search__field__wrap > #injuriesSubjectInjuries\\[0\\]\\.fieldField873', data.subject_medical_treatment)
      }



    })
      
    })

    

  })

})

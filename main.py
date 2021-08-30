import random
import datetime
import json
import names
import string
import pprint

with open('data/randomData.json') as f:
  data = json.load(f)

def randomDate(start_date, end_date):
    time_between_dates = end_date - start_date
    days_between_dates = time_between_dates.days
    random_number_of_days = random.randrange(days_between_dates)
    return start_date + datetime.timedelta(days=random_number_of_days)

def pickRandomsFromList(lst):
    return random.sample(lst, random.randrange(1, len(lst) + 1))

def pickOneFromList(lst):
    return random.choice(lst)

def yesOrNo():
    return random.choice(['Yes', 'No'])

def randomBoolean():
    return bool(random.getrandbits(1))

# Incident
case_number = random.randrange(10000, 99999)
date_of_incident = str(randomDate(datetime.date(2020, 1, 1), datetime.date(2020, 2, 1)))
time_of_incident = f'{random.randrange(0, 2400):04}'
location_type = pickRandomsFromList(data['location_type'])
incident_location = pickOneFromList(data['incident_location'])
mile_marker = ''
municipality = pickOneFromList((data['municipality']))
indoors_or_outdoors = pickRandomsFromList(data['indoors_or_outdoors'])
lighting = pickRandomsFromList(data['lighting'])
weather = pickRandomsFromList(data['weather'])
video_footage = yesOrNo()
video_footage_type = pickRandomsFromList(data['video_footage_type'])
origin_of_contact = pickRandomsFromList(data['origin_of_contact'])
incident_type = pickRandomsFromList(data['incident_type'])

# Officers
filing_on_behalf_of_officer = randomBoolean()
reason_of_behalf_filing = pickOneFromList(data['reason_of_behalf_filing'])
officer_name = pickOneFromList(data['officer_name'])
years_of_service = random.randint(0, 20)
age = years_of_service + random.randint(18, 60)
in_uniform = randomBoolean()
wearing_identifiers = randomBoolean()
hours_on_duty = random.randint(0, 9)
assignment = pickOneFromList(data['assignment'])
feet = random.randint(5, 7)
inches = random.randint(0, 12)
weight = random.randint(100, 300)
race = pickRandomsFromList(data['race'])
gender = pickOneFromList(data['gender'])
rank = pickOneFromList(data['rank'])
badge_number = random.randint(100, 99999)
other_officers = randomBoolean()
second_officer_outside_agency = randomBoolean()
second_officer_first_name = names.get_first_name()
second_officer_last_name = names.get_last_name()
second_officer_agency = pickOneFromList(data['second_officer_agency'])
second_officer_on_duty = randomBoolean()
second_officer_in_uniform = randomBoolean()

# Subjects
subject_type = 'Person'
subject_first_name = names.get_first_name()
subject_last_name = names.get_last_name()
subject_m_i = random.choice(string.ascii_letters).upper()
subject_feet = random.randint(5, 7)
subject_inches = random.randint(0, 12)
subject_weight = random.randint(100, 300)
subject_age = random.randint(14, 70)
subject_race = pickRandomsFromList(data['race'])
subject_gender = pickOneFromList(data['gender'])
subject_transgender = randomBoolean()
subject_gender_identity = pickOneFromList(data['subject_gender_identity'])
subject_limited_english = yesOrNo()
subject_condition = pickRandomsFromList(data['subject_condition'])
subject_arrested = randomBoolean()
subject_reason_for_no_arrest = pickRandomsFromList(data['subject_reason_for_no_arrest'])
subject_charged = randomBoolean()
subject_charges = pickRandomsFromList(data['subject_charges'])
n_of_subjects = random.randint(1, 4)
n_of_officers = random.randint(1, 4)

# Interactions
subjects = []
for i in range(n_of_subjects):
    type_of_resistance = pickRandomsFromList(data['type_of_resistance'])
    subject_actions = pickRandomsFromList(data['subject_actions'])
    subjects.append({"type_of_resistance": type_of_resistance, "subject_actions": subject_actions})

officers = [
    {
        "officer_name": ["Austin Lucas"],
        "force_used": pickOneFromList(data['force_used']),
        "force_applied_on": ["Victim"]
    }
]
# Injuries
officer_injured = randomBoolean()
medical_treatment = pickRandomsFromList(data['medical_treatment'])
injury_type = pickRandomsFromList(data['injury_type'])
subject_injured_before_incident = yesOrNo()
subject_injured_in_incident = yesOrNo()
subject_type_of_injury = pickRandomsFromList(data['injury_type'])
subject_medical_treatment = pickRandomsFromList(data['medical_treatment'])


fullDict = {
    "case_number": case_number,
    "date_of_incident": date_of_incident,
    "time_of_incident": time_of_incident,
    "location_type": location_type,
    "incident_location": incident_location,
    "mile_marker": mile_marker,
    "municipality": municipality,
    "indoors_or_outdoors": indoors_or_outdoors,
    "lighting": lighting,
    "weather": weather,
    "video_footage": video_footage,
    "video_footage_type": video_footage_type,
    "origin_of_contact": origin_of_contact,
    "incident_type": incident_type,

    "filing_on_behalf_of_officer": filing_on_behalf_of_officer,
    "reason_of_behalf_filing": reason_of_behalf_filing,
    "officer_name": officer_name,
    "years_of_service": years_of_service,
    "age": age,
    "in_uniform": in_uniform,
    "wearing_identifiers": wearing_identifiers,
    "hours_on_duty": hours_on_duty,
    "assignment": assignment,
    "feet": feet,
    "inches": inches,
    "weight": weight,
    "race": race,
    "gender": gender,
    "rank": rank,
    "badge_number": badge_number,
    "other_officers": other_officers,
    "2_officer_outside_agency": second_officer_outside_agency,
    "2_officer_first_name": second_officer_first_name,
    "2_officer_last_name": second_officer_last_name,
    "2_officer_agency": second_officer_agency,
    "2_officer_on_duty": second_officer_on_duty,
    "2_officer_in_uniform": second_officer_in_uniform,

    "subject_type": subject_type,
    "subject_first_name": subject_first_name,
    "subject_last_name": subject_last_name,
    "subject_m_i": subject_m_i,
    "subject_feet": subject_feet,
    "subject_inches": subject_inches,
    "subject_weight": subject_weight,
    "subject_age": subject_age,
    "subject_race": subject_race,
    "subject_gender": subject_gender,
    "subject_transgender": subject_transgender,
    "subject_gender_identity": subject_gender_identity,
    "subject_limited_english": subject_limited_english,
    "subject_condition": subject_condition,
    "subject_arrested": subject_arrested,
    "subject_reason_for_no_arrest": subject_reason_for_no_arrest,
    "subject_charged": subject_charged,
    "subject_charges": subject_charges,

    "subjects": subjects,
    "officers": officers,

    "officer_injured": officer_injured,
    "medical_treatment": medical_treatment,
    "injury_type": injury_type,
    "subject_injured_before_incident": subject_injured_before_incident,
    "subject_injured_in_incident": subject_injured_in_incident,
    "subject_type_of_injury": subject_type_of_injury,
    "subject_medical_treatment": subject_medical_treatment
}

import json
with open('data/data.json', 'w') as fp:
    json.dump(fullDict, fp, indent=4)
randomquote = function(strategy)
{

// ==============================================
// Copyright 2004 by CodeLifter.com
// Free for all; but please leave in this header.
// ==============================================

var Quotation=new Array(); // do not change this!

// Set up the quotations to be shown, below.
// To add more quotations, continue with the
// pattern, adding to the array.  Remember
// to increment the Quotation[x] index!

Quotation[0] = "\"Visiting remote tribal villages to see how health care is taken out into the community to those who would otherwise find it hard to access.  Assisting in theatre with both the resident surgeon and visiting surgeons from different specialities.\"";
Quotation[1] = "\"Great country, very friendly people and good accommodation.\"";
Quotation[2] = "\"Working with the team doing community paediatric clinics & follow ups in poor & rural communities in India e.g. In schools, hostels & slums. Getting to know some of the children & their families & follow their stories.\"";
Quotation[3] = "\"Hands on experience.\"";
Quotation[4] = "\"Great balance of western and Chinese medicine for comparison. Good level of English spoken by doctors. Good base for travelling and sightseeing.\"";
Quotation[5] = "\"Being able to assist with rhesus cases. Very busy elective, there is always something to observe and/or help with.\"";
Quotation[6] = "\"New pathologies and environment.\"";
Quotation[7] = "\"Experiencing a different part of the world, and meeting the people there.\""; 
Quotation[8] = "\"Everyone was extremely kind to us.\"";
Quotation[9] = "\"Learning how medical education is run in different countries. Dedicated time in speciality of my choosing.\"";
Quotation[10] = "\"Exploring the islands.\"";
Quotation[11] = "\"Seeing rural health clinic and going with data collectors into rural people's homes to collect data about availability of mental health services.\"";
Quotation[12] = "\"Chest drain and LP.\"";
Quotation[13] = "\"Developing research skills, beaches, seeing how a effective partnership works.\"";
Quotation[14] = "\"Fantastic culture, enthusiastic staff, beautiful beaches!\"";
Quotation[15] = "\"Very enthusiastic and friendly team, keen to get me involved in the care of patients presenting with a wide range of conditions. Also the beautiful country of Malta which has much to see and do.\"";
Quotation[16] = "\"Paeds was great for learning, A&E fantastic experience for opportunities to be hands on.\"";
Quotation[17] = "\"Very high standard teaching.\"";
Quotation[18] = "\"I had a couple weeks off and went to New Zealand.\"";
Quotation[19] = "\"The country, the people I met, working with children, the hands-on experience.\"";
Quotation[20] = "\"Good medical exposure, nice people, nice city.\"";
Quotation[21] = "\"Getting to work in an area of the hospital that I wanted to look into but hadn't had a chance to experience, being part of the team caring for these patients and their families.\"";
Quotation[22] = "\"It was a great opportunity to work with a terrific team who were very welcoming, with both surgical and medical exposure. The team was very supportive and the elective offered a great level of practical experience and development.\"";
Quotation[23] = "\"Going on a Beech 200 charter plane as part of an emergency rescue to the north of the island.\"";
Quotation[24] = "\"Busy hospital with lots of opportunities to learn.\"";
Quotation[25] = "\"Being left to run baby clinic despite not speaking the language The opportunity to see diseases and presentations that just don't happen in the UK .The opportunity to be exposed and immersed in a totally different culture. Travelling around after the medic.\"";
Quotation[26] = "\"Seeing patients with a wide variety of haematological diseases.  Increasing my knowledge beyond that taught in the medical curriculum.  Getting a very interesting viewpoint in Clinical Research trials.\"";
Quotation[27] = "\"Gaining extra experience.\"";
Quotation[28] = "\"Fascinating late presentation of many different pathologies and the management of a variety of tropical diseases. Great opportunity to travel.\"";
Quotation[29] = "\"Seeing lots of different cases compared to the UK and observing how the healthcare system is different.\"";
Quotation[30] = "\"Able to see a wide variety of rare neurological conditions Able to see specialised treatments such as deep brain stimulation Heard about new/world class neurology research.\"";
Quotation[31] = "\"The people, the Dr's, the sun, the mountains, the fun!\"";
Quotation[32] = "\"The wide range of procedures that I was able to learn.\"";
Quotation[33] = "\"Surgical experience.\"";
Quotation[34] = "\"Being part of the team in CCU dealing with acutely unwell patients. Seeing procedures and being able to assist. Time travelling afterwards.\"";
Quotation[35] = "\"Opportunity to take a more active role in clinics.\"";
Quotation[36] = "\"Lots of hands on clinical skills and exposure to a great specialty which isn't really touched on in university.\"";
Quotation[37] = "\"Everything! The teaching and clinical opportunities were outstanding. The teams were friendly and welcoming. There was plenty of opportunity to engage in clinical procedures and I really felt part of the team.\"";
Quotation[38] = "\"Everything was brilliant. The 8 weeks spent on elective have been unforgettable. The clinical and practical learning opportunities were exceptional. The teams and staff were always friendly and engaging. Whilst learning a tremendous amount and working hard.\"";
Quotation[39] = "\"Spending time with the people of Nepal.\"";
Quotation[40] = "\"Seeing traditional Chinese medicine and rare usual cases in the top Chinese hospital for neurology.\"";
Quotation[41] = "\"Great variety of patients in the hospital presenting in differnet ways ways to in western hospitals. The people we amazing, very kind and willing to teach and include us in everything.\"";
Quotation[42] = "\"Everything.\"";
Quotation[43] = "\"Visiting the tribal villages with the healthcare visitors, seeing how the tribal people live in the rain forests and how the healthcare visitors care for the population and monitor their health. This was a massive privilege as these villages are very rare.\"";
Quotation[44] = "\"Being a useful member of the hospital team as opposed to an observer.\"";
Quotation[45] = "\"Seeing a large variety of tropical diseases, seeing how patients are treated in a resource poor area and how healtcare differs in developing countries. Also, it was really interesting to see how much more involved relatives were in care over in Tanzania.\"";
Quotation[46] = "\"Highlights were being able to get really involved in managing patients and good experience of bread and butter tropical medicine. Everyone is really friendly and so welcoming, always pleased to see us on the wards especially once they'd got to know us.\"";
Quotation[47] = "\"Being involved with the MDT In Birmingham, carrying out home visits in and around Birmingham, visiting the PKU lab, attending highly specialist metbabolic and neuro clinics, spending time with Anita MacDonald, the world leading metabolic dietician.\""; 
Quotation[48] = "\"Fantastic team and place to visit.\"";
Quotation[49] = "\"Chance to see a wide range of traumatic injuries and the immediate treatment given.\"";
Quotation[50] = "\"Visiting the tribal village communities that the hospital serves with the health visitors. Visiting the school and tea plantation set up and managed by the charity.   Assisting in labour ward.  Teaching we received from the doctors at the hospital.\"";
Quotation[51] = "\"Interesting to experience a different medical system in an equally developed country as our own.  Great country and great people.\"";
Quotation[52] = "\"Nice placement - one of the best in Japan and doctors there will take you to department meals I was there during cherry blossom season I went to language exchange circles and made friends and could practice Japanese.\"";
Quotation[53] = "\"Clerking patients in A&E.\"";
Quotation[54] = "\"Staying with host Sherpa family Experiencing health care in third world country. Tropical medicine international conference.\"";
Quotation[55] = "\"Great experience as a final year student. Plenty of working alone, running the ward rounds. Lots of managing patients, coming up with your own management plans and following them through. Chance to do surgery/caesarians if you would like to. Hot climate.\""; 
Quotation[56] = "\"Experiencing medicine in a developing country, and seeing both the similarities and differences with the UK.\"";
Quotation[57] = "\"The contrast between Tanzania and the UK.\"";
Quotation[58] = "\"Understanding local priorities with respect to health and experiencing a private health care system in a poor and developing country.\"";
Quotation[59] = "\"Travelling around the country. Learning about Maori culture. Meeting up with fellow Cardiff students.\"";
Quotation[60] = "\"Friendly staff.\"";
Quotation[61] = "\"Very friendly people and staff.\"";
Quotation[62] = "\"Opportunity to witness interesting conditions such as Thalassaemia and Dengue fever, as well as the impact of traditional medicine on various conditions. Medical rounds, note writing, and teaching are all carried out in English.\"";
Quotation[63] = "\"The numerous activities available in the surrounding area.\"";
Quotation[64] = "\"Being involved in the teams in the hospital and getting hands-on. Conducting a research project and presenting it to the head of the hospital.\"";
Quotation[65] = "\"We were in a brilliant base location to explore at weekends.\"";
Quotation[66] = "\"Got to practice lots of practical skills.\"";
Quotation[67] = "\"The experience of being in a different environment with limited resources available in comparison to the UK.\"";
Quotation[68] = "\"Eyes opened to how different health systems are.\"";
Quotation[69] = "\"Meeting new people. Being very involved in my hospital placement.\"";
Quotation[70] = "\"Medically - suturing and taking an amputee to the beach for the first time ever to do some water therapy with a physiotherapist. Non medically- helping deliver some relief and respite to those whose houses had been destroyed by cyclone Helena.\"";
Quotation[71] = "\"1. Getting involved in the department and seeing patients under supervision 2. Visiting other parts of NZ with friends.\"";
Quotation[72] = "\"Rural health camps to deliver healthcare to people who would not otherwise have been able to access any.\"";
Quotation[73] = "\"Having my own cosultation room where I could see patients on my own, clerking patients in A&E, assisting in theatre.\"";
Quotation[74] = "\"Spending as much time as I wanted in theatres, with ample opportunity to scrub in and assist.\"";
Quotation[75] = "\"Intubating trauma patients, inserting chest drains, inserting central lines, assisting with laparotomies in theatre, being part of the team.\"";



// ======================================
// Do not change anything below this line
// ======================================
var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));
function showQuotation(){document.write(Quotation[whichQuotation]);}
showQuotation();

};
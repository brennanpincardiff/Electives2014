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

Quotation[0] = "\"Great country, very friendly people and good accommodation.\"";
Quotation[1] = "\"Great balance of western and Chinese medicine for comparison. Good level of English spoken by doctors. Good base for travelling and sightseeing.\"";
Quotation[2] = "\"Learning how medical education is run in different countries. Dedicated time in speciality of my choosing.\"";
Quotation[3] = "\"Lots of hands on clinical skills and exposure to a great specialty which isn't really touched on in University\"";
Quotation[4] = "\"Chance to see a wide range of traumatic injuries and the immediate treatment given.\"";
Quotation[5] = "\"Experiencing medicine in a developing country, and seeing both the similarities and differences with the UK.\"";
Quotation[6] = "\"Understanding local priorities with respect to health and experiencing a private health care system in a poor and developing country\"";
Quotation[7] = "\"Spending as much time as I wanted in theatres, with ample opportunity to scrub in and assist.\"";
Quotation[8] = "\"Very enthusiastic and friendly team, keen to get me involved in the care of patients presenting with a wide range of conditions. Also the beautiful country of Malta which has much to see and do.\""; 
Quotation[9] = "\"Experiencing a different part of the world, and meeting the people there.\"";

// ======================================
// Do not change anything below this line
// ======================================
var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));
function showQuotation(){document.write(Quotation[whichQuotation]);}
showQuotation();

};
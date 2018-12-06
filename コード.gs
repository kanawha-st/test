var sheetID = '1ATLaeQUQ15aX93-UFM4eW0hSioCgiAaWPeJtCQrEW_Y';

function doGet(e) { //render html from template
  return HtmlService.createTemplateFromFile('main').evaluate().setSandboxMode(HtmlService.SandboxMode.NATIVE);
}

function copyToCell(cell, text) { // function called from inside main.html
  var ss = SpreadsheetApp.openById(sheetID);
  var sheet = ss.getSheets()[0];
  sheet.getRange(cell).setValue(text);
  return "OK";
}
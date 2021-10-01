var form = FormApp.openById('ddsfd4354387hd8fhjhj8h_YYzthoEr6k_YYzthoEr6k');
var sheets = SpreadsheetApp.openById('kjdsf7_hjdshds8jhfsdou890ionduf88u88ijhdi9-0').getSheetByName('CampoLista');
var lastRow = sheets.getLastRow();
var range = sheets.getRange("A2:A"+lastRow).getValues();

function getCriacao()
{
  var item = form.addListItem();
  item.setTitle('Titulo Campo:')
  item.setChoiceValues(range);

  //Logger.log(item.getId());

}

function updateLista()
{
  form.getItemById(5.43069675).asListItem().setChoiceValues(range);
}
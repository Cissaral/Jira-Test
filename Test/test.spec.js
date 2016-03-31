var expect=require ('chai').expect;

describe('TestModule', function() {
beforeEach(module('taschenrechner'));
it('Modul ist geladen', function () {
    expect(module).to.be.true();
}});


/*describe('TestValue', function() {
beforeEach(module('taschenrechner'));
it('Valider Wert in Textfeld eingegeben', function () {
	eingabe1='no';
    expect(eingabe1).toBe(var);
    eingabe2='xy';
    expect(eingabe2).to.be.false();
});


describe("Calculation", function() {
  it("Berechnung prüfen", function() {
    var ergebnis = 4 + 6;
    expect(ergebnis).toBe(10);
  });
*/


});
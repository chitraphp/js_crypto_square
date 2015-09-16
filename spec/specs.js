describe('cryptoSquare', function() {
  it("takes a three letter word ", function() {
    expect(cryptoSquare("good boy",3)).to.eql("gob yod o");
  });
});

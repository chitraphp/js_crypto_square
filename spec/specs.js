describe('cryptoSquare', function() {
  it("takes a single letter word ", function() {
    expect(cryptoSquare("he'llo! chitra")).to.eql(["h","e","l"]);
  });
});

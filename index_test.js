let expect = chai.expect
let assert = chai.assert;

describe('Deck', () => {
  it('should generate a standard deck of 52 cards', () => {
    const deck = new Deck(); 
    deck .generateDeck();
    assert.equal(deck.cards.length,52)
  });
});

  describe('Player', ()=> {
    it('should increment the score when a round is won', () => {
        const player = new Player('TestPlayer');
        assert.equal(player.getScore(), 0);

        player.incrementScore();
        assert.equal(player.getScore(), 1);

        player.incrementScore();
        assert.equal(player.getScore(), 2);
    })  

  })